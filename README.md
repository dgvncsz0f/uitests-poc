# uitests

## first time setup

```
$ brew install protobuf protobuf-swift grpc grpc-swift
$ make install
```

## compiling

```
$ make build
```

## running tests

Start the server. This will block your terminal, so you might want to
run this in a separate shell:

```
$ ./macbridge/.build/debug/macbridge
```

The first time you execute this script it will ask you to allow this
program to control the computer using accessibility APIs. After you
enable this option, start the program again.

Before you run the tests, make sure the mac/web app will ask for
credentials (sign out from all workspaces). The tests are very simple
and don't check for every possibility:

```
$ make tests SKETCH_USERNAME=... SKETCH_PASSWORD=...
```
