// -*- mode: typescript; typescript-indent-level: 2; -*-

export interface Config {
  bridge: {
    endpoint: string
  }
}

export function init(): Config {
  return {
    bridge: {
      endpoint: "localhost:9999"
    }
  }
}
