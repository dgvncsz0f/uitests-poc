// -*- mode: typescript; typescript-indent-level: 2; -*-

import * as macbridgeComp from "../components/macbridge";
import * as systemComp from "../components/system";
import * as macbridgeType from "../macbridge/service_pb";
import * as bridgeConsts from "./constants";

export interface AppRef {
  readonly client: macbridgeComp.Macbridge;
  readonly appRef: string;
}

export async function openApp(client: macbridgeComp.Macbridge, path: string): Promise<AppRef> {
  return macbridgeComp
    .openApp(client, path)
    .then(reply => {
      return {client: client, appRef: reply.getAppRef()}
    });
}

export async function sendtext(appRef: AppRef, text: string): Promise<void> {
  await macbridgeComp.sendtext(appRef.client, text)
}

export async function exists(appRef: AppRef, query: string): Promise<boolean> {
  return countElements(appRef, query).then(reply => reply > 0)
}

export async function countElements(appRef: AppRef, query: string): Promise<number> {
  return macbridgeComp
    .elementFind(appRef.client, appRef.appRef, query)
    .then(reply => reply.getCount());
}

export async function attributes(appRef: AppRef, query: string): Promise<string[]> {
  return macbridgeComp
    .elementListAttr(appRef.client, appRef.appRef, query)
    .then(reply => reply.getAttrsList());
}

export async function attribute(appRef: AppRef, query: string, attribute: string): Promise<macbridgeType.ElementValue | undefined> {
  return macbridgeComp
    .elementGetAttr(appRef.client, appRef.appRef, query, attribute)
    .then(reply => reply.getValue());
}

export async function actions(appRef: AppRef, query: string): Promise<string[]> {
  return macbridgeComp
    .elementListAction(appRef.client, appRef.appRef, query)
    .then(reply => reply.getActionsList());
}

export async function perform(appRef: AppRef, query: string, action: string): Promise<void> {
  const reply = await macbridgeComp.elementPerformAction(appRef.client, appRef.appRef, query, action);
  if (!reply.getSuccess()) {
    return Promise.reject(new Error(`Can't perform action ${action} on element ${query}`))
  }
}

export async function press(appRef: AppRef, query: string): Promise<void> {
  return perform(appRef, query, bridgeConsts.ACTION_PRESS);
}

export async function confirm(appRef: AppRef, query: string): Promise<void> {
  const reply = await macbridgeComp.elementPerformAction(appRef.client, appRef.appRef, query, bridgeConsts.ACTION_CONFIRM);
  if (!reply.getSuccess()) {
    return Promise.reject(new Error(`Confirm has failed on element ${query}`));
  }
}

export async function focus(appRef: AppRef, query: string): Promise<void> {
  const reply = await macbridgeComp.elementPutAttr(appRef.client, appRef.appRef, query, "AXFocused", macbridgeComp.attrValue(true))
  if (!reply.getSuccess()) {
    return Promise.reject(new Error(`Focus has failed on element ${query}`))
  }
}

export async function waitElement(appRef: AppRef, query: string, options: {delayInMillis?: number, maxAttempts?: number} = {}): Promise<void> {
  const delayInMillis_ = options.delayInMillis || 1000;
  const maxAttempts_ = (typeof options.maxAttempts == 'number') ? options.maxAttempts : 30;

  if (maxAttempts_ <= 0) {
    return Promise.reject(new Error(`Timeout waiting for element: ${query}`));
  }

  const count = await countElements(appRef, query)
  if (count == 0) {
    await systemComp.delay(1000)
    return waitElement(appRef, query, {delayInMillis: delayInMillis_, maxAttempts: maxAttempts_ - 1});
  }

  const value = await attribute(appRef, query, "AXEnabled");
  if (value === undefined || !value.getBoolValue()) {
    await systemComp.delay(1000)
    return waitElement(appRef, query, {delayInMillis: delayInMillis_, maxAttempts: maxAttempts_ - 1});
  }
}
