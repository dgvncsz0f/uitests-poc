// -*- mode: swift; swift-mode:basic-offset: 2; -*-

import GRPC

struct ComponentsRuntime {
  let config: ComponentsConfig
  let grpcServer: ComponentsGRPCServer
  let memdb: ComponentsMemdb
  let services: [CallHandlerProvider]

  init(config: ComponentsConfig, grpcServer: ComponentsGRPCServer, memdb: ComponentsMemdb) {
    self.config = config
    self.grpcServer = grpcServer
    self.memdb = memdb
    self.services = [
      LauncherGrpc(memdb: memdb),
      ElementGrpc(memdb: memdb),
      KeyboardGrpc(),
    ]
  }

  static func new() -> ComponentsRuntime {
    let config = ComponentsConfig()
    let grpcServer = try! ComponentsGRPCServer(config: config)
    let memdb = ComponentsMemdb()

    return ComponentsRuntime(
      config: config,
      grpcServer: grpcServer,
      memdb: memdb
    )
  }
}
