import { Singleton } from "../baseClass/Singleton";
import proto from "../msg/ServerProto.js"
export class DataInfo extends Singleton{
    private _playerID:number;
    private _playerInfo:Map<number,proto.serverProto.IplayerInfo>=new Map();
    getPlayerInfo(){
        return this._playerInfo;
    }
    addPlayerInfo(info:proto.serverProto.IplayerInfo){
        this._playerInfo.set(info.playerID,info);
    }
    deletePlayerInfo(id){
        this._playerInfo.delete(id);
    }
    get playerID(){
        return this._playerID;
    }
    set playerID(id){
        this._playerID=id;
    }
}