// import { log } from "cc";
import { log } from "cc";
import { ClientMsg } from "./ClientMsg";
import { decodeHead } from "../common/Utils";

enum NETSTATE{
    OFFLINE=0,
    CONNECTING,
    ONLINE
}
export class ClientSocket {
    private linkServer="ws://127.0.0.1:8080";
    private sendData=null;
    state:NETSTATE=NETSTATE.OFFLINE;
    private ws:WebSocket=null;
    // private sendArray=[];
    private callMap:Map<number,Function>=new Map();
    constructor(linkServer,data?){
        this.linkServer = linkServer;
        this.reConnect();
        // if(!!data){
        //     this.sendArray.push(data);
        // }
    }
    public get _ws(){
        return this.ws;
    }
    public reConnect(){
        this.onClose();
        this.ws=new WebSocket(this.linkServer);
        this.state = NETSTATE.CONNECTING;
        this.ws.binaryType="arraybuffer";
        this.ws.onopen = this.onOpen.bind(this);
        this.ws.onmessage = this.onMessage.bind(this);
        this.ws.onclose = this.onClose.bind(this);
        this.ws.onerror = this.onError.bind(this);
    }
    private onOpen(){
        // log("open");
        this.state = NETSTATE.ONLINE;
        if(this.sendData!=null)
            this.ws.send(this.sendData);
    }
    private onMessage(msg:MessageEvent){
        if(msg.data.byteLength<=0)
            return;
        let arrayHead = new Uint8Array(msg.data.buffer,0,2);
        let arrayData = new Uint8Array(msg.data.buffer,2);
        let headInfo=decodeHead(arrayHead);
        if(this.callMap.has(headInfo.type)){
            let callFun=this.callMap.get(headInfo.type);
            callFun(arrayData);
        }
    }
    private onClose(){
        // log("close");
        this.state = NETSTATE.OFFLINE;
        if(this.ws)
            this.ws.close();
        this.ws=null;
    }
    private onError(){
        // log("error");
        this.onClose();
    }
    public send(data){
        if(this.state == NETSTATE.ONLINE){
            let uIntData = new Uint8Array(data);
            // log(data);
            // log(uIntData);

            this._ws.send(uIntData);
            return true;
        }
        else{
            this.sendData=data;
            this.reConnect();
        }
    }
    public addCallBackMap(type:number,callBack:Function){
        this.callMap.set(type,callBack);
    }
    public removeCallBackMap(type:number,callBack:Function){
        this.callMap.delete(type);        
    }
}