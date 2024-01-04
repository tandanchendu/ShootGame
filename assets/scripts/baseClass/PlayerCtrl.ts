import { Component } from "cc";
import { PlayerAttr } from "../interface/IUIView";

export class PlayerCtrl extends Component {
    private _bRemove=false;
    private _attr:PlayerAttr;
    private _playerID=-1;

    public initInfo(id:number,x:number,y:number){};
    // public setRotate(rotate:number,touchType:string){};
    public subHeart(hurt:number):boolean{return this._bRemove;};
    public updateInput(key:number){};
    public updatePlayer(dt:number){};
    public fire(){};
    get bRemove(){
        return this._bRemove;
    }
    set bRemove(remove:boolean){
        this._bRemove=remove;
    }
    get pos(){
        return this.node.getPosition();
    }
    get attr(){
        return this._attr;
    }
    set attr(attribute:PlayerAttr){
        this._attr=attribute;
    }
    get playerID(){
        return this._playerID;
    }
    set playerID(playerID:number){
        this._playerID=playerID;
    }
}