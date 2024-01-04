// import { log } from "cc";
import { ClientSocket } from "./ClientSocket";
import { Singleton } from "../baseClass/Singleton";

export const socketName={
    GAMESOCKET:"ws://127.0.0.1:8080"
}
export class SocketManager extends Singleton{
    private gameSocket:ClientSocket=null;
    constructor(){
        super();
        this.gameSocket = new ClientSocket(socketName.GAMESOCKET);
        // this.gameEventMap.set("","");
    }
    // public getGameSocket(){
    //     if(this.gameSocket==null)
    //         this.gameSocket = new clientSocket(socketName.GAMESOCKET);
    //     return this.gameSocket;        
    // }
    public sendGameMsg(data){               
        this.gameSocket.send(data);        
    }
    public addGameMap(type:number,callBack:Function){
        this.gameSocket.addCallBackMap(type,callBack);        
    }
    public removeGameMap(type:number,callBack:Function){  
        this.gameSocket.removeCallBackMap(type,callBack);        
    }
}