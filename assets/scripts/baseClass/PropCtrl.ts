import { Component, Vec2, Vec3, tween } from "cc";

export class PropCtrl extends Component{
    private timeCount=0;
    protected birthTime=15;
    private bActive=true;
    public initInfo(pos:Vec2){
        this.node.setPosition(pos.x,pos.y);
        let moveTween=tween(this.node)
        .by(1,{position:new Vec3(0,10,0)})
        .by(1,{position:new Vec3(5,0,0)})
        .by(1,{position:new Vec3(0,-10,0)})  
        .by(1,{position:new Vec3(-5,0,0)})              
        tween(this.node).repeatForever(moveTween).start();  
    }
    public setActive(active=false){
        this.bActive=active;
//        this.node.setScale(0,0);
    }
    public get active(){
        return this.bActive;
    }   
    updateProp(dt:number){
        if(this.active==false){
            if(this.node.active==true){
                this.timeCount=0;
                this.node.active=false;
            }
            else{
                this.timeCount+=dt;
                if(this.timeCount>this.birthTime){
                    this.timeCount=0;
                    this.node.active=true;
                    // this.node.setScale(1,1);
                    this.setActive(true);
                }
            }
        }
    }
}