// -*- mode: swift; swift-mode:basic-offset: 2; -*-

import GRPC
import NIOCore
import NIOPosix
import class Concurrent.MVar

struct ComponentsGRPCServer {

  let group: MultiThreadedEventLoopGroup
  let config: ComponentsConfig

  init(config: ComponentsConfig) throws {
    self.config = config
    self.group = MultiThreadedEventLoopGroup(numberOfThreads: System.coreCount)
  }

  func start (services: [CallHandlerProvider]) async throws {
    defer {
      try! group.syncShutdownGracefully()
    }

    let server = try await Server.insecure(group: group)
      .withServiceProviders(services)
      .bind(host: "127.0.0.1", port: self.config.server.port)
      .get()

    print(server.channel.localAddress!)

    try await server.onClose.get()

    print("WAT")
  }
}
