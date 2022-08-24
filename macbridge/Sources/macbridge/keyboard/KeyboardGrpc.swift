// -*- mode: swift; swift-mode:basic-offset: 2; -*-

import GRPC
import NIOCore
import Foundation
import CoreGraphics

final class KeyboardGrpc : Macbridge_KeyboardAsyncProvider {
  let interceptors: Macbridge_KeyboardServerInterceptorFactoryProtocol? = nil

  func sendtext(
    request: Macbridge_KeyboardSendtextInput,
    context: GRPCAsyncServerCallContext
  ) async throws ->  Macbridge_KeyboardSendtextReply {
    KeyboardCore.sendtext(request.text)
    return Macbridge_KeyboardSendtextReply()
  }

  func sendkeys(
    request: Macbridge_KeyboardSendkeysInput,
    context: GRPCAsyncServerCallContext
  ) async throws -> Macbridge_KeyboardSendkeysReply {
    return Macbridge_KeyboardSendkeysReply()
  }
}
