// swift-tools-version:5.6

import PackageDescription

let package = Package(
    name: "macbridge",
    platforms: [
        .macOS(.v10_15),
    ],
    dependencies: [
      .package(url: "https://github.com/typelift/Concurrent.git", branch: "master"),
      .package(url: "https://github.com/grpc/grpc-swift.git", from: "1.0.0")
    ],
    targets: [
      .executableTarget(name: "macbridge", dependencies: ["Concurrent", .product(name: "GRPC", package: "grpc-swift")])
    ]
)
