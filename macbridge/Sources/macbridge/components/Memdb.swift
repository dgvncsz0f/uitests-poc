// -*- mode: swift; swift-mode:basic-offset: 2; -*-

import class Concurrent.MVar

struct ComponentsMemdb {
  private var database: MVar<[String: Any]>

  init() {
    self.database = MVar(initial: [:])
  }

  func put(key: String, value: Any) {
    self.database.modify_ {
      var copy = $0
      copy[key] = value
      return copy
    }
  }

  func read<T>(key: String) -> T? {
    guard let value = self.database.read()[key] as? T else { return nil }
    return value
  }
}
