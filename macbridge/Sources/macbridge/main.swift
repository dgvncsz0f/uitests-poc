// -*- mode: swift; swift-mode:basic-offset: 2; -*-

import Foundation
import class Concurrent.MVar
import ApplicationServices
import Carbon
import Cocoa

let mvar: MVar<()> = MVar()
let runtime = ComponentsRuntime.new()

let trusted = kAXTrustedCheckOptionPrompt.takeUnretainedValue()
let privOptions = [trusted: true] as CFDictionary
if !AXIsProcessTrustedWithOptions(privOptions) {
  fatalError("accessibility error!")
}

let task = Task {
  defer { mvar.put(()) }
  try await runtime.grpcServer.start(services: runtime.services)
}

mvar.take()
