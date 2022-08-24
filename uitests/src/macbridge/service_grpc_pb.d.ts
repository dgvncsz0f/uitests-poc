// package: macbridge
// file: service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as service_pb from "./service_pb";

interface ILauncherService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    openApp: ILauncherService_IopenApp;
}

interface ILauncherService_IopenApp extends grpc.MethodDefinition<service_pb.LauncherOpenAppInput, service_pb.LauncherOpenAppReply> {
    path: "/macbridge.Launcher/openApp";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<service_pb.LauncherOpenAppInput>;
    requestDeserialize: grpc.deserialize<service_pb.LauncherOpenAppInput>;
    responseSerialize: grpc.serialize<service_pb.LauncherOpenAppReply>;
    responseDeserialize: grpc.deserialize<service_pb.LauncherOpenAppReply>;
}

export const LauncherService: ILauncherService;

export interface ILauncherServer {
    openApp: grpc.handleUnaryCall<service_pb.LauncherOpenAppInput, service_pb.LauncherOpenAppReply>;
}

export interface ILauncherClient {
    openApp(request: service_pb.LauncherOpenAppInput, callback: (error: grpc.ServiceError | null, response: service_pb.LauncherOpenAppReply) => void): grpc.ClientUnaryCall;
    openApp(request: service_pb.LauncherOpenAppInput, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: service_pb.LauncherOpenAppReply) => void): grpc.ClientUnaryCall;
    openApp(request: service_pb.LauncherOpenAppInput, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: service_pb.LauncherOpenAppReply) => void): grpc.ClientUnaryCall;
}

export class LauncherClient extends grpc.Client implements ILauncherClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public openApp(request: service_pb.LauncherOpenAppInput, callback: (error: grpc.ServiceError | null, response: service_pb.LauncherOpenAppReply) => void): grpc.ClientUnaryCall;
    public openApp(request: service_pb.LauncherOpenAppInput, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: service_pb.LauncherOpenAppReply) => void): grpc.ClientUnaryCall;
    public openApp(request: service_pb.LauncherOpenAppInput, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: service_pb.LauncherOpenAppReply) => void): grpc.ClientUnaryCall;
}

interface IElementService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    find: IElementService_Ifind;
    listAttr: IElementService_IlistAttr;
    listAction: IElementService_IlistAction;
    getAttr: IElementService_IgetAttr;
    putAttr: IElementService_IputAttr;
    performAction: IElementService_IperformAction;
}

interface IElementService_Ifind extends grpc.MethodDefinition<service_pb.ElementFindInput, service_pb.ElementFindReply> {
    path: "/macbridge.Element/find";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<service_pb.ElementFindInput>;
    requestDeserialize: grpc.deserialize<service_pb.ElementFindInput>;
    responseSerialize: grpc.serialize<service_pb.ElementFindReply>;
    responseDeserialize: grpc.deserialize<service_pb.ElementFindReply>;
}
interface IElementService_IlistAttr extends grpc.MethodDefinition<service_pb.ElementListAttrInput, service_pb.ElementListAttrReply> {
    path: "/macbridge.Element/listAttr";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<service_pb.ElementListAttrInput>;
    requestDeserialize: grpc.deserialize<service_pb.ElementListAttrInput>;
    responseSerialize: grpc.serialize<service_pb.ElementListAttrReply>;
    responseDeserialize: grpc.deserialize<service_pb.ElementListAttrReply>;
}
interface IElementService_IlistAction extends grpc.MethodDefinition<service_pb.ElementListActionInput, service_pb.ElementListActionReply> {
    path: "/macbridge.Element/listAction";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<service_pb.ElementListActionInput>;
    requestDeserialize: grpc.deserialize<service_pb.ElementListActionInput>;
    responseSerialize: grpc.serialize<service_pb.ElementListActionReply>;
    responseDeserialize: grpc.deserialize<service_pb.ElementListActionReply>;
}
interface IElementService_IgetAttr extends grpc.MethodDefinition<service_pb.ElementGetAttrInput, service_pb.ElementGetAttrReply> {
    path: "/macbridge.Element/getAttr";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<service_pb.ElementGetAttrInput>;
    requestDeserialize: grpc.deserialize<service_pb.ElementGetAttrInput>;
    responseSerialize: grpc.serialize<service_pb.ElementGetAttrReply>;
    responseDeserialize: grpc.deserialize<service_pb.ElementGetAttrReply>;
}
interface IElementService_IputAttr extends grpc.MethodDefinition<service_pb.ElementPutAttrInput, service_pb.ElementPutAttrReply> {
    path: "/macbridge.Element/putAttr";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<service_pb.ElementPutAttrInput>;
    requestDeserialize: grpc.deserialize<service_pb.ElementPutAttrInput>;
    responseSerialize: grpc.serialize<service_pb.ElementPutAttrReply>;
    responseDeserialize: grpc.deserialize<service_pb.ElementPutAttrReply>;
}
interface IElementService_IperformAction extends grpc.MethodDefinition<service_pb.ElementPerformActionInput, service_pb.ElementPerformActionReply> {
    path: "/macbridge.Element/performAction";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<service_pb.ElementPerformActionInput>;
    requestDeserialize: grpc.deserialize<service_pb.ElementPerformActionInput>;
    responseSerialize: grpc.serialize<service_pb.ElementPerformActionReply>;
    responseDeserialize: grpc.deserialize<service_pb.ElementPerformActionReply>;
}

export const ElementService: IElementService;

export interface IElementServer {
    find: grpc.handleUnaryCall<service_pb.ElementFindInput, service_pb.ElementFindReply>;
    listAttr: grpc.handleUnaryCall<service_pb.ElementListAttrInput, service_pb.ElementListAttrReply>;
    listAction: grpc.handleUnaryCall<service_pb.ElementListActionInput, service_pb.ElementListActionReply>;
    getAttr: grpc.handleUnaryCall<service_pb.ElementGetAttrInput, service_pb.ElementGetAttrReply>;
    putAttr: grpc.handleUnaryCall<service_pb.ElementPutAttrInput, service_pb.ElementPutAttrReply>;
    performAction: grpc.handleUnaryCall<service_pb.ElementPerformActionInput, service_pb.ElementPerformActionReply>;
}

export interface IElementClient {
    find(request: service_pb.ElementFindInput, callback: (error: grpc.ServiceError | null, response: service_pb.ElementFindReply) => void): grpc.ClientUnaryCall;
    find(request: service_pb.ElementFindInput, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: service_pb.ElementFindReply) => void): grpc.ClientUnaryCall;
    find(request: service_pb.ElementFindInput, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: service_pb.ElementFindReply) => void): grpc.ClientUnaryCall;
    listAttr(request: service_pb.ElementListAttrInput, callback: (error: grpc.ServiceError | null, response: service_pb.ElementListAttrReply) => void): grpc.ClientUnaryCall;
    listAttr(request: service_pb.ElementListAttrInput, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: service_pb.ElementListAttrReply) => void): grpc.ClientUnaryCall;
    listAttr(request: service_pb.ElementListAttrInput, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: service_pb.ElementListAttrReply) => void): grpc.ClientUnaryCall;
    listAction(request: service_pb.ElementListActionInput, callback: (error: grpc.ServiceError | null, response: service_pb.ElementListActionReply) => void): grpc.ClientUnaryCall;
    listAction(request: service_pb.ElementListActionInput, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: service_pb.ElementListActionReply) => void): grpc.ClientUnaryCall;
    listAction(request: service_pb.ElementListActionInput, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: service_pb.ElementListActionReply) => void): grpc.ClientUnaryCall;
    getAttr(request: service_pb.ElementGetAttrInput, callback: (error: grpc.ServiceError | null, response: service_pb.ElementGetAttrReply) => void): grpc.ClientUnaryCall;
    getAttr(request: service_pb.ElementGetAttrInput, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: service_pb.ElementGetAttrReply) => void): grpc.ClientUnaryCall;
    getAttr(request: service_pb.ElementGetAttrInput, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: service_pb.ElementGetAttrReply) => void): grpc.ClientUnaryCall;
    putAttr(request: service_pb.ElementPutAttrInput, callback: (error: grpc.ServiceError | null, response: service_pb.ElementPutAttrReply) => void): grpc.ClientUnaryCall;
    putAttr(request: service_pb.ElementPutAttrInput, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: service_pb.ElementPutAttrReply) => void): grpc.ClientUnaryCall;
    putAttr(request: service_pb.ElementPutAttrInput, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: service_pb.ElementPutAttrReply) => void): grpc.ClientUnaryCall;
    performAction(request: service_pb.ElementPerformActionInput, callback: (error: grpc.ServiceError | null, response: service_pb.ElementPerformActionReply) => void): grpc.ClientUnaryCall;
    performAction(request: service_pb.ElementPerformActionInput, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: service_pb.ElementPerformActionReply) => void): grpc.ClientUnaryCall;
    performAction(request: service_pb.ElementPerformActionInput, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: service_pb.ElementPerformActionReply) => void): grpc.ClientUnaryCall;
}

export class ElementClient extends grpc.Client implements IElementClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public find(request: service_pb.ElementFindInput, callback: (error: grpc.ServiceError | null, response: service_pb.ElementFindReply) => void): grpc.ClientUnaryCall;
    public find(request: service_pb.ElementFindInput, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: service_pb.ElementFindReply) => void): grpc.ClientUnaryCall;
    public find(request: service_pb.ElementFindInput, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: service_pb.ElementFindReply) => void): grpc.ClientUnaryCall;
    public listAttr(request: service_pb.ElementListAttrInput, callback: (error: grpc.ServiceError | null, response: service_pb.ElementListAttrReply) => void): grpc.ClientUnaryCall;
    public listAttr(request: service_pb.ElementListAttrInput, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: service_pb.ElementListAttrReply) => void): grpc.ClientUnaryCall;
    public listAttr(request: service_pb.ElementListAttrInput, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: service_pb.ElementListAttrReply) => void): grpc.ClientUnaryCall;
    public listAction(request: service_pb.ElementListActionInput, callback: (error: grpc.ServiceError | null, response: service_pb.ElementListActionReply) => void): grpc.ClientUnaryCall;
    public listAction(request: service_pb.ElementListActionInput, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: service_pb.ElementListActionReply) => void): grpc.ClientUnaryCall;
    public listAction(request: service_pb.ElementListActionInput, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: service_pb.ElementListActionReply) => void): grpc.ClientUnaryCall;
    public getAttr(request: service_pb.ElementGetAttrInput, callback: (error: grpc.ServiceError | null, response: service_pb.ElementGetAttrReply) => void): grpc.ClientUnaryCall;
    public getAttr(request: service_pb.ElementGetAttrInput, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: service_pb.ElementGetAttrReply) => void): grpc.ClientUnaryCall;
    public getAttr(request: service_pb.ElementGetAttrInput, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: service_pb.ElementGetAttrReply) => void): grpc.ClientUnaryCall;
    public putAttr(request: service_pb.ElementPutAttrInput, callback: (error: grpc.ServiceError | null, response: service_pb.ElementPutAttrReply) => void): grpc.ClientUnaryCall;
    public putAttr(request: service_pb.ElementPutAttrInput, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: service_pb.ElementPutAttrReply) => void): grpc.ClientUnaryCall;
    public putAttr(request: service_pb.ElementPutAttrInput, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: service_pb.ElementPutAttrReply) => void): grpc.ClientUnaryCall;
    public performAction(request: service_pb.ElementPerformActionInput, callback: (error: grpc.ServiceError | null, response: service_pb.ElementPerformActionReply) => void): grpc.ClientUnaryCall;
    public performAction(request: service_pb.ElementPerformActionInput, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: service_pb.ElementPerformActionReply) => void): grpc.ClientUnaryCall;
    public performAction(request: service_pb.ElementPerformActionInput, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: service_pb.ElementPerformActionReply) => void): grpc.ClientUnaryCall;
}

interface IKeyboardService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    sendtext: IKeyboardService_Isendtext;
    sendkeys: IKeyboardService_Isendkeys;
}

interface IKeyboardService_Isendtext extends grpc.MethodDefinition<service_pb.KeyboardSendtextInput, service_pb.KeyboardSendtextReply> {
    path: "/macbridge.Keyboard/sendtext";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<service_pb.KeyboardSendtextInput>;
    requestDeserialize: grpc.deserialize<service_pb.KeyboardSendtextInput>;
    responseSerialize: grpc.serialize<service_pb.KeyboardSendtextReply>;
    responseDeserialize: grpc.deserialize<service_pb.KeyboardSendtextReply>;
}
interface IKeyboardService_Isendkeys extends grpc.MethodDefinition<service_pb.KeyboardSendkeysInput, service_pb.KeyboardSendkeysReply> {
    path: "/macbridge.Keyboard/sendkeys";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<service_pb.KeyboardSendkeysInput>;
    requestDeserialize: grpc.deserialize<service_pb.KeyboardSendkeysInput>;
    responseSerialize: grpc.serialize<service_pb.KeyboardSendkeysReply>;
    responseDeserialize: grpc.deserialize<service_pb.KeyboardSendkeysReply>;
}

export const KeyboardService: IKeyboardService;

export interface IKeyboardServer {
    sendtext: grpc.handleUnaryCall<service_pb.KeyboardSendtextInput, service_pb.KeyboardSendtextReply>;
    sendkeys: grpc.handleUnaryCall<service_pb.KeyboardSendkeysInput, service_pb.KeyboardSendkeysReply>;
}

export interface IKeyboardClient {
    sendtext(request: service_pb.KeyboardSendtextInput, callback: (error: grpc.ServiceError | null, response: service_pb.KeyboardSendtextReply) => void): grpc.ClientUnaryCall;
    sendtext(request: service_pb.KeyboardSendtextInput, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: service_pb.KeyboardSendtextReply) => void): grpc.ClientUnaryCall;
    sendtext(request: service_pb.KeyboardSendtextInput, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: service_pb.KeyboardSendtextReply) => void): grpc.ClientUnaryCall;
    sendkeys(request: service_pb.KeyboardSendkeysInput, callback: (error: grpc.ServiceError | null, response: service_pb.KeyboardSendkeysReply) => void): grpc.ClientUnaryCall;
    sendkeys(request: service_pb.KeyboardSendkeysInput, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: service_pb.KeyboardSendkeysReply) => void): grpc.ClientUnaryCall;
    sendkeys(request: service_pb.KeyboardSendkeysInput, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: service_pb.KeyboardSendkeysReply) => void): grpc.ClientUnaryCall;
}

export class KeyboardClient extends grpc.Client implements IKeyboardClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public sendtext(request: service_pb.KeyboardSendtextInput, callback: (error: grpc.ServiceError | null, response: service_pb.KeyboardSendtextReply) => void): grpc.ClientUnaryCall;
    public sendtext(request: service_pb.KeyboardSendtextInput, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: service_pb.KeyboardSendtextReply) => void): grpc.ClientUnaryCall;
    public sendtext(request: service_pb.KeyboardSendtextInput, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: service_pb.KeyboardSendtextReply) => void): grpc.ClientUnaryCall;
    public sendkeys(request: service_pb.KeyboardSendkeysInput, callback: (error: grpc.ServiceError | null, response: service_pb.KeyboardSendkeysReply) => void): grpc.ClientUnaryCall;
    public sendkeys(request: service_pb.KeyboardSendkeysInput, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: service_pb.KeyboardSendkeysReply) => void): grpc.ClientUnaryCall;
    public sendkeys(request: service_pb.KeyboardSendkeysInput, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: service_pb.KeyboardSendkeysReply) => void): grpc.ClientUnaryCall;
}
