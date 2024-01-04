import { Component,Vec2,Vec3,_decorator, tween } from "cc";
import { PropCtrl } from "../baseClass/PropCtrl";
const {ccclass} = _decorator;
@ccclass("MapProtectCtrl")
export class MapProtectCtrl extends PropCtrl{
    // public initInfo(pos:Vec2){
    //     this.node.setPosition(pos.x,pos.y);
    //     let moveTween=tween(this.node)
    //     .by(1,{position:new Vec3(0,5,0)})
    //     .by(1,{position:new Vec3(0,-5,0)})              
    //     tween(this.node).repeatForever(moveTween).start();  
    // }
}