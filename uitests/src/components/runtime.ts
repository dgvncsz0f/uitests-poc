// -*- mode: typescript; typescript-indent-level: 2; -*-

import * as configComp from "./config"
import * as macbridgeComp from "./macbridge"

export interface Runtime {
  config: configComp.Config
  bridge: macbridgeComp.Macbridge
}
