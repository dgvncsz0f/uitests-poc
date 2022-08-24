// -*- mode: swift; swift-mode:basic-offset: 2; -*-

import AppKit

enum LauncherCore {
  static func openApp(path: String, memdb: ComponentsMemdb) async throws -> UUID {
    let url = URL(fileURLWithPath: path)
    let conf = NSWorkspace.OpenConfiguration()
    let app = try await NSWorkspace.shared.openApplication(at: url, configuration: conf)
    let ref = UUID()

    memdb.put(key: ref.uuidString, value: app)

    return ref
  }

  static func findApp(ref: UUID, memdb: ComponentsMemdb) -> NSRunningApplication? {
    return memdb.read(key: ref.uuidString)
  }
}
