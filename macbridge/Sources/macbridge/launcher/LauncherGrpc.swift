// -*- mode: swift; swift-mode:basic-offset: 2; -*-

import GRPC
import NIOCore

final class LauncherGrpc: Macbridge_LauncherAsyncProvider {
  let interceptors: Macbridge_LauncherServerInterceptorFactoryProtocol? = nil
  let memdb: ComponentsMemdb

  init (memdb: ComponentsMemdb) {
    self.memdb = memdb
  }

  func openApp(
    request: Macbridge_LauncherOpenAppInput,
    context: GRPCAsyncServerCallContext
  ) async throws ->  Macbridge_LauncherOpenAppReply {
    let appRef = try await LauncherCore.openApp(path: request.path, memdb: memdb)
    return Macbridge_LauncherOpenAppReply.with {
      $0.appRef = appRef.uuidString
    }
  }
}
