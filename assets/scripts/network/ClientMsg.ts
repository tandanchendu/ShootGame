// import { director, log } from "cc";
// import * as proto from "../msg/serverProto.js"
import proto from "../msg/ServerProto.js"
import {DataInfo} from "../global/DataInfo"
// import { eventMsg } from "../emun/Enum.js";
import { Singleton } from "../baseClass/Singleton";
// import { eventCtrl } from "../eventCtrl";
import { SocketManager } from "./SocketManager";
import { decodeHead, encodeHead } from "../common/Utils";

export class ClientMsg extends Singleton{
    // public decodeMsg(data:Uint8Array){
    //     // let arrayHead1 = new Uint8Array(data.buffer,0,2);
    //     let arrayHead = data.slice(0,2);

    //     // console.log(arrayHead)
    //     // let arrayData1 = new Uint8Array(data.buffer,2);
    //     let arrayData = data.slice(2);
    //     let headInfo = decodeHead(arrayHead);        
    //     if(headInfo.type == proto.serverProto.MSG.LOGIN_INFO){
    //        let loginInfo:proto.serverProto.loginInfo = proto.serverProto.loginInfo.decode(arrayData);
    //        return loginInfo;
    //     //    eventCtrl.getInstance().emit(eventMsg.LOGIN,loginInfo);
    //    }       
    //    return "";
    // }    
    
    public sendLogin(){
        let head = encodeHead(proto.serverProto.MSG.LOGIN_INFO);
        SocketManager.getInstance<SocketManager>().sendGameMsg(head);
    }
    public sendInput(input){
        let head = encodeHead(proto.serverProto.MSG.INPUT_INFO)
        let data = proto.serverProto.inputInfo.encode(input).finish();
        let buffer = [...head,...data];
        SocketManager.getInstance<SocketManager>().sendGameMsg(buffer);
        return buffer;
    }
    public onLogin(data){
        let login= proto.serverProto.loginInfo.decode(data);
        DataInfo.getInstance<DataInfo>().playerID=login.info.playerID;
        DataInfo.getInstance<DataInfo>().addPlayerInfo(login.info);
    }
    public onPlayerInfo(data){
        let player= proto.serverProto.playerInfo.decode(data);
        DataInfo.getInstance<DataInfo>().addPlayerInfo(player);
        return player;
    }
    public onInputArray(data){
        let inputArray= proto.serverProto.inputArrayInfo.decode(data);
        return inputArray;
    }
}
