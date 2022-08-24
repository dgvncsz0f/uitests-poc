// -*- mode: typescript; typescript-indent-level: 2; -*-

import * as macbridgeRpc from "../macbridge/service_grpc_pb";
import * as macbridgeType from "../macbridge/service_pb";
import * as grpc from "@grpc/grpc-js";
import * as config from "./config";

export interface Macbridge {
  config: config.Config;
  launcherClient: macbridgeRpc.LauncherClient;
  elementClient: macbridgeRpc.ElementClient;
  keyboardClient: macbridgeRpc.KeyboardClient;
}

export function init(config: config.Config): Macbridge {
  return {
    config: config,
    launcherClient: new macbridgeRpc.LauncherClient(config.bridge.endpoint, grpc.credentials.createInsecure()),
    elementClient: new macbridgeRpc.ElementClient(config.bridge.endpoint, grpc.credentials.createInsecure()),
    keyboardClient: new macbridgeRpc.KeyboardClient(config.bridge.endpoint, grpc.credentials.createInsecure()),
  }
}

function callback2promise<A, B>(resolve: ((_: A) => void), reject: ((_: B) => void)) {
  return (error: B, reply: A) => {
    if (error) {
      reject(error)
    } else {
      resolve(reply)
    }
  }
}

export function openApp(self: Macbridge, path: string): Promise<macbridgeType.LauncherOpenAppReply> {
  const input = new macbridgeType.LauncherOpenAppInput().setPath(path);
  return new Promise<macbridgeType.LauncherOpenAppReply>((resolve, reject) => {
    self.launcherClient.openApp(input, callback2promise(resolve, reject))
  });
}

export function sendtext(self: Macbridge, text: string): Promise<macbridgeType.KeyboardSendtextReply> {
  const input = new macbridgeType.KeyboardSendtextInput().setText(text);
  return new Promise<macbridgeType.KeyboardSendtextReply>((resolve, reject) => {
    self.keyboardClient.sendtext(input, callback2promise(resolve, reject))
  });
}

export function elementFind(self: Macbridge, appRef: string, query: string): Promise<macbridgeType.ElementFindReply> {
  const input = new macbridgeType.ElementFindInput()
    .setAppRef(appRef)
    .setFilter(query);
  return new Promise<macbridgeType.ElementFindReply>((resolve, reject) => {
    self.elementClient.find(input, callback2promise(resolve, reject))
  });
}

export function elementListAttr(self: Macbridge, appRef: string, query: string): Promise<macbridgeType.ElementListAttrReply> {
  const input = new macbridgeType.ElementListAttrInput()
    .setAppRef(appRef)
    .setFilter(query);
  return new Promise<macbridgeType.ElementListAttrReply>((resolve, reject) => {
    self.elementClient.listAttr(input, callback2promise(resolve, reject))
  });
}

export function elementListAction(self: Macbridge, appRef: string, query: string): Promise<macbridgeType.ElementListActionReply> {
  const input = new macbridgeType.ElementListActionInput()
    .setAppRef(appRef)
    .setFilter(query);
  return new Promise<macbridgeType.ElementListActionReply>((resolve, reject) => {
    self.elementClient.listAction(input, callback2promise(resolve, reject))
  });
}

export function elementGetAttr(self: Macbridge, appRef: string, query: string, attr: string): Promise<macbridgeType.ElementGetAttrReply> {
  const input = new macbridgeType.ElementGetAttrInput()
    .setAppRef(appRef)
    .setFilter(query)
    .setAttribute(attr);
  return new Promise<macbridgeType.ElementGetAttrReply>((resolve, reject) => {
    self.elementClient.getAttr(input, callback2promise(resolve, reject))
  });
}

export function elementPutAttr(self: Macbridge, appRef: string, query: string, attr: string, value: macbridgeType.ElementValue): Promise<macbridgeType.ElementPutAttrReply> {
  const input = new macbridgeType.ElementPutAttrInput()
    .setAppRef(appRef)
    .setFilter(query)
    .setAttribute(attr)
    .setValue(value);

  return new Promise<macbridgeType.ElementPutAttrReply>((resolve, reject) => {
    self.elementClient
      .putAttr(input, callback2promise(resolve, reject))
  });
}

export function elementPerformAction(self: Macbridge, appRef: string, query: string, action: string): Promise<macbridgeType.ElementPerformActionReply> {
  const input = new macbridgeType.ElementPerformActionInput()
    .setAppRef(appRef)
    .setFilter(query)
    .setAction(action);
  return new Promise<macbridgeType.ElementPerformActionReply>((resolve, reject) => {
    self.elementClient.performAction(input, callback2promise(resolve, reject))
  });
}

export function strAttrValue(value: string): macbridgeType.ElementValue {
  return new macbridgeType.ElementValue().setStrValue(value);
}

export function boolAttrValue(value: boolean): macbridgeType.ElementValue {
  return new macbridgeType.ElementValue().setBoolValue(value);
}

export function intAttrValue(value: number): macbridgeType.ElementValue {
  return new macbridgeType.ElementValue().setIntValue(value);
}

export function floatAttrValue(value: number): macbridgeType.ElementValue {
  return new macbridgeType.ElementValue().setFloatValue(value);
}

export function attrValue(value: string | boolean | number | null | undefined): macbridgeType.ElementValue {
  switch (typeof value) {
    case "string":
      return strAttrValue(value)
    case "boolean":
      return boolAttrValue(value)
    case "number":
      return floatAttrValue(value)
    default:
      if (value === null || value === undefined) {
        return new macbridgeType.ElementValue()
      } else {
        throw Error(`invalid value: ${value}`);
      }
  }
}
