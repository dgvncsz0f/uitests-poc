dest_proto = service.proto
src_files  = $(shell find macbridge/Sources -type f -name \*.proto)

install:
	(cd uitests; env npm_config_target_arch=x64 npm i --no-save)

protobuf: protobuf_typescript protobuf_swift

build: build-swift build-typescript

build-swift: protobuf
	(cd macbridge; xcrun swift build)

build-typescript: protobuf
	(cd uitests; yarn build)

test:
	(cd uitests; yarn test)

protobuf_cat:
	echo 'syntax = "proto3";' > $(dest_proto)
	echo 'package macbridge;' >> $(dest_proto)
	for file in $(src_files); \
	do \
	   echo >> $(dest_proto); \
	   cat $$file >> $(dest_proto); \
	   echo >> $(dest_proto); \
	done

protobuf_typescript: protobuf_cat
	uitests/node_modules/.bin/grpc_tools_node_protoc \
	  --js_out=import_style=commonjs,binary:./uitests/src/macbridge \
	  --grpc_out=grpc_js:./uitests/src/macbridge \
	  $(dest_proto)

	uitests/node_modules/grpc-tools/bin/protoc \
	  --plugin=protoc-gen-ts=$(CURDIR)/uitests/node_modules/.bin/protoc-gen-ts \
	  --plugin=protoc-gen-grpc=$(CURDIR)/uitests/node_modules/.bin/grpc_tools_node_protoc_plugin \
	  --ts_out=service=grpc_js:./uitests/src/macbridge \
	  $(dest_proto)

protobuf_swift: protobuf_cat
	protoc \
	  --grpc-swift_out=macbridge/Sources/macbridge \
	  --swift_out=macbridge/Sources/macbridge \
	  $(dest_proto)
