// -*- mode: swift; swift-mode:basic-offset: 2; -*-

import GRPC
import NIOCore
import Foundation

final class ElementGrpc: Macbridge_ElementAsyncProvider {
  let interceptors: Macbridge_ElementServerInterceptorFactoryProtocol? = nil
  let memdb: ComponentsMemdb

  init(memdb: ComponentsMemdb) {
    self.memdb = memdb
  }

  func find(
    request: Macbridge_ElementFindInput,
    context: GRPCAsyncServerCallContext
  ) async throws ->  Macbridge_ElementFindReply {
    let ref = UUID(uuidString: request.appRef)!
    let app = LauncherCore.findApp(ref: ref, memdb: self.memdb)!
    let root = ElementCore.root(app)
    let query = ElementAdapter.filterInput(request.filter)
    let nodes = ElementCore.find(root, query: query)

    return Macbridge_ElementFindReply.with {
      $0.count = Int32(nodes.count)
    }
  }

  func listAttr(
    request: Macbridge_ElementListAttrInput,
    context: GRPCAsyncServerCallContext
  ) async throws -> Macbridge_ElementListAttrReply {
    let ref = UUID(uuidString: request.appRef)!
    let app = LauncherCore.findApp(ref: ref, memdb: self.memdb)!
    let root = ElementCore.root(app)
    let query = ElementAdapter.filterInput(request.filter)
    let names = ElementCore.find(root, query: query)
      .first
      .flatMap({ ElementCore.listAttr($0) })

    return Macbridge_ElementListAttrReply.with {
      $0.attrs = names ?? []
    }
  }

  func listAction(
    request: Macbridge_ElementListActionInput,
    context: GRPCAsyncServerCallContext
  ) async throws -> Macbridge_ElementListActionReply {
    let ref = UUID(uuidString: request.appRef)!
    let app = LauncherCore.findApp(ref: ref, memdb: self.memdb)!
    let root = ElementCore.root(app)
    let query = ElementAdapter.filterInput(request.filter)
    let names = ElementCore.find(root, query: query)
      .first
      .flatMap({ ElementCore.listAction($0) })

    return Macbridge_ElementListActionReply.with {
      $0.actions = names ?? []
    }
  }

  func performAction(
    request: Macbridge_ElementPerformActionInput,
    context: GRPCAsyncServerCallContext
  ) async throws -> Macbridge_ElementPerformActionReply {
    let ref = UUID(uuidString: request.appRef)!
    let app = LauncherCore.findApp(ref: ref, memdb: self.memdb)!
    let root = ElementCore.root(app)
    let query = ElementAdapter.filterInput(request.filter)
    let output = ElementCore.find(root, query: query)
      .first
      .flatMap({ ElementCore.performAction($0, action: request.action) })

    return Macbridge_ElementPerformActionReply.with {
      $0.success = output ?? false
    }
  }

  func getAttr(
    request: Macbridge_ElementGetAttrInput,
    context: GRPCAsyncServerCallContext
  ) async throws -> Macbridge_ElementGetAttrReply {
    let ref = UUID(uuidString: request.appRef)!
    let app = LauncherCore.findApp(ref: ref, memdb: self.memdb)!
    let root = ElementCore.root(app)
    let query = ElementAdapter.filterInput(request.filter)
    let output = ElementCore.find(root, query: query)
      .first
      .flatMap({ ElementCore.attr($0, key: request.attribute)} )
      .flatMap({ ElementAdapter.elementValueOutput($0) })


    return Macbridge_ElementGetAttrReply.with {
      $0.value = output ?? ElementAdapter.elementValueOutput()
    }
  }

  func putAttr(
    request: Macbridge_ElementPutAttrInput,
    context: GRPCAsyncServerCallContext
  ) async throws -> Macbridge_ElementPutAttrReply {
    let ref = UUID(uuidString: request.appRef)!
    let app = LauncherCore.findApp(ref: ref, memdb: self.memdb)!
    let root = ElementCore.root(app)
    let query = ElementAdapter.filterInput(request.filter)
    let value = ElementAdapter.valueInput(request.value)
    let output = ElementCore.find(root, query: query)
      .first
      .flatMap({ ElementCore.attr($0, key: request.attribute, value: value)} )

    return Macbridge_ElementPutAttrReply.with {
      $0.success = output ?? false
    }
  }
}
