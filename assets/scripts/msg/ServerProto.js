/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.serverProto = (function() {

    /**
     * Namespace serverProto.
     * @exports serverProto
     * @namespace
     */
    var serverProto = {};

    /**
     * MSG enum.
     * @name serverProto.MSG
     * @enum {number}
     * @property {number} LOGIN_INFO=1 LOGIN_INFO value
     * @property {number} PLAYER_INFO=2 PLAYER_INFO value
     * @property {number} INPUT_INFO=3 INPUT_INFO value
     * @property {number} HIT_INFO=4 HIT_INFO value
     */
    serverProto.MSG = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[1] = "LOGIN_INFO"] = 1;
        values[valuesById[2] = "PLAYER_INFO"] = 2;
        values[valuesById[3] = "INPUT_INFO"] = 3;
        values[valuesById[4] = "HIT_INFO"] = 4;
        return values;
    })();

    serverProto.headInfo = (function() {

        /**
         * Properties of a headInfo.
         * @memberof serverProto
         * @interface IheadInfo
         * @property {number|null} [type] headInfo type
         */

        /**
         * Constructs a new headInfo.
         * @memberof serverProto
         * @classdesc Represents a headInfo.
         * @implements IheadInfo
         * @constructor
         * @param {serverProto.IheadInfo=} [properties] Properties to set
         */
        function headInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * headInfo type.
         * @member {number} type
         * @memberof serverProto.headInfo
         * @instance
         */
        headInfo.prototype.type = 0;

        /**
         * Creates a new headInfo instance using the specified properties.
         * @function create
         * @memberof serverProto.headInfo
         * @static
         * @param {serverProto.IheadInfo=} [properties] Properties to set
         * @returns {serverProto.headInfo} headInfo instance
         */
        headInfo.create = function create(properties) {
            return new headInfo(properties);
        };

        /**
         * Encodes the specified headInfo message. Does not implicitly {@link serverProto.headInfo.verify|verify} messages.
         * @function encode
         * @memberof serverProto.headInfo
         * @static
         * @param {serverProto.IheadInfo} message headInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        headInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.type);
            return writer;
        };

        /**
         * Encodes the specified headInfo message, length delimited. Does not implicitly {@link serverProto.headInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof serverProto.headInfo
         * @static
         * @param {serverProto.IheadInfo} message headInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        headInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a headInfo message from the specified reader or buffer.
         * @function decode
         * @memberof serverProto.headInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {serverProto.headInfo} headInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        headInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.serverProto.headInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.type = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a headInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof serverProto.headInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {serverProto.headInfo} headInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        headInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a headInfo message.
         * @function verify
         * @memberof serverProto.headInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        headInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.type != null && message.hasOwnProperty("type"))
                if (!$util.isInteger(message.type))
                    return "type: integer expected";
            return null;
        };

        /**
         * Creates a headInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof serverProto.headInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {serverProto.headInfo} headInfo
         */
        headInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.serverProto.headInfo)
                return object;
            var message = new $root.serverProto.headInfo();
            if (object.type != null)
                message.type = object.type >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a headInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof serverProto.headInfo
         * @static
         * @param {serverProto.headInfo} message headInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        headInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.type = 0;
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
            return object;
        };

        /**
         * Converts this headInfo to JSON.
         * @function toJSON
         * @memberof serverProto.headInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        headInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return headInfo;
    })();

    serverProto.loginInfo = (function() {

        /**
         * Properties of a loginInfo.
         * @memberof serverProto
         * @interface IloginInfo
         * @property {serverProto.IplayerInfo|null} [info] loginInfo info
         * @property {string|null} [mapName] loginInfo mapName
         */

        /**
         * Constructs a new loginInfo.
         * @memberof serverProto
         * @classdesc Represents a loginInfo.
         * @implements IloginInfo
         * @constructor
         * @param {serverProto.IloginInfo=} [properties] Properties to set
         */
        function loginInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * loginInfo info.
         * @member {serverProto.IplayerInfo|null|undefined} info
         * @memberof serverProto.loginInfo
         * @instance
         */
        loginInfo.prototype.info = null;

        /**
         * loginInfo mapName.
         * @member {string} mapName
         * @memberof serverProto.loginInfo
         * @instance
         */
        loginInfo.prototype.mapName = "";

        /**
         * Creates a new loginInfo instance using the specified properties.
         * @function create
         * @memberof serverProto.loginInfo
         * @static
         * @param {serverProto.IloginInfo=} [properties] Properties to set
         * @returns {serverProto.loginInfo} loginInfo instance
         */
        loginInfo.create = function create(properties) {
            return new loginInfo(properties);
        };

        /**
         * Encodes the specified loginInfo message. Does not implicitly {@link serverProto.loginInfo.verify|verify} messages.
         * @function encode
         * @memberof serverProto.loginInfo
         * @static
         * @param {serverProto.IloginInfo} message loginInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        loginInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.info != null && Object.hasOwnProperty.call(message, "info"))
                $root.serverProto.playerInfo.encode(message.info, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.mapName != null && Object.hasOwnProperty.call(message, "mapName"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.mapName);
            return writer;
        };

        /**
         * Encodes the specified loginInfo message, length delimited. Does not implicitly {@link serverProto.loginInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof serverProto.loginInfo
         * @static
         * @param {serverProto.IloginInfo} message loginInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        loginInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a loginInfo message from the specified reader or buffer.
         * @function decode
         * @memberof serverProto.loginInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {serverProto.loginInfo} loginInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        loginInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.serverProto.loginInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.info = $root.serverProto.playerInfo.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.mapName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a loginInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof serverProto.loginInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {serverProto.loginInfo} loginInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        loginInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a loginInfo message.
         * @function verify
         * @memberof serverProto.loginInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        loginInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.info != null && message.hasOwnProperty("info")) {
                var error = $root.serverProto.playerInfo.verify(message.info);
                if (error)
                    return "info." + error;
            }
            if (message.mapName != null && message.hasOwnProperty("mapName"))
                if (!$util.isString(message.mapName))
                    return "mapName: string expected";
            return null;
        };

        /**
         * Creates a loginInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof serverProto.loginInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {serverProto.loginInfo} loginInfo
         */
        loginInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.serverProto.loginInfo)
                return object;
            var message = new $root.serverProto.loginInfo();
            if (object.info != null) {
                if (typeof object.info !== "object")
                    throw TypeError(".serverProto.loginInfo.info: object expected");
                message.info = $root.serverProto.playerInfo.fromObject(object.info);
            }
            if (object.mapName != null)
                message.mapName = String(object.mapName);
            return message;
        };

        /**
         * Creates a plain object from a loginInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof serverProto.loginInfo
         * @static
         * @param {serverProto.loginInfo} message loginInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        loginInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.info = null;
                object.mapName = "";
            }
            if (message.info != null && message.hasOwnProperty("info"))
                object.info = $root.serverProto.playerInfo.toObject(message.info, options);
            if (message.mapName != null && message.hasOwnProperty("mapName"))
                object.mapName = message.mapName;
            return object;
        };

        /**
         * Converts this loginInfo to JSON.
         * @function toJSON
         * @memberof serverProto.loginInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        loginInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return loginInfo;
    })();

    serverProto.playerInfo = (function() {

        /**
         * Properties of a playerInfo.
         * @memberof serverProto
         * @interface IplayerInfo
         * @property {number|null} [playerID] playerInfo playerID
         * @property {number|null} [heartCount] playerInfo heartCount
         * @property {number|null} [protectCount] playerInfo protectCount
         * @property {number|null} [bulletCount] playerInfo bulletCount
         * @property {number|null} [randNum] playerInfo randNum
         */

        /**
         * Constructs a new playerInfo.
         * @memberof serverProto
         * @classdesc Represents a playerInfo.
         * @implements IplayerInfo
         * @constructor
         * @param {serverProto.IplayerInfo=} [properties] Properties to set
         */
        function playerInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * playerInfo playerID.
         * @member {number} playerID
         * @memberof serverProto.playerInfo
         * @instance
         */
        playerInfo.prototype.playerID = 0;

        /**
         * playerInfo heartCount.
         * @member {number} heartCount
         * @memberof serverProto.playerInfo
         * @instance
         */
        playerInfo.prototype.heartCount = 0;

        /**
         * playerInfo protectCount.
         * @member {number} protectCount
         * @memberof serverProto.playerInfo
         * @instance
         */
        playerInfo.prototype.protectCount = 0;

        /**
         * playerInfo bulletCount.
         * @member {number} bulletCount
         * @memberof serverProto.playerInfo
         * @instance
         */
        playerInfo.prototype.bulletCount = 0;

        /**
         * playerInfo randNum.
         * @member {number} randNum
         * @memberof serverProto.playerInfo
         * @instance
         */
        playerInfo.prototype.randNum = 0;

        /**
         * Creates a new playerInfo instance using the specified properties.
         * @function create
         * @memberof serverProto.playerInfo
         * @static
         * @param {serverProto.IplayerInfo=} [properties] Properties to set
         * @returns {serverProto.playerInfo} playerInfo instance
         */
        playerInfo.create = function create(properties) {
            return new playerInfo(properties);
        };

        /**
         * Encodes the specified playerInfo message. Does not implicitly {@link serverProto.playerInfo.verify|verify} messages.
         * @function encode
         * @memberof serverProto.playerInfo
         * @static
         * @param {serverProto.IplayerInfo} message playerInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        playerInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.playerID != null && Object.hasOwnProperty.call(message, "playerID"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.playerID);
            if (message.heartCount != null && Object.hasOwnProperty.call(message, "heartCount"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.heartCount);
            if (message.protectCount != null && Object.hasOwnProperty.call(message, "protectCount"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.protectCount);
            if (message.bulletCount != null && Object.hasOwnProperty.call(message, "bulletCount"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.bulletCount);
            if (message.randNum != null && Object.hasOwnProperty.call(message, "randNum"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.randNum);
            return writer;
        };

        /**
         * Encodes the specified playerInfo message, length delimited. Does not implicitly {@link serverProto.playerInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof serverProto.playerInfo
         * @static
         * @param {serverProto.IplayerInfo} message playerInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        playerInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a playerInfo message from the specified reader or buffer.
         * @function decode
         * @memberof serverProto.playerInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {serverProto.playerInfo} playerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        playerInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.serverProto.playerInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.playerID = reader.uint32();
                    break;
                case 2:
                    message.heartCount = reader.uint32();
                    break;
                case 3:
                    message.protectCount = reader.uint32();
                    break;
                case 4:
                    message.bulletCount = reader.uint32();
                    break;
                case 5:
                    message.randNum = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a playerInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof serverProto.playerInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {serverProto.playerInfo} playerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        playerInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a playerInfo message.
         * @function verify
         * @memberof serverProto.playerInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        playerInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.playerID != null && message.hasOwnProperty("playerID"))
                if (!$util.isInteger(message.playerID))
                    return "playerID: integer expected";
            if (message.heartCount != null && message.hasOwnProperty("heartCount"))
                if (!$util.isInteger(message.heartCount))
                    return "heartCount: integer expected";
            if (message.protectCount != null && message.hasOwnProperty("protectCount"))
                if (!$util.isInteger(message.protectCount))
                    return "protectCount: integer expected";
            if (message.bulletCount != null && message.hasOwnProperty("bulletCount"))
                if (!$util.isInteger(message.bulletCount))
                    return "bulletCount: integer expected";
            if (message.randNum != null && message.hasOwnProperty("randNum"))
                if (!$util.isInteger(message.randNum))
                    return "randNum: integer expected";
            return null;
        };

        /**
         * Creates a playerInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof serverProto.playerInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {serverProto.playerInfo} playerInfo
         */
        playerInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.serverProto.playerInfo)
                return object;
            var message = new $root.serverProto.playerInfo();
            if (object.playerID != null)
                message.playerID = object.playerID >>> 0;
            if (object.heartCount != null)
                message.heartCount = object.heartCount >>> 0;
            if (object.protectCount != null)
                message.protectCount = object.protectCount >>> 0;
            if (object.bulletCount != null)
                message.bulletCount = object.bulletCount >>> 0;
            if (object.randNum != null)
                message.randNum = object.randNum >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a playerInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof serverProto.playerInfo
         * @static
         * @param {serverProto.playerInfo} message playerInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        playerInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.playerID = 0;
                object.heartCount = 0;
                object.protectCount = 0;
                object.bulletCount = 0;
                object.randNum = 0;
            }
            if (message.playerID != null && message.hasOwnProperty("playerID"))
                object.playerID = message.playerID;
            if (message.heartCount != null && message.hasOwnProperty("heartCount"))
                object.heartCount = message.heartCount;
            if (message.protectCount != null && message.hasOwnProperty("protectCount"))
                object.protectCount = message.protectCount;
            if (message.bulletCount != null && message.hasOwnProperty("bulletCount"))
                object.bulletCount = message.bulletCount;
            if (message.randNum != null && message.hasOwnProperty("randNum"))
                object.randNum = message.randNum;
            return object;
        };

        /**
         * Converts this playerInfo to JSON.
         * @function toJSON
         * @memberof serverProto.playerInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        playerInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return playerInfo;
    })();

    serverProto.playerArrayInfo = (function() {

        /**
         * Properties of a playerArrayInfo.
         * @memberof serverProto
         * @interface IplayerArrayInfo
         * @property {Array.<serverProto.IplayerInfo>|null} [player] playerArrayInfo player
         */

        /**
         * Constructs a new playerArrayInfo.
         * @memberof serverProto
         * @classdesc Represents a playerArrayInfo.
         * @implements IplayerArrayInfo
         * @constructor
         * @param {serverProto.IplayerArrayInfo=} [properties] Properties to set
         */
        function playerArrayInfo(properties) {
            this.player = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * playerArrayInfo player.
         * @member {Array.<serverProto.IplayerInfo>} player
         * @memberof serverProto.playerArrayInfo
         * @instance
         */
        playerArrayInfo.prototype.player = $util.emptyArray;

        /**
         * Creates a new playerArrayInfo instance using the specified properties.
         * @function create
         * @memberof serverProto.playerArrayInfo
         * @static
         * @param {serverProto.IplayerArrayInfo=} [properties] Properties to set
         * @returns {serverProto.playerArrayInfo} playerArrayInfo instance
         */
        playerArrayInfo.create = function create(properties) {
            return new playerArrayInfo(properties);
        };

        /**
         * Encodes the specified playerArrayInfo message. Does not implicitly {@link serverProto.playerArrayInfo.verify|verify} messages.
         * @function encode
         * @memberof serverProto.playerArrayInfo
         * @static
         * @param {serverProto.IplayerArrayInfo} message playerArrayInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        playerArrayInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.player != null && message.player.length)
                for (var i = 0; i < message.player.length; ++i)
                    $root.serverProto.playerInfo.encode(message.player[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified playerArrayInfo message, length delimited. Does not implicitly {@link serverProto.playerArrayInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof serverProto.playerArrayInfo
         * @static
         * @param {serverProto.IplayerArrayInfo} message playerArrayInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        playerArrayInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a playerArrayInfo message from the specified reader or buffer.
         * @function decode
         * @memberof serverProto.playerArrayInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {serverProto.playerArrayInfo} playerArrayInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        playerArrayInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.serverProto.playerArrayInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.player && message.player.length))
                        message.player = [];
                    message.player.push($root.serverProto.playerInfo.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a playerArrayInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof serverProto.playerArrayInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {serverProto.playerArrayInfo} playerArrayInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        playerArrayInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a playerArrayInfo message.
         * @function verify
         * @memberof serverProto.playerArrayInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        playerArrayInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.player != null && message.hasOwnProperty("player")) {
                if (!Array.isArray(message.player))
                    return "player: array expected";
                for (var i = 0; i < message.player.length; ++i) {
                    var error = $root.serverProto.playerInfo.verify(message.player[i]);
                    if (error)
                        return "player." + error;
                }
            }
            return null;
        };

        /**
         * Creates a playerArrayInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof serverProto.playerArrayInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {serverProto.playerArrayInfo} playerArrayInfo
         */
        playerArrayInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.serverProto.playerArrayInfo)
                return object;
            var message = new $root.serverProto.playerArrayInfo();
            if (object.player) {
                if (!Array.isArray(object.player))
                    throw TypeError(".serverProto.playerArrayInfo.player: array expected");
                message.player = [];
                for (var i = 0; i < object.player.length; ++i) {
                    if (typeof object.player[i] !== "object")
                        throw TypeError(".serverProto.playerArrayInfo.player: object expected");
                    message.player[i] = $root.serverProto.playerInfo.fromObject(object.player[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a playerArrayInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof serverProto.playerArrayInfo
         * @static
         * @param {serverProto.playerArrayInfo} message playerArrayInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        playerArrayInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.player = [];
            if (message.player && message.player.length) {
                object.player = [];
                for (var j = 0; j < message.player.length; ++j)
                    object.player[j] = $root.serverProto.playerInfo.toObject(message.player[j], options);
            }
            return object;
        };

        /**
         * Converts this playerArrayInfo to JSON.
         * @function toJSON
         * @memberof serverProto.playerArrayInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        playerArrayInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return playerArrayInfo;
    })();

    serverProto.inputInfo = (function() {

        /**
         * Properties of an inputInfo.
         * @memberof serverProto
         * @interface IinputInfo
         * @property {number|null} [key] inputInfo key
         * @property {number|null} [frameID] inputInfo frameID
         * @property {number|null} [playerID] inputInfo playerID
         */

        /**
         * Constructs a new inputInfo.
         * @memberof serverProto
         * @classdesc Represents an inputInfo.
         * @implements IinputInfo
         * @constructor
         * @param {serverProto.IinputInfo=} [properties] Properties to set
         */
        function inputInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * inputInfo key.
         * @member {number} key
         * @memberof serverProto.inputInfo
         * @instance
         */
        inputInfo.prototype.key = 0;

        /**
         * inputInfo frameID.
         * @member {number} frameID
         * @memberof serverProto.inputInfo
         * @instance
         */
        inputInfo.prototype.frameID = 0;

        /**
         * inputInfo playerID.
         * @member {number} playerID
         * @memberof serverProto.inputInfo
         * @instance
         */
        inputInfo.prototype.playerID = 0;

        /**
         * Creates a new inputInfo instance using the specified properties.
         * @function create
         * @memberof serverProto.inputInfo
         * @static
         * @param {serverProto.IinputInfo=} [properties] Properties to set
         * @returns {serverProto.inputInfo} inputInfo instance
         */
        inputInfo.create = function create(properties) {
            return new inputInfo(properties);
        };

        /**
         * Encodes the specified inputInfo message. Does not implicitly {@link serverProto.inputInfo.verify|verify} messages.
         * @function encode
         * @memberof serverProto.inputInfo
         * @static
         * @param {serverProto.IinputInfo} message inputInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        inputInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.key != null && Object.hasOwnProperty.call(message, "key"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.key);
            if (message.frameID != null && Object.hasOwnProperty.call(message, "frameID"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.frameID);
            if (message.playerID != null && Object.hasOwnProperty.call(message, "playerID"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.playerID);
            return writer;
        };

        /**
         * Encodes the specified inputInfo message, length delimited. Does not implicitly {@link serverProto.inputInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof serverProto.inputInfo
         * @static
         * @param {serverProto.IinputInfo} message inputInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        inputInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an inputInfo message from the specified reader or buffer.
         * @function decode
         * @memberof serverProto.inputInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {serverProto.inputInfo} inputInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        inputInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.serverProto.inputInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.key = reader.uint32();
                    break;
                case 2:
                    message.frameID = reader.uint32();
                    break;
                case 3:
                    message.playerID = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an inputInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof serverProto.inputInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {serverProto.inputInfo} inputInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        inputInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an inputInfo message.
         * @function verify
         * @memberof serverProto.inputInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        inputInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.key != null && message.hasOwnProperty("key"))
                if (!$util.isInteger(message.key))
                    return "key: integer expected";
            if (message.frameID != null && message.hasOwnProperty("frameID"))
                if (!$util.isInteger(message.frameID))
                    return "frameID: integer expected";
            if (message.playerID != null && message.hasOwnProperty("playerID"))
                if (!$util.isInteger(message.playerID))
                    return "playerID: integer expected";
            return null;
        };

        /**
         * Creates an inputInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof serverProto.inputInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {serverProto.inputInfo} inputInfo
         */
        inputInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.serverProto.inputInfo)
                return object;
            var message = new $root.serverProto.inputInfo();
            if (object.key != null)
                message.key = object.key >>> 0;
            if (object.frameID != null)
                message.frameID = object.frameID >>> 0;
            if (object.playerID != null)
                message.playerID = object.playerID >>> 0;
            return message;
        };

        /**
         * Creates a plain object from an inputInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof serverProto.inputInfo
         * @static
         * @param {serverProto.inputInfo} message inputInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        inputInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.key = 0;
                object.frameID = 0;
                object.playerID = 0;
            }
            if (message.key != null && message.hasOwnProperty("key"))
                object.key = message.key;
            if (message.frameID != null && message.hasOwnProperty("frameID"))
                object.frameID = message.frameID;
            if (message.playerID != null && message.hasOwnProperty("playerID"))
                object.playerID = message.playerID;
            return object;
        };

        /**
         * Converts this inputInfo to JSON.
         * @function toJSON
         * @memberof serverProto.inputInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        inputInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return inputInfo;
    })();

    serverProto.inputArrayInfo = (function() {

        /**
         * Properties of an inputArrayInfo.
         * @memberof serverProto
         * @interface IinputArrayInfo
         * @property {Array.<serverProto.IinputInfo>|null} [input] inputArrayInfo input
         */

        /**
         * Constructs a new inputArrayInfo.
         * @memberof serverProto
         * @classdesc Represents an inputArrayInfo.
         * @implements IinputArrayInfo
         * @constructor
         * @param {serverProto.IinputArrayInfo=} [properties] Properties to set
         */
        function inputArrayInfo(properties) {
            this.input = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * inputArrayInfo input.
         * @member {Array.<serverProto.IinputInfo>} input
         * @memberof serverProto.inputArrayInfo
         * @instance
         */
        inputArrayInfo.prototype.input = $util.emptyArray;

        /**
         * Creates a new inputArrayInfo instance using the specified properties.
         * @function create
         * @memberof serverProto.inputArrayInfo
         * @static
         * @param {serverProto.IinputArrayInfo=} [properties] Properties to set
         * @returns {serverProto.inputArrayInfo} inputArrayInfo instance
         */
        inputArrayInfo.create = function create(properties) {
            return new inputArrayInfo(properties);
        };

        /**
         * Encodes the specified inputArrayInfo message. Does not implicitly {@link serverProto.inputArrayInfo.verify|verify} messages.
         * @function encode
         * @memberof serverProto.inputArrayInfo
         * @static
         * @param {serverProto.IinputArrayInfo} message inputArrayInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        inputArrayInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.input != null && message.input.length)
                for (var i = 0; i < message.input.length; ++i)
                    $root.serverProto.inputInfo.encode(message.input[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified inputArrayInfo message, length delimited. Does not implicitly {@link serverProto.inputArrayInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof serverProto.inputArrayInfo
         * @static
         * @param {serverProto.IinputArrayInfo} message inputArrayInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        inputArrayInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an inputArrayInfo message from the specified reader or buffer.
         * @function decode
         * @memberof serverProto.inputArrayInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {serverProto.inputArrayInfo} inputArrayInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        inputArrayInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.serverProto.inputArrayInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.input && message.input.length))
                        message.input = [];
                    message.input.push($root.serverProto.inputInfo.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an inputArrayInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof serverProto.inputArrayInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {serverProto.inputArrayInfo} inputArrayInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        inputArrayInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an inputArrayInfo message.
         * @function verify
         * @memberof serverProto.inputArrayInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        inputArrayInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.input != null && message.hasOwnProperty("input")) {
                if (!Array.isArray(message.input))
                    return "input: array expected";
                for (var i = 0; i < message.input.length; ++i) {
                    var error = $root.serverProto.inputInfo.verify(message.input[i]);
                    if (error)
                        return "input." + error;
                }
            }
            return null;
        };

        /**
         * Creates an inputArrayInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof serverProto.inputArrayInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {serverProto.inputArrayInfo} inputArrayInfo
         */
        inputArrayInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.serverProto.inputArrayInfo)
                return object;
            var message = new $root.serverProto.inputArrayInfo();
            if (object.input) {
                if (!Array.isArray(object.input))
                    throw TypeError(".serverProto.inputArrayInfo.input: array expected");
                message.input = [];
                for (var i = 0; i < object.input.length; ++i) {
                    if (typeof object.input[i] !== "object")
                        throw TypeError(".serverProto.inputArrayInfo.input: object expected");
                    message.input[i] = $root.serverProto.inputInfo.fromObject(object.input[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from an inputArrayInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof serverProto.inputArrayInfo
         * @static
         * @param {serverProto.inputArrayInfo} message inputArrayInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        inputArrayInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.input = [];
            if (message.input && message.input.length) {
                object.input = [];
                for (var j = 0; j < message.input.length; ++j)
                    object.input[j] = $root.serverProto.inputInfo.toObject(message.input[j], options);
            }
            return object;
        };

        /**
         * Converts this inputArrayInfo to JSON.
         * @function toJSON
         * @memberof serverProto.inputArrayInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        inputArrayInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return inputArrayInfo;
    })();

    serverProto.hitInfo = (function() {

        /**
         * Properties of a hitInfo.
         * @memberof serverProto
         * @interface IhitInfo
         * @property {number|null} [playerID] hitInfo playerID
         * @property {number|null} [hitPlayerID] hitInfo hitPlayerID
         */

        /**
         * Constructs a new hitInfo.
         * @memberof serverProto
         * @classdesc Represents a hitInfo.
         * @implements IhitInfo
         * @constructor
         * @param {serverProto.IhitInfo=} [properties] Properties to set
         */
        function hitInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * hitInfo playerID.
         * @member {number} playerID
         * @memberof serverProto.hitInfo
         * @instance
         */
        hitInfo.prototype.playerID = 0;

        /**
         * hitInfo hitPlayerID.
         * @member {number} hitPlayerID
         * @memberof serverProto.hitInfo
         * @instance
         */
        hitInfo.prototype.hitPlayerID = 0;

        /**
         * Creates a new hitInfo instance using the specified properties.
         * @function create
         * @memberof serverProto.hitInfo
         * @static
         * @param {serverProto.IhitInfo=} [properties] Properties to set
         * @returns {serverProto.hitInfo} hitInfo instance
         */
        hitInfo.create = function create(properties) {
            return new hitInfo(properties);
        };

        /**
         * Encodes the specified hitInfo message. Does not implicitly {@link serverProto.hitInfo.verify|verify} messages.
         * @function encode
         * @memberof serverProto.hitInfo
         * @static
         * @param {serverProto.IhitInfo} message hitInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        hitInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.playerID != null && Object.hasOwnProperty.call(message, "playerID"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.playerID);
            if (message.hitPlayerID != null && Object.hasOwnProperty.call(message, "hitPlayerID"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.hitPlayerID);
            return writer;
        };

        /**
         * Encodes the specified hitInfo message, length delimited. Does not implicitly {@link serverProto.hitInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof serverProto.hitInfo
         * @static
         * @param {serverProto.IhitInfo} message hitInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        hitInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a hitInfo message from the specified reader or buffer.
         * @function decode
         * @memberof serverProto.hitInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {serverProto.hitInfo} hitInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        hitInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.serverProto.hitInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.playerID = reader.uint32();
                    break;
                case 2:
                    message.hitPlayerID = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a hitInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof serverProto.hitInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {serverProto.hitInfo} hitInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        hitInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a hitInfo message.
         * @function verify
         * @memberof serverProto.hitInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        hitInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.playerID != null && message.hasOwnProperty("playerID"))
                if (!$util.isInteger(message.playerID))
                    return "playerID: integer expected";
            if (message.hitPlayerID != null && message.hasOwnProperty("hitPlayerID"))
                if (!$util.isInteger(message.hitPlayerID))
                    return "hitPlayerID: integer expected";
            return null;
        };

        /**
         * Creates a hitInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof serverProto.hitInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {serverProto.hitInfo} hitInfo
         */
        hitInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.serverProto.hitInfo)
                return object;
            var message = new $root.serverProto.hitInfo();
            if (object.playerID != null)
                message.playerID = object.playerID >>> 0;
            if (object.hitPlayerID != null)
                message.hitPlayerID = object.hitPlayerID >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a hitInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof serverProto.hitInfo
         * @static
         * @param {serverProto.hitInfo} message hitInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        hitInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.playerID = 0;
                object.hitPlayerID = 0;
            }
            if (message.playerID != null && message.hasOwnProperty("playerID"))
                object.playerID = message.playerID;
            if (message.hitPlayerID != null && message.hasOwnProperty("hitPlayerID"))
                object.hitPlayerID = message.hitPlayerID;
            return object;
        };

        /**
         * Converts this hitInfo to JSON.
         * @function toJSON
         * @memberof serverProto.hitInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        hitInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return hitInfo;
    })();

    return serverProto;
})();

module.exports = $root;
