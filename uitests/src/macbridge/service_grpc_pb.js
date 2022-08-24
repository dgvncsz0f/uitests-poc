// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var service_pb = require('./service_pb.js');

function serialize_macbridge_ElementFindInput(arg) {
  if (!(arg instanceof service_pb.ElementFindInput)) {
    throw new Error('Expected argument of type macbridge.ElementFindInput');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_macbridge_ElementFindInput(buffer_arg) {
  return service_pb.ElementFindInput.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_macbridge_ElementFindReply(arg) {
  if (!(arg instanceof service_pb.ElementFindReply)) {
    throw new Error('Expected argument of type macbridge.ElementFindReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_macbridge_ElementFindReply(buffer_arg) {
  return service_pb.ElementFindReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_macbridge_ElementGetAttrInput(arg) {
  if (!(arg instanceof service_pb.ElementGetAttrInput)) {
    throw new Error('Expected argument of type macbridge.ElementGetAttrInput');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_macbridge_ElementGetAttrInput(buffer_arg) {
  return service_pb.ElementGetAttrInput.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_macbridge_ElementGetAttrReply(arg) {
  if (!(arg instanceof service_pb.ElementGetAttrReply)) {
    throw new Error('Expected argument of type macbridge.ElementGetAttrReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_macbridge_ElementGetAttrReply(buffer_arg) {
  return service_pb.ElementGetAttrReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_macbridge_ElementListActionInput(arg) {
  if (!(arg instanceof service_pb.ElementListActionInput)) {
    throw new Error('Expected argument of type macbridge.ElementListActionInput');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_macbridge_ElementListActionInput(buffer_arg) {
  return service_pb.ElementListActionInput.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_macbridge_ElementListActionReply(arg) {
  if (!(arg instanceof service_pb.ElementListActionReply)) {
    throw new Error('Expected argument of type macbridge.ElementListActionReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_macbridge_ElementListActionReply(buffer_arg) {
  return service_pb.ElementListActionReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_macbridge_ElementListAttrInput(arg) {
  if (!(arg instanceof service_pb.ElementListAttrInput)) {
    throw new Error('Expected argument of type macbridge.ElementListAttrInput');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_macbridge_ElementListAttrInput(buffer_arg) {
  return service_pb.ElementListAttrInput.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_macbridge_ElementListAttrReply(arg) {
  if (!(arg instanceof service_pb.ElementListAttrReply)) {
    throw new Error('Expected argument of type macbridge.ElementListAttrReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_macbridge_ElementListAttrReply(buffer_arg) {
  return service_pb.ElementListAttrReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_macbridge_ElementPerformActionInput(arg) {
  if (!(arg instanceof service_pb.ElementPerformActionInput)) {
    throw new Error('Expected argument of type macbridge.ElementPerformActionInput');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_macbridge_ElementPerformActionInput(buffer_arg) {
  return service_pb.ElementPerformActionInput.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_macbridge_ElementPerformActionReply(arg) {
  if (!(arg instanceof service_pb.ElementPerformActionReply)) {
    throw new Error('Expected argument of type macbridge.ElementPerformActionReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_macbridge_ElementPerformActionReply(buffer_arg) {
  return service_pb.ElementPerformActionReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_macbridge_ElementPutAttrInput(arg) {
  if (!(arg instanceof service_pb.ElementPutAttrInput)) {
    throw new Error('Expected argument of type macbridge.ElementPutAttrInput');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_macbridge_ElementPutAttrInput(buffer_arg) {
  return service_pb.ElementPutAttrInput.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_macbridge_ElementPutAttrReply(arg) {
  if (!(arg instanceof service_pb.ElementPutAttrReply)) {
    throw new Error('Expected argument of type macbridge.ElementPutAttrReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_macbridge_ElementPutAttrReply(buffer_arg) {
  return service_pb.ElementPutAttrReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_macbridge_KeyboardSendkeysInput(arg) {
  if (!(arg instanceof service_pb.KeyboardSendkeysInput)) {
    throw new Error('Expected argument of type macbridge.KeyboardSendkeysInput');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_macbridge_KeyboardSendkeysInput(buffer_arg) {
  return service_pb.KeyboardSendkeysInput.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_macbridge_KeyboardSendkeysReply(arg) {
  if (!(arg instanceof service_pb.KeyboardSendkeysReply)) {
    throw new Error('Expected argument of type macbridge.KeyboardSendkeysReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_macbridge_KeyboardSendkeysReply(buffer_arg) {
  return service_pb.KeyboardSendkeysReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_macbridge_KeyboardSendtextInput(arg) {
  if (!(arg instanceof service_pb.KeyboardSendtextInput)) {
    throw new Error('Expected argument of type macbridge.KeyboardSendtextInput');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_macbridge_KeyboardSendtextInput(buffer_arg) {
  return service_pb.KeyboardSendtextInput.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_macbridge_KeyboardSendtextReply(arg) {
  if (!(arg instanceof service_pb.KeyboardSendtextReply)) {
    throw new Error('Expected argument of type macbridge.KeyboardSendtextReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_macbridge_KeyboardSendtextReply(buffer_arg) {
  return service_pb.KeyboardSendtextReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_macbridge_LauncherOpenAppInput(arg) {
  if (!(arg instanceof service_pb.LauncherOpenAppInput)) {
    throw new Error('Expected argument of type macbridge.LauncherOpenAppInput');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_macbridge_LauncherOpenAppInput(buffer_arg) {
  return service_pb.LauncherOpenAppInput.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_macbridge_LauncherOpenAppReply(arg) {
  if (!(arg instanceof service_pb.LauncherOpenAppReply)) {
    throw new Error('Expected argument of type macbridge.LauncherOpenAppReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_macbridge_LauncherOpenAppReply(buffer_arg) {
  return service_pb.LauncherOpenAppReply.deserializeBinary(new Uint8Array(buffer_arg));
}


var LauncherService = exports.LauncherService = {
  openApp: {
    path: '/macbridge.Launcher/openApp',
    requestStream: false,
    responseStream: false,
    requestType: service_pb.LauncherOpenAppInput,
    responseType: service_pb.LauncherOpenAppReply,
    requestSerialize: serialize_macbridge_LauncherOpenAppInput,
    requestDeserialize: deserialize_macbridge_LauncherOpenAppInput,
    responseSerialize: serialize_macbridge_LauncherOpenAppReply,
    responseDeserialize: deserialize_macbridge_LauncherOpenAppReply,
  },
};

exports.LauncherClient = grpc.makeGenericClientConstructor(LauncherService);
var ElementService = exports.ElementService = {
  find: {
    path: '/macbridge.Element/find',
    requestStream: false,
    responseStream: false,
    requestType: service_pb.ElementFindInput,
    responseType: service_pb.ElementFindReply,
    requestSerialize: serialize_macbridge_ElementFindInput,
    requestDeserialize: deserialize_macbridge_ElementFindInput,
    responseSerialize: serialize_macbridge_ElementFindReply,
    responseDeserialize: deserialize_macbridge_ElementFindReply,
  },
  listAttr: {
    path: '/macbridge.Element/listAttr',
    requestStream: false,
    responseStream: false,
    requestType: service_pb.ElementListAttrInput,
    responseType: service_pb.ElementListAttrReply,
    requestSerialize: serialize_macbridge_ElementListAttrInput,
    requestDeserialize: deserialize_macbridge_ElementListAttrInput,
    responseSerialize: serialize_macbridge_ElementListAttrReply,
    responseDeserialize: deserialize_macbridge_ElementListAttrReply,
  },
  listAction: {
    path: '/macbridge.Element/listAction',
    requestStream: false,
    responseStream: false,
    requestType: service_pb.ElementListActionInput,
    responseType: service_pb.ElementListActionReply,
    requestSerialize: serialize_macbridge_ElementListActionInput,
    requestDeserialize: deserialize_macbridge_ElementListActionInput,
    responseSerialize: serialize_macbridge_ElementListActionReply,
    responseDeserialize: deserialize_macbridge_ElementListActionReply,
  },
  getAttr: {
    path: '/macbridge.Element/getAttr',
    requestStream: false,
    responseStream: false,
    requestType: service_pb.ElementGetAttrInput,
    responseType: service_pb.ElementGetAttrReply,
    requestSerialize: serialize_macbridge_ElementGetAttrInput,
    requestDeserialize: deserialize_macbridge_ElementGetAttrInput,
    responseSerialize: serialize_macbridge_ElementGetAttrReply,
    responseDeserialize: deserialize_macbridge_ElementGetAttrReply,
  },
  putAttr: {
    path: '/macbridge.Element/putAttr',
    requestStream: false,
    responseStream: false,
    requestType: service_pb.ElementPutAttrInput,
    responseType: service_pb.ElementPutAttrReply,
    requestSerialize: serialize_macbridge_ElementPutAttrInput,
    requestDeserialize: deserialize_macbridge_ElementPutAttrInput,
    responseSerialize: serialize_macbridge_ElementPutAttrReply,
    responseDeserialize: deserialize_macbridge_ElementPutAttrReply,
  },
  performAction: {
    path: '/macbridge.Element/performAction',
    requestStream: false,
    responseStream: false,
    requestType: service_pb.ElementPerformActionInput,
    responseType: service_pb.ElementPerformActionReply,
    requestSerialize: serialize_macbridge_ElementPerformActionInput,
    requestDeserialize: deserialize_macbridge_ElementPerformActionInput,
    responseSerialize: serialize_macbridge_ElementPerformActionReply,
    responseDeserialize: deserialize_macbridge_ElementPerformActionReply,
  },
};

exports.ElementClient = grpc.makeGenericClientConstructor(ElementService);
var KeyboardService = exports.KeyboardService = {
  sendtext: {
    path: '/macbridge.Keyboard/sendtext',
    requestStream: false,
    responseStream: false,
    requestType: service_pb.KeyboardSendtextInput,
    responseType: service_pb.KeyboardSendtextReply,
    requestSerialize: serialize_macbridge_KeyboardSendtextInput,
    requestDeserialize: deserialize_macbridge_KeyboardSendtextInput,
    responseSerialize: serialize_macbridge_KeyboardSendtextReply,
    responseDeserialize: deserialize_macbridge_KeyboardSendtextReply,
  },
  sendkeys: {
    path: '/macbridge.Keyboard/sendkeys',
    requestStream: false,
    responseStream: false,
    requestType: service_pb.KeyboardSendkeysInput,
    responseType: service_pb.KeyboardSendkeysReply,
    requestSerialize: serialize_macbridge_KeyboardSendkeysInput,
    requestDeserialize: deserialize_macbridge_KeyboardSendkeysInput,
    responseSerialize: serialize_macbridge_KeyboardSendkeysReply,
    responseDeserialize: deserialize_macbridge_KeyboardSendkeysReply,
  },
};

exports.KeyboardClient = grpc.makeGenericClientConstructor(KeyboardService);
