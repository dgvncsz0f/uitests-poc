// -*- mode: typescript; typescript-indent-level: 2; -*-

import * as configComp from "../components/config";
import * as macbridgeComp from "../components/macbridge";
import * as systemComp from "../components/system";
import * as macbridgeSvc from "../macbridge/core";
import * as sketchSvc from "../sketch/core";

test("user/password sign in", async () => {
  const username = systemComp.getEnv("SKETCH_USERNAME");
  const password = systemComp.getEnv("SKETCH_PASSWORD");

  const config = configComp.init();
  const macbridge = macbridgeComp.init(config);

  const sketch = await macbridgeSvc.openApp(macbridge, "/Applications/Sketch.app");

  await sketchSvc.signin(sketch, username, password);

  const state = await sketchSvc.whichState(sketch);
  await expect(state).toBe(sketchSvc.WhichState.Authenticated)
});

test("user/password safari login", async () => {
  const username = systemComp.getEnv("SKETCH_USERNAME");
  const password = systemComp.getEnv("SKETCH_PASSWORD");

  const config = configComp.init();
  const macbridge = macbridgeComp.init(config);

  const safari = await macbridgeSvc.openApp(macbridge, "/Applications/Safari.app");

  await macbridgeSvc.waitElement(safari, "AXIdentifier = 'WEB_BROWSER_ADDRESS_AND_SEARCH_FIELD'");
  await macbridgeSvc.focus(safari, "AXIdentifier = 'WEB_BROWSER_ADDRESS_AND_SEARCH_FIELD'");
  await macbridgeSvc.sendtext(safari, "dev.sketch.com/signin");
  await macbridgeSvc.confirm(safari, "AXIdentifier = 'WEB_BROWSER_ADDRESS_AND_SEARCH_FIELD'");

  await macbridgeSvc.waitElement(safari, "AXDOMIdentifier = 'text-input'");
  await macbridgeSvc.focus(safari, "AXDOMIdentifier = 'text-input'");
  await macbridgeSvc.sendtext(safari, username);

  await macbridgeSvc.focus(safari, "AXDOMIdentifier = 'password-input'");
  await macbridgeSvc.sendtext(safari, password);

  await macbridgeSvc.press(safari, "AXRole = 'AXButton' and AXTitle = 'Sign In'");

  await macbridgeSvc.waitElement(safari, "AXIdentifier = 'WEB_BROWSER_ADDRESS_AND_SEARCH_FIELD' and AXValue LIKE 'https://dev.sketch.com/workspace/*/shares'")
})
