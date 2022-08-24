#!/bin/sh


grpcurl -plaintext -vv -proto Sources/remotecontrol/grpc/service.proto -d '{"path": "/applications/sketch.app"}' 127.0.0.1:9999 remote_control.Launcher.openApplication

sleep 1

# grpcurl -plaintext -vv -proto Sources/remotecontrol/grpc/service.proto \
#         -d '{"appRef": "A4C4E070-A517-4354-9E4E-57B71E79EA12", "filter": "AXIdentifier = '\'_NS:6\''"}' \
#         127.0.0.1:9999 remote_control.Element.find

# grpcurl -plaintext -vv -proto Sources/remotecontrol/grpc/service.proto \
#         -d '{"appRef": "A4C4E070-A517-4354-9E4E-57B71E79EA12", "filter": "AXIdentifier = '\'_NS:6\''"}' \
#         127.0.0.1:9999 remote_control.Element.listAction

echo ================
echo getAttr
sleep 1
grpcurl -plaintext -vv -proto Sources/remotecontrol/grpc/service.proto \
        -d '{"appRef": "A4C4E070-A517-4354-9E4E-57B71E79EA12", "filter": "AXIdentifier = '\'_NS:6\'' and AXRole = '\'AXButton\''", "attribute": "AXRole"}' \
        127.0.0.1:9999 remote_control.Element.getAttr

echo ================
echo performAction
sleep 1
grpcurl -plaintext -vv -proto Sources/remotecontrol/grpc/service.proto \
        -d '{"appRef": "A4C4E070-A517-4354-9E4E-57B71E79EA12", "filter": "AXIdentifier = '\'_NS:6\'' and AXRole = '\'AXButton\''", "action": "AXPress"}' \
        127.0.0.1:9999 remote_control.Element.performAction

echo ================
echo putAttr
sleep 1
grpcurl -plaintext -vv -proto Sources/remotecontrol/grpc/service.proto \
        -d '{"appRef": "A4C4E070-A517-4354-9E4E-57B71E79EA12", "filter": "AXIdentifier = '\'_NS:17\'' and AXRole = '\'AXTextField\''", "attribute": "AXFocused", "value": {"boolValue": false}}' \
        127.0.0.1:9999 remote_control.Element.putAttr
