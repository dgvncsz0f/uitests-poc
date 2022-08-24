// -*- mode: typescript; typescript-indent-level: 2; -*-

import * as macbridgeComp from "../components/macbridge";
import * as systemComp from "../components/system";
import * as bridgeSvc from "../macbridge/core"
import * as bridgeConsts from "../macbridge/constants"
import * as sketchConsts from "./constants"

export enum WhichState {
  SignIn = "sign-in",
  Authenticated = "authenticated"
}

export async function whichState(sketch: bridgeSvc.AppRef): Promise<WhichState> {
  const signInWindow = await bridgeSvc.exists(sketch, sketchConsts.SIGNIN_WINDOW);
  const recentDocuments = await bridgeSvc.exists(sketch, sketchConsts.RECENT_DOCUMENTS_WINDOW)

  if (signInWindow) {
    return WhichState.SignIn;
  } else if (recentDocuments) {
    return WhichState.Authenticated;
  } else {
    await systemComp.delay(1000);
    return whichState(sketch);
  }
}

export async function signin(sketch: bridgeSvc.AppRef, username: string, password: string): Promise<void> {
  // click on the sign in button
  await bridgeSvc.waitElement(sketch, sketchConsts.SIGNIN_SIGNIN_BUTTON)
  await bridgeSvc.press(sketch, sketchConsts.SIGNIN_SIGNIN_BUTTON)

  // focus, fill in the username and confirm
  await bridgeSvc.waitElement(sketch, sketchConsts.SIGNIN_USERNAME_FIELD)
  await bridgeSvc.focus(sketch, sketchConsts.SIGNIN_USERNAME_FIELD)
  await bridgeSvc.sendtext(sketch, username)

  // focus, fill in the password and confirm
  await ignoreError(bridgeSvc.focus(sketch, sketchConsts.SIGNIN_PASSWORD_FIELD));
  await bridgeSvc.sendtext(sketch, password)

  // submit the credentials
  await bridgeSvc.press(sketch, sketchConsts.SIGNIN_SUBMIT_BUTTON)

  // await for the sign in to be completed
  await bridgeSvc.waitElement(sketch, sketchConsts.SIGNIN_GETTING_STARTED_BUTTON)
  await ignoreError(bridgeSvc.press(sketch, sketchConsts.SIGNIN_GETTING_STARTED_BUTTON));
}

function ignoreError(promise: Promise<any>): Promise<void> {
  return promise.catch(_ => Promise.resolve());
}
