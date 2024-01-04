import * as $protobuf from "protobufjs";
/** Namespace serverProto. */
export namespace serverProto {

    /** MSG enum. */
    enum MSG {
        LOGIN_INFO = 1,
        PLAYER_INFO = 2,
        INPUT_INFO = 3,
        HIT_INFO = 4
    }

    /** Properties of a headInfo. */
    interface IheadInfo {

        /** headInfo type */
        type?: (number|null);
    }

    /** Represents a headInfo. */
    class headInfo implements IheadInfo {

        /**
         * Constructs a new headInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: serverProto.IheadInfo);

        /** headInfo type. */
        public type: number;

        /**
         * Creates a new headInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns headInfo instance
         */
        public static create(properties?: serverProto.IheadInfo): serverProto.headInfo;

        /**
         * Encodes the specified headInfo message. Does not implicitly {@link serverProto.headInfo.verify|verify} messages.
         * @param message headInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: serverProto.IheadInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified headInfo message, length delimited. Does not implicitly {@link serverProto.headInfo.verify|verify} messages.
         * @param message headInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: serverProto.IheadInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a headInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns headInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): serverProto.headInfo;

        /**
         * Decodes a headInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns headInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): serverProto.headInfo;

        /**
         * Verifies a headInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a headInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns headInfo
         */
        public static fromObject(object: { [k: string]: any }): serverProto.headInfo;

        /**
         * Creates a plain object from a headInfo message. Also converts values to other types if specified.
         * @param message headInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: serverProto.headInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this headInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a loginInfo. */
    interface IloginInfo {

        /** loginInfo info */
        info?: (serverProto.IplayerInfo|null);

        /** loginInfo mapName */
        mapName?: (string|null);
    }

    /** Represents a loginInfo. */
    class loginInfo implements IloginInfo {

        /**
         * Constructs a new loginInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: serverProto.IloginInfo);

        /** loginInfo info. */
        public info?: (serverProto.IplayerInfo|null);

        /** loginInfo mapName. */
        public mapName: string;

        /**
         * Creates a new loginInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns loginInfo instance
         */
        public static create(properties?: serverProto.IloginInfo): serverProto.loginInfo;

        /**
         * Encodes the specified loginInfo message. Does not implicitly {@link serverProto.loginInfo.verify|verify} messages.
         * @param message loginInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: serverProto.IloginInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified loginInfo message, length delimited. Does not implicitly {@link serverProto.loginInfo.verify|verify} messages.
         * @param message loginInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: serverProto.IloginInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a loginInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns loginInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): serverProto.loginInfo;

        /**
         * Decodes a loginInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns loginInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): serverProto.loginInfo;

        /**
         * Verifies a loginInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a loginInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns loginInfo
         */
        public static fromObject(object: { [k: string]: any }): serverProto.loginInfo;

        /**
         * Creates a plain object from a loginInfo message. Also converts values to other types if specified.
         * @param message loginInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: serverProto.loginInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this loginInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a playerInfo. */
    interface IplayerInfo {

        /** playerInfo playerID */
        playerID?: (number|null);

        /** playerInfo heartCount */
        heartCount?: (number|null);

        /** playerInfo protectCount */
        protectCount?: (number|null);

        /** playerInfo bulletCount */
        bulletCount?: (number|null);

        /** playerInfo randNum */
        randNum?: (number|null);
    }

    /** Represents a playerInfo. */
    class playerInfo implements IplayerInfo {

        /**
         * Constructs a new playerInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: serverProto.IplayerInfo);

        /** playerInfo playerID. */
        public playerID: number;

        /** playerInfo heartCount. */
        public heartCount: number;

        /** playerInfo protectCount. */
        public protectCount: number;

        /** playerInfo bulletCount. */
        public bulletCount: number;

        /** playerInfo randNum. */
        public randNum: number;

        /**
         * Creates a new playerInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns playerInfo instance
         */
        public static create(properties?: serverProto.IplayerInfo): serverProto.playerInfo;

        /**
         * Encodes the specified playerInfo message. Does not implicitly {@link serverProto.playerInfo.verify|verify} messages.
         * @param message playerInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: serverProto.IplayerInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified playerInfo message, length delimited. Does not implicitly {@link serverProto.playerInfo.verify|verify} messages.
         * @param message playerInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: serverProto.IplayerInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a playerInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns playerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): serverProto.playerInfo;

        /**
         * Decodes a playerInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns playerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): serverProto.playerInfo;

        /**
         * Verifies a playerInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a playerInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns playerInfo
         */
        public static fromObject(object: { [k: string]: any }): serverProto.playerInfo;

        /**
         * Creates a plain object from a playerInfo message. Also converts values to other types if specified.
         * @param message playerInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: serverProto.playerInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this playerInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a playerArrayInfo. */
    interface IplayerArrayInfo {

        /** playerArrayInfo player */
        player?: (serverProto.IplayerInfo[]|null);
    }

    /** Represents a playerArrayInfo. */
    class playerArrayInfo implements IplayerArrayInfo {

        /**
         * Constructs a new playerArrayInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: serverProto.IplayerArrayInfo);

        /** playerArrayInfo player. */
        public player: serverProto.IplayerInfo[];

        /**
         * Creates a new playerArrayInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns playerArrayInfo instance
         */
        public static create(properties?: serverProto.IplayerArrayInfo): serverProto.playerArrayInfo;

        /**
         * Encodes the specified playerArrayInfo message. Does not implicitly {@link serverProto.playerArrayInfo.verify|verify} messages.
         * @param message playerArrayInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: serverProto.IplayerArrayInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified playerArrayInfo message, length delimited. Does not implicitly {@link serverProto.playerArrayInfo.verify|verify} messages.
         * @param message playerArrayInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: serverProto.IplayerArrayInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a playerArrayInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns playerArrayInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): serverProto.playerArrayInfo;

        /**
         * Decodes a playerArrayInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns playerArrayInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): serverProto.playerArrayInfo;

        /**
         * Verifies a playerArrayInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a playerArrayInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns playerArrayInfo
         */
        public static fromObject(object: { [k: string]: any }): serverProto.playerArrayInfo;

        /**
         * Creates a plain object from a playerArrayInfo message. Also converts values to other types if specified.
         * @param message playerArrayInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: serverProto.playerArrayInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this playerArrayInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an inputInfo. */
    interface IinputInfo {

        /** inputInfo key */
        key?: (number|null);

        /** inputInfo frameID */
        frameID?: (number|null);

        /** inputInfo playerID */
        playerID?: (number|null);
    }

    /** Represents an inputInfo. */
    class inputInfo implements IinputInfo {

        /**
         * Constructs a new inputInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: serverProto.IinputInfo);

        /** inputInfo key. */
        public key: number;

        /** inputInfo frameID. */
        public frameID: number;

        /** inputInfo playerID. */
        public playerID: number;

        /**
         * Creates a new inputInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns inputInfo instance
         */
        public static create(properties?: serverProto.IinputInfo): serverProto.inputInfo;

        /**
         * Encodes the specified inputInfo message. Does not implicitly {@link serverProto.inputInfo.verify|verify} messages.
         * @param message inputInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: serverProto.IinputInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified inputInfo message, length delimited. Does not implicitly {@link serverProto.inputInfo.verify|verify} messages.
         * @param message inputInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: serverProto.IinputInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an inputInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns inputInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): serverProto.inputInfo;

        /**
         * Decodes an inputInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns inputInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): serverProto.inputInfo;

        /**
         * Verifies an inputInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an inputInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns inputInfo
         */
        public static fromObject(object: { [k: string]: any }): serverProto.inputInfo;

        /**
         * Creates a plain object from an inputInfo message. Also converts values to other types if specified.
         * @param message inputInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: serverProto.inputInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this inputInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an inputArrayInfo. */
    interface IinputArrayInfo {

        /** inputArrayInfo input */
        input?: (serverProto.IinputInfo[]|null);
    }

    /** Represents an inputArrayInfo. */
    class inputArrayInfo implements IinputArrayInfo {

        /**
         * Constructs a new inputArrayInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: serverProto.IinputArrayInfo);

        /** inputArrayInfo input. */
        public input: serverProto.IinputInfo[];

        /**
         * Creates a new inputArrayInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns inputArrayInfo instance
         */
        public static create(properties?: serverProto.IinputArrayInfo): serverProto.inputArrayInfo;

        /**
         * Encodes the specified inputArrayInfo message. Does not implicitly {@link serverProto.inputArrayInfo.verify|verify} messages.
         * @param message inputArrayInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: serverProto.IinputArrayInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified inputArrayInfo message, length delimited. Does not implicitly {@link serverProto.inputArrayInfo.verify|verify} messages.
         * @param message inputArrayInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: serverProto.IinputArrayInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an inputArrayInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns inputArrayInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): serverProto.inputArrayInfo;

        /**
         * Decodes an inputArrayInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns inputArrayInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): serverProto.inputArrayInfo;

        /**
         * Verifies an inputArrayInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an inputArrayInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns inputArrayInfo
         */
        public static fromObject(object: { [k: string]: any }): serverProto.inputArrayInfo;

        /**
         * Creates a plain object from an inputArrayInfo message. Also converts values to other types if specified.
         * @param message inputArrayInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: serverProto.inputArrayInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this inputArrayInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a hitInfo. */
    interface IhitInfo {

        /** hitInfo playerID */
        playerID?: (number|null);

        /** hitInfo hitPlayerID */
        hitPlayerID?: (number|null);
    }

    /** Represents a hitInfo. */
    class hitInfo implements IhitInfo {

        /**
         * Constructs a new hitInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: serverProto.IhitInfo);

        /** hitInfo playerID. */
        public playerID: number;

        /** hitInfo hitPlayerID. */
        public hitPlayerID: number;

        /**
         * Creates a new hitInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns hitInfo instance
         */
        public static create(properties?: serverProto.IhitInfo): serverProto.hitInfo;

        /**
         * Encodes the specified hitInfo message. Does not implicitly {@link serverProto.hitInfo.verify|verify} messages.
         * @param message hitInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: serverProto.IhitInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified hitInfo message, length delimited. Does not implicitly {@link serverProto.hitInfo.verify|verify} messages.
         * @param message hitInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: serverProto.IhitInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a hitInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns hitInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): serverProto.hitInfo;

        /**
         * Decodes a hitInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns hitInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): serverProto.hitInfo;

        /**
         * Verifies a hitInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a hitInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns hitInfo
         */
        public static fromObject(object: { [k: string]: any }): serverProto.hitInfo;

        /**
         * Creates a plain object from a hitInfo message. Also converts values to other types if specified.
         * @param message hitInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: serverProto.hitInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this hitInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
