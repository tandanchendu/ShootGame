import { _decorator, Component, ERigidBody2DType, log, Node, NodePool, PhysicsSystem2D, PolygonCollider2D, randomRangeInt, RigidBody2D, TiledMap, Vec2, Vec3 } from 'cc';
import { ViewManager } from './ViewManager';
// import { eventCtrl } from './eventCtrl';
// import { UIViewCtrl } from './UIViewCtrl';
import { DataInfo } from './global/DataInfo';
import proto, { serverProto } from './msg/ServerProto.js';
// import { socketManager } from './network/socketManager';
// import { clientMsg } from './network/clientMsg';
import { AssertPath, PropAssert } from './emun/Enum';
import { PropCtrl } from './baseClass/PropCtrl';
import { IUIViewCtrl } from './interface/IUIView';
import { PlayerCtrl } from './baseClass/PlayerCtrl';

const { ccclass, property } = _decorator;

@ccclass('GameViewCtrl')
export class GameViewCtrl extends Component {
    private mapInfo:TiledMap=null;
    private cameraNode:Node=null;
    private playerArray:Map<number,PlayerCtrl>=new Map();
    private propArray:Map<any,PropCtrl>=new Map();

    public static instance:GameViewCtrl = null;
    private playerPool:NodePool=null;//注意get后要设置父节点。
    private playerID=-1;
    private tileSize;
    private mapSize;
    private mapScale;
    private uiViewCtrl:IUIViewCtrl=null;
    onLoad() {
        if(GameViewCtrl.instance==null)
            GameViewCtrl.instance = this;
        else{
            this.destroy();
            return;
        }
        //移除节点
        ViewManager.instance.destroyView([AssertPath.BG,AssertPath.LOAD,AssertPath.LOGIN]);
        PhysicsSystem2D.instance.enable=true;
        // PhysicsSystem2D.instance.debugDrawFlags=1;
        PhysicsSystem2D.instance.gravity = new Vec2(0,-960);//g*32

        let tiledNode = this.node.getChildByName("teeworlds");
        this.mapInfo = tiledNode.getComponent(TiledMap);
        this.cameraNode = ViewManager.instance.getCamera();
        this.tileSize = this.mapInfo.getTileSize();
        this.mapSize = this.mapInfo.getMapSize();        
        let colliderGroup = this.mapInfo.getObjectGroup("collider");
        let objPoints = colliderGroup.getObjects();
        let body = this.mapInfo.addComponent(RigidBody2D);
        body.type = ERigidBody2DType.Static;
        //tiledmap中的多边形添加多边形碰撞
        for(let i=0;i<objPoints.length;++i){
            let poly = this.mapInfo.addComponent(PolygonCollider2D);
            poly.offset = new Vec2(-this.mapSize.width*this.tileSize.width/2+objPoints[i].x,-this.mapSize.height*this.tileSize.height/2+objPoints[i].y);
            for(let j=0;j<objPoints[i].points.length;++j){
                poly.points[j]=new Vec2(objPoints[i].points[j].x,objPoints[i].points[j].y);            
            }
            //apply一下，不然不生效
            poly.apply();
        }
        this.playerID=0;//设置自己的playerID
        this.playerPool = new NodePool("player");

        this.loadUIView();//按钮
        this.loadPlayer();
        this.initProp();
        // this.addCallBack();
    }
    private async initProp(){
        let layer = this.mapInfo.getLayer("prop");        
        let propGroup = this.mapInfo.getObjectGroup("prop");
        let objs = propGroup.getObjects();
        let pos:Vec2 = new Vec2();
        let assert="";
        // let obj=objs[0];
        for(let obj of objs.values()){
            [pos.x,pos.y]=[obj.x,obj.y];
            pos = this.getBlockByMapPos(pos);
            pos = this.getPosByBlock(pos);    
            // if(obj.name=="protected"){
            //     assert = AssertPath.PROP_MAPPROTECT;
            // }
            // else if(obj.name=="heart"){
            //     assert = AssertPath.PROP_MAPHEART;            
            // }
            // else if(obj.name=="ninja"){
            //     assert = AssertPath.PROP_NINJA;            
            // }            
            if(PropAssert[obj.name])
                assert = PropAssert[obj.name];
            if(assert!=""&&assert!=PropAssert.ninja){
                //父节点控制
                let [,ctrl] = await ViewManager.instance.clonePrefab(assert,this.mapInfo.node);                
                if(ctrl){
                    this.propArray.set(obj.id,ctrl);
                    ctrl.initInfo(pos);
                }
            }
        }
    }
    private initPlayer(){
        let rand = randomRangeInt(0,10000)%5+5;//随机生成5-9个
        for(let i=1;i<=rand;++i){
            this.addPlayer(i);
        }
    }
    public getPlayerID(){
        return this.playerID;
    }
    public async addPlayer(id:number){        
        let birthRand = 0;//randomRangeInt(0,10000)%4;;//随机出生点
        let player:serverProto.IplayerInfo = {
            playerID:id,
            randNum:birthRand
        }
        // DataInfo.getInstance<DataInfo>().addPlayerInfo(player);        
        let temp = this.playerPool.get();
        let ctrl:PlayerCtrl;                     
        if(!temp){
            //父节点控制
            [temp,ctrl] = await ViewManager.instance.clonePrefab(AssertPath.PLAYER,this.node);            
        }
        else{
            ctrl=temp.getComponent(PlayerCtrl);
            this.node.addChild(temp);
        }
        this.playerArray.set(id,ctrl);
        let playerGroup = this.mapInfo.getObjectGroup("player");
        let obj = playerGroup.getObjects();
        let tileSize = this.mapInfo.getTileSize();
        let size = this.mapInfo.getMapSize();
        let rand=player.randNum;
        let x= -size.width*tileSize.width/2+obj[rand].offset.x;
        let y= size.height*tileSize.height/2-obj[rand].offset.y;
        this.mapScale= this.mapInfo.node.scale.x;          
        this.playerArray.get(id).initInfo(id,x*this.mapScale,y*this.mapScale);//地图缩放了,要乘回去
    }
    private async loadUIView(){
        [,this.uiViewCtrl]=await ViewManager.instance.clonePrefab(AssertPath.UI);
        this.uiViewCtrl.playerID=this.playerID;            
    }
    private loadPlayer(){
        this.addPlayer(0);//自己
        this.initPlayer();//随机生成敌人
    }
    public checkMapCollider(pos:Vec2|Vec3){
        let block:Vec2=new Vec2(pos.x,pos.y);
        block = this.getBlockByPos(block);
        let layer = this.mapInfo.getLayer("border");
        let tile=layer.getTileGIDAt(block.x,block.y);
        return tile;
    }
    private getBlockByPos(pos:Vec2){
        pos.x=Math.floor(pos.x/this.mapScale +this.tileSize.width*this.mapSize.width/2);        
        pos.y=Math.floor(this.tileSize.height*this.mapSize.height/2-pos.y/this.mapScale);
        this.getBlockByMapPos(pos);
        return pos;

    }
    private getBlockByMapPos(pos:Vec2){
        pos.x=Math.floor(pos.x/this.tileSize.width);        
        pos.y=Math.floor(pos.y/this.tileSize.height);
        return pos;
    }
    private getPosByBlock(pos:Vec2){
        pos.x = (-this.tileSize.width*this.mapSize.width/2+pos.x*this.tileSize.width+this.tileSize.width/2)//*this.mapScale;
        pos.y = (-this.tileSize.height*this.mapSize.height/2+pos.y*this.tileSize.height+this.tileSize.height/2)//*this.mapScale;
        return pos;
    }
    // public setPlayerRotate(id:number,rotate:number,touchType:string){
    //     if(this.playerArray.has(id))
    //         this.playerArray.get(id).setRotate(rotate,touchType);
    // }
    public playerFire(id:number){
        if(this.playerArray.has(id))
            this.playerArray.get(id).fire();
    }
    public hitPlayer(playerID:number,hitID:number){
        //打中的或被打中的其中有一个是自己
        if(this.playerArray.has(hitID)&&(hitID==this.playerID||this.playerID==playerID)){
            let player=this.playerArray.get(hitID);
            if(player.bRemove==false){
                let bDie=player.subHeart(1);
                if(playerID==this.playerID&&bDie==true){
                    this.uiViewCtrl.addScore(1);
                }            
            }
        }
    }
    public getPlayerPos(playerID:number){
        if(this.playerArray.has(playerID)){
            let player = this.playerArray.get(playerID);
            return player.pos;
        }
        return null;
    }
    private updateCamera(){
        let pos = this.playerArray.get(this.playerID).pos;
        this.cameraNode.setPosition(pos);                        
    }
    private updateUIView(){
        let attr = this.playerArray.get(this.playerID).attr;
        this.uiViewCtrl.updateView(attr);
    }
    public updatePlayer(deltaTime: number){
        let gameState=0;
        for(let player of this.playerArray.values()){
            if(player.bRemove&&this.playerArray.has(player.playerID)){
                this.playerArray.delete(player.playerID);
                if(player.playerID==this.playerID)
                    gameState=2;
                else
                    gameState=1;
                this.playerPool.put(player.node);
            }
            else {
                if(player.playerID==this.playerID){
                    if(this.uiViewCtrl)
                        player.updateInput(this.uiViewCtrl.keys);
                }
                player.updatePlayer(deltaTime);
            }
        }        
        if(gameState!=0){
            this.checkGame(gameState);
        }        
    }
    updateProp(deltaTime: number){
        for(let prop of this.propArray.values()){
            if(prop.updateProp)
                prop.updateProp(deltaTime);
        }
    }
    update(deltaTime: number) {
        if(this.uiViewCtrl&&this.playerArray.get(this.playerID)){
            //相机跟随玩家
            this.updateCamera();
            this.updateUIView();
        }
        //玩家更新
        this.updatePlayer(deltaTime);
        //道具更新
        this.updateProp(deltaTime);
    }
    private checkGame(state:number){
        if(state==2){
            this.uiViewCtrl.showGameOver();
        }
        else if(state==1&&this.playerArray.size<2){
            this.initPlayer();
        }
    }
    onDestroy(){
        GameViewCtrl.instance=null;
        // this.removeCallBack();
    }
    // private onPlayerInfo(data){
    //     let player = clientMsg.getInstance<clientMsg>().onPlayerInfo(data);
    //     this.loadPlayer(player);
    // }
    // private onInputInfo(data){
    //     let inputArray = clientMsg.getInstance<clientMsg>().onInputArray(data)
    //     for(let input of inputArray.input){
    //         if(this.PlayerCtrl[input.playerID])
    //             this.PlayerCtrl[input.playerID].updateInput(input);
    //     }
    // }
    // private addCallBack(){
    //     socketManager.getInstance<socketManager>().addGameMap(proto.ServerProto.MSG.PLAYER_INFO,this.onPlayerInfo.bind(this))
    //     socketManager.getInstance<socketManager>().addGameMap(proto.ServerProto.MSG.INPUT_INFO,this.onInputInfo.bind(this))
    // }
    // private removeCallBack(){
    //     socketManager.getInstance<socketManager>().removeGameMap(proto.ServerProto.MSG.PLAYER_INFO,this.onPlayerInfo.bind(this))        
    //     socketManager.getInstance<socketManager>().removeGameMap(proto.ServerProto.MSG.INPUT_INFO,this.onInputInfo.bind(this))        
    // }
}


