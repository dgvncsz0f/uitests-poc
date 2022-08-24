// package: macbridge
// file: service.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class LauncherOpenAppInput extends jspb.Message { 
    getPath(): string;
    setPath(value: string): LauncherOpenAppInput;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LauncherOpenAppInput.AsObject;
    static toObject(includeInstance: boolean, msg: LauncherOpenAppInput): LauncherOpenAppInput.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LauncherOpenAppInput, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LauncherOpenAppInput;
    static deserializeBinaryFromReader(message: LauncherOpenAppInput, reader: jspb.BinaryReader): LauncherOpenAppInput;
}

export namespace LauncherOpenAppInput {
    export type AsObject = {
        path: string,
    }
}

export class LauncherOpenAppReply extends jspb.Message { 
    getAppRef(): string;
    setAppRef(value: string): LauncherOpenAppReply;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LauncherOpenAppReply.AsObject;
    static toObject(includeInstance: boolean, msg: LauncherOpenAppReply): LauncherOpenAppReply.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LauncherOpenAppReply, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LauncherOpenAppReply;
    static deserializeBinaryFromReader(message: LauncherOpenAppReply, reader: jspb.BinaryReader): LauncherOpenAppReply;
}

export namespace LauncherOpenAppReply {
    export type AsObject = {
        appRef: string,
    }
}

export class ElementFindInput extends jspb.Message { 
    getAppRef(): string;
    setAppRef(value: string): ElementFindInput;
    getFilter(): string;
    setFilter(value: string): ElementFindInput;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ElementFindInput.AsObject;
    static toObject(includeInstance: boolean, msg: ElementFindInput): ElementFindInput.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ElementFindInput, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ElementFindInput;
    static deserializeBinaryFromReader(message: ElementFindInput, reader: jspb.BinaryReader): ElementFindInput;
}

export namespace ElementFindInput {
    export type AsObject = {
        appRef: string,
        filter: string,
    }
}

export class ElementFindReply extends jspb.Message { 
    getCount(): number;
    setCount(value: number): ElementFindReply;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ElementFindReply.AsObject;
    static toObject(includeInstance: boolean, msg: ElementFindReply): ElementFindReply.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ElementFindReply, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ElementFindReply;
    static deserializeBinaryFromReader(message: ElementFindReply, reader: jspb.BinaryReader): ElementFindReply;
}

export namespace ElementFindReply {
    export type AsObject = {
        count: number,
    }
}

export class ElementListAttrInput extends jspb.Message { 
    getAppRef(): string;
    setAppRef(value: string): ElementListAttrInput;
    getFilter(): string;
    setFilter(value: string): ElementListAttrInput;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ElementListAttrInput.AsObject;
    static toObject(includeInstance: boolean, msg: ElementListAttrInput): ElementListAttrInput.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ElementListAttrInput, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ElementListAttrInput;
    static deserializeBinaryFromReader(message: ElementListAttrInput, reader: jspb.BinaryReader): ElementListAttrInput;
}

export namespace ElementListAttrInput {
    export type AsObject = {
        appRef: string,
        filter: string,
    }
}

export class ElementListAttrReply extends jspb.Message { 
    clearAttrsList(): void;
    getAttrsList(): Array<string>;
    setAttrsList(value: Array<string>): ElementListAttrReply;
    addAttrs(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ElementListAttrReply.AsObject;
    static toObject(includeInstance: boolean, msg: ElementListAttrReply): ElementListAttrReply.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ElementListAttrReply, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ElementListAttrReply;
    static deserializeBinaryFromReader(message: ElementListAttrReply, reader: jspb.BinaryReader): ElementListAttrReply;
}

export namespace ElementListAttrReply {
    export type AsObject = {
        attrsList: Array<string>,
    }
}

export class ElementListActionInput extends jspb.Message { 
    getAppRef(): string;
    setAppRef(value: string): ElementListActionInput;
    getFilter(): string;
    setFilter(value: string): ElementListActionInput;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ElementListActionInput.AsObject;
    static toObject(includeInstance: boolean, msg: ElementListActionInput): ElementListActionInput.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ElementListActionInput, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ElementListActionInput;
    static deserializeBinaryFromReader(message: ElementListActionInput, reader: jspb.BinaryReader): ElementListActionInput;
}

export namespace ElementListActionInput {
    export type AsObject = {
        appRef: string,
        filter: string,
    }
}

export class ElementListActionReply extends jspb.Message { 
    clearActionsList(): void;
    getActionsList(): Array<string>;
    setActionsList(value: Array<string>): ElementListActionReply;
    addActions(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ElementListActionReply.AsObject;
    static toObject(includeInstance: boolean, msg: ElementListActionReply): ElementListActionReply.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ElementListActionReply, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ElementListActionReply;
    static deserializeBinaryFromReader(message: ElementListActionReply, reader: jspb.BinaryReader): ElementListActionReply;
}

export namespace ElementListActionReply {
    export type AsObject = {
        actionsList: Array<string>,
    }
}

export class ElementGetAttrInput extends jspb.Message { 
    getAppRef(): string;
    setAppRef(value: string): ElementGetAttrInput;
    getFilter(): string;
    setFilter(value: string): ElementGetAttrInput;
    getAttribute(): string;
    setAttribute(value: string): ElementGetAttrInput;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ElementGetAttrInput.AsObject;
    static toObject(includeInstance: boolean, msg: ElementGetAttrInput): ElementGetAttrInput.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ElementGetAttrInput, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ElementGetAttrInput;
    static deserializeBinaryFromReader(message: ElementGetAttrInput, reader: jspb.BinaryReader): ElementGetAttrInput;
}

export namespace ElementGetAttrInput {
    export type AsObject = {
        appRef: string,
        filter: string,
        attribute: string,
    }
}

export class ElementGetAttrReply extends jspb.Message { 

    hasValue(): boolean;
    clearValue(): void;
    getValue(): ElementValue | undefined;
    setValue(value?: ElementValue): ElementGetAttrReply;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ElementGetAttrReply.AsObject;
    static toObject(includeInstance: boolean, msg: ElementGetAttrReply): ElementGetAttrReply.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ElementGetAttrReply, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ElementGetAttrReply;
    static deserializeBinaryFromReader(message: ElementGetAttrReply, reader: jspb.BinaryReader): ElementGetAttrReply;
}

export namespace ElementGetAttrReply {
    export type AsObject = {
        value?: ElementValue.AsObject,
    }
}

export class ElementPutAttrInput extends jspb.Message { 
    getAppRef(): string;
    setAppRef(value: string): ElementPutAttrInput;
    getFilter(): string;
    setFilter(value: string): ElementPutAttrInput;
    getAttribute(): string;
    setAttribute(value: string): ElementPutAttrInput;

    hasValue(): boolean;
    clearValue(): void;
    getValue(): ElementValue | undefined;
    setValue(value?: ElementValue): ElementPutAttrInput;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ElementPutAttrInput.AsObject;
    static toObject(includeInstance: boolean, msg: ElementPutAttrInput): ElementPutAttrInput.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ElementPutAttrInput, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ElementPutAttrInput;
    static deserializeBinaryFromReader(message: ElementPutAttrInput, reader: jspb.BinaryReader): ElementPutAttrInput;
}

export namespace ElementPutAttrInput {
    export type AsObject = {
        appRef: string,
        filter: string,
        attribute: string,
        value?: ElementValue.AsObject,
    }
}

export class ElementPutAttrReply extends jspb.Message { 
    getSuccess(): boolean;
    setSuccess(value: boolean): ElementPutAttrReply;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ElementPutAttrReply.AsObject;
    static toObject(includeInstance: boolean, msg: ElementPutAttrReply): ElementPutAttrReply.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ElementPutAttrReply, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ElementPutAttrReply;
    static deserializeBinaryFromReader(message: ElementPutAttrReply, reader: jspb.BinaryReader): ElementPutAttrReply;
}

export namespace ElementPutAttrReply {
    export type AsObject = {
        success: boolean,
    }
}

export class ElementPerformActionInput extends jspb.Message { 
    getAppRef(): string;
    setAppRef(value: string): ElementPerformActionInput;
    getFilter(): string;
    setFilter(value: string): ElementPerformActionInput;
    getAction(): string;
    setAction(value: string): ElementPerformActionInput;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ElementPerformActionInput.AsObject;
    static toObject(includeInstance: boolean, msg: ElementPerformActionInput): ElementPerformActionInput.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ElementPerformActionInput, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ElementPerformActionInput;
    static deserializeBinaryFromReader(message: ElementPerformActionInput, reader: jspb.BinaryReader): ElementPerformActionInput;
}

export namespace ElementPerformActionInput {
    export type AsObject = {
        appRef: string,
        filter: string,
        action: string,
    }
}

export class ElementPerformActionReply extends jspb.Message { 
    getSuccess(): boolean;
    setSuccess(value: boolean): ElementPerformActionReply;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ElementPerformActionReply.AsObject;
    static toObject(includeInstance: boolean, msg: ElementPerformActionReply): ElementPerformActionReply.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ElementPerformActionReply, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ElementPerformActionReply;
    static deserializeBinaryFromReader(message: ElementPerformActionReply, reader: jspb.BinaryReader): ElementPerformActionReply;
}

export namespace ElementPerformActionReply {
    export type AsObject = {
        success: boolean,
    }
}

export class ElementValue extends jspb.Message { 

    hasStrValue(): boolean;
    clearStrValue(): void;
    getStrValue(): string;
    setStrValue(value: string): ElementValue;

    hasBoolValue(): boolean;
    clearBoolValue(): void;
    getBoolValue(): boolean;
    setBoolValue(value: boolean): ElementValue;

    hasIntValue(): boolean;
    clearIntValue(): void;
    getIntValue(): number;
    setIntValue(value: number): ElementValue;

    hasFloatValue(): boolean;
    clearFloatValue(): void;
    getFloatValue(): number;
    setFloatValue(value: number): ElementValue;

    getValueCase(): ElementValue.ValueCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ElementValue.AsObject;
    static toObject(includeInstance: boolean, msg: ElementValue): ElementValue.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ElementValue, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ElementValue;
    static deserializeBinaryFromReader(message: ElementValue, reader: jspb.BinaryReader): ElementValue;
}

export namespace ElementValue {
    export type AsObject = {
        strValue: string,
        boolValue: boolean,
        intValue: number,
        floatValue: number,
    }

    export enum ValueCase {
        VALUE_NOT_SET = 0,
        STR_VALUE = 2,
        BOOL_VALUE = 3,
        INT_VALUE = 4,
        FLOAT_VALUE = 5,
    }

}

export class KeyboardSendtextInput extends jspb.Message { 
    getText(): string;
    setText(value: string): KeyboardSendtextInput;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): KeyboardSendtextInput.AsObject;
    static toObject(includeInstance: boolean, msg: KeyboardSendtextInput): KeyboardSendtextInput.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: KeyboardSendtextInput, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): KeyboardSendtextInput;
    static deserializeBinaryFromReader(message: KeyboardSendtextInput, reader: jspb.BinaryReader): KeyboardSendtextInput;
}

export namespace KeyboardSendtextInput {
    export type AsObject = {
        text: string,
    }
}

export class KeyboardSendtextReply extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): KeyboardSendtextReply.AsObject;
    static toObject(includeInstance: boolean, msg: KeyboardSendtextReply): KeyboardSendtextReply.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: KeyboardSendtextReply, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): KeyboardSendtextReply;
    static deserializeBinaryFromReader(message: KeyboardSendtextReply, reader: jspb.BinaryReader): KeyboardSendtextReply;
}

export namespace KeyboardSendtextReply {
    export type AsObject = {
    }
}

export class KeyboardSendkeysInput extends jspb.Message { 
    clearKeysList(): void;
    getKeysList(): Array<Key>;
    setKeysList(value: Array<Key>): KeyboardSendkeysInput;
    addKeys(value?: Key, index?: number): Key;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): KeyboardSendkeysInput.AsObject;
    static toObject(includeInstance: boolean, msg: KeyboardSendkeysInput): KeyboardSendkeysInput.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: KeyboardSendkeysInput, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): KeyboardSendkeysInput;
    static deserializeBinaryFromReader(message: KeyboardSendkeysInput, reader: jspb.BinaryReader): KeyboardSendkeysInput;
}

export namespace KeyboardSendkeysInput {
    export type AsObject = {
        keysList: Array<Key.AsObject>,
    }
}

export class KeyboardSendkeysReply extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): KeyboardSendkeysReply.AsObject;
    static toObject(includeInstance: boolean, msg: KeyboardSendkeysReply): KeyboardSendkeysReply.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: KeyboardSendkeysReply, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): KeyboardSendkeysReply;
    static deserializeBinaryFromReader(message: KeyboardSendkeysReply, reader: jspb.BinaryReader): KeyboardSendkeysReply;
}

export namespace KeyboardSendkeysReply {
    export type AsObject = {
    }
}

export class Key extends jspb.Message { 
    getKey(): string;
    setKey(value: string): Key;
    clearModifiersList(): void;
    getModifiersList(): Array<Modifier>;
    setModifiersList(value: Array<Modifier>): Key;
    addModifiers(value: Modifier, index?: number): Modifier;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Key.AsObject;
    static toObject(includeInstance: boolean, msg: Key): Key.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Key, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Key;
    static deserializeBinaryFromReader(message: Key, reader: jspb.BinaryReader): Key;
}

export namespace Key {
    export type AsObject = {
        key: string,
        modifiersList: Array<Modifier>,
    }
}

export enum Modifier {
    SHIFT = 0,
}
