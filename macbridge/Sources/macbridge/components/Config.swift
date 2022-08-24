// -*- mode: swift; swift-mode:basic-offset: 2; -*-

struct ComponentsConfig {
  struct Server {
    let port: Int
    let numberOfThreads: Int
  }

  let server: Server

  init() {
    server = Server(port: 9999, numberOfThreads: 1)
  }
}
