import { _decorator, AudioSource, BoxCollider2D, Animation, Color, Component, Contact2DType, dragonBones, EventKeyboard, Input, input, instantiate, IPhysics2DContact, KeyCode, log, Node, NodePool, PhysicsGroup, PhysicsSystem2D, Pool, Prefab, randomRangeInt, RigidBody2D, UITransform, Vec2, Vec3, PolygonCollider2D, Collider2D } from 'cc';

import { ViewManager } from './ViewManager';
import { UIViewCtrl } from './UIViewCtrl';
// import { PlayerModel } from './model/PlayerModel';
import { getRotate } from './common/Utils';
import { serverProto } from './msg/ServerProto';
import { GameViewCtrl } from './GameViewCtrl';
import { AssertPath, GroupCollider } from './emun/Enum';
import { MapProtectCtrl } from './prop/MapProtectCtrl';
import { MapHeartCtrl } from './prop/MapHeartCtrl';
import { PlayerCtrl } from './baseClass/PlayerCtrl';
import { BulletCtrl } from './baseClass/BulletCtrl';
import { NinjaCtrl } from './prop/NinjaCtrl';
const { ccclass, property } = _decorator;

enum playerState{
    IDLE="idle",
    WALK="walk",
}
enum fireState{
    IDLE="idle",
    FIRE="fire",
    NINJAFIRE="ninjaFire"
}
enum playerDirect{
    LEFT=-1,
    RIGHT=1
}
const MAX_HEART=10;
const MAX_PROTECT=10;
const MAX_BULLET=10;
const WALK_SPEED=10;
const JUMP_SPEED=15;
const BULLET_ADD_INTERVAL=0.5;


@ccclass('SubPlayerCtrl')
export class SubPlayerCtrl extends PlayerCtrl {
    // private _playerID=-1;
    private dragon:dragonBones.ArmatureDisplay = null;
    private dragonWeapon:dragonBones.ArmatureDisplay = null;
    private speedPos=new Vec2(0,0);
    private tempPos = new Vec2(0,0);
    private _rotate = 0;

    // private model:PlayerModel=null;
    private body:RigidBody2D=null;
    private jumpState = 0;
    // private firePlayTime=0;
    private state={
        play:playerState.IDLE,
        fire:fireState.IDLE,
        direct:playerDirect.RIGHT
    }
    private bulletPool:NodePool = null;
    private bulletNode = null;
    private playerNode = null;
    private collider:BoxCollider2D = null;
    private friction=1;    
    private fireTime=1;
    private inputKey=0;
    private bulletAddInterval=BULLET_ADD_INTERVAL;
    private size;
    private fireEffect:AudioSource=null;
    private bodyIndex:number=30;
    private bodySlot:dragonBones.Slot=null;
    private weaponSlot:dragonBones.Slot=null;
    private ninjaTime=-1;
    private ninjaParticle:Node=null;
    private ninjaCollider:Node=null;
    private autoKesUpdateTime=1;
    private playerColor:Color=null;
    onLoad() {
        this.body = this.node.getComponent(RigidBody2D);        
        this.collider = this.node.getComponent(BoxCollider2D);        
        this.collider.on(Contact2DType.BEGIN_CONTACT,this.onCollider.bind(this));

        this.bulletNode = this.node.getChildByName("bulletNode");
        this.playerNode = this.node.getChildByName("playerNode");
        let weaponNode = this.playerNode.getChildByName("weapon");
        this.dragon = this.playerNode.getChildByName("player").getComponent(dragonBones.ArmatureDisplay);
        this.dragonWeapon = weaponNode.getComponent(dragonBones.ArmatureDisplay);
        this.setPlayState(playerState.IDLE);
        this.setFireState(fireState.IDLE,-1);
        this.collider.friction=this.friction;
        this.bulletPool = new NodePool("bullet");        
        this.size=this.node.getComponent(UITransform).contentSize;
        this.size.width*=this.node.scale.x;
        this.size.height*=this.node.scale.y;
        this.fireEffect=this.node.getComponent(AudioSource);
        this.bodySlot = this.dragon.armature().getSlot("body");
        this.weaponSlot = this.dragonWeapon.armature().getSlot("weapon");
        this.dragonWeapon.on(dragonBones.EventObject.COMPLETE,this.onFinish.bind(this),this);   
        this.dragonWeapon.on(dragonBones.EventObject.FRAME_EVENT,this.onFrame.bind(this),this);        
        this.ninjaCollider = weaponNode.getChildByName("ninjaCollider");
        this.ninjaParticle = weaponNode.getChildByPath("particle");
        this.ninjaCollider.active=false;
        this.ninjaParticle.active=false;        
    }
    get rotate(){
        return this._rotate;
    }
    set rotate(r){
        this._rotate=r;
    }
    private onFinish(event:dragonBones.EventObject){
        if(event.type==dragonBones.EventObject.COMPLETE){
            if(this.state.fire!=fireState.IDLE){
                this.setFireState(fireState.IDLE,-1);            
            }
        }
    }
    private onFrame(event:dragonBones.EventObject){
        if(event.type==dragonBones.EventObject.FRAME_EVENT){
            if(event.name=="stopMove"){
                this.body.applyLinearImpulseToCenter(new Vec2(-this.body.linearVelocity.x+this.speedPos.x,0),true);
            }
        }
    }
    public subHeart(hurt:number){
        if(hurt<=0)
        return;
        if(this.attr.protectCount>hurt){
            this.attr.protectCount-=hurt;
            hurt=0;
        }
        else{
            this.attr.protectCount=0;
            hurt-=this.attr.protectCount;
        }
        if(this.attr.heartCount>hurt){
            this.attr.heartCount-=hurt;
            hurt=0;
        }
        else{
            this.attr.heartCount=0;
            hurt-=this.attr.heartCount;
        }        
        if(this.attr.heartCount<=0){
            this.bRemove=true;
        }
        return this.bRemove;
    }
    //碰撞
    private onCollider(player:Collider2D,other:Collider2D,contact:IPhysics2DContact){
        if(other.group==this.collider.group){
            [player,other]=[other,player];
        }
        if(player.group==this.collider.group){
            if(other.group==PhysicsGroup.DEFAULT){
                let info = contact.getWorldManifold();
                if(this.speedPos.y!=0) {
                    if(this.jumpState>0){
                        //落地检测
                        if(info.normal.y>0.99){
                            this.jumpState=0;
                            this.speedPos.y=0;
                        }
                    }
                    else {
                        //落地检测
                        if(info.normal.y>0.99){
                            this.jumpState=1;
                        }
                    }
                }
            }
            else if(other.group==GroupCollider.HEART){
                let ctrl:MapHeartCtrl = other.node.getComponent(MapHeartCtrl);
                if(ctrl.active){                
                    if(this.addHeart()){
                        ctrl.setActive();
                    }
                }
            }
            else if(other.group==GroupCollider.PROTECT){
                let ctrl:MapProtectCtrl = other.node.getComponent(MapProtectCtrl);      
                if(ctrl.active){
                    if(this.addProtect()){
                        ctrl.setActive();
                    }                    
                }
            }
            else if(other.group==GroupCollider.NINJA){
                // if(this.playerID==player.tag){      
                //     if(this.ninjaTime==-1){
                //         let ctrl:NinjaCtrl = other.node.getComponent(NinjaCtrl);
                //         if(ctrl.active){
                //             ctrl.setActive();                                        
                //         }     
                //         let color = new Color(128,128,128);
                //         this.setPlaySkin(7,color);  
                //         this.weaponSlot.displayIndex=2;
                //         this.ninjaTime=0;                                                                           
                //     }
                // }
                // else{
                //     if(player.tag!=other.tag)
                //         GameViewCtrl.instance.hitPlayer(this.playerID,other.tag);
                // }
            }
        }
    }
    private checkInAir(){
        let pos = this.node.getPosition();
        pos.y-=this.size.height/2;
        let tile=GameViewCtrl.instance.checkMapCollider(pos);
        if(tile==0)
            return true;
        else
            return false
    }
    public fire(){        
        this.playerAttack();
    }
    
    private playerAttack(){
        if(this.weaponSlot.displayIndex==2)
            this.ninjaAttack()
        else
            this.gunAttack();
    }
    private ninjaAttack(){
        this.setFireState(fireState.NINJAFIRE,1);        
        this.body.applyLinearImpulseToCenter(new Vec2(this.state.direct*100,0),true);        
    }
    private async gunAttack(){
        if(this.attr.bulletCount<=0)
            return;
        this.attr.bulletCount--;

        let temp = this.bulletPool.get();
        let ctrl:BulletCtrl;                     
        if(!temp){
            [temp,ctrl] =await ViewManager.instance.clonePrefab(AssertPath.BULLET,this.bulletNode);            
        }
        else{
            ctrl=temp.getComponent(BulletCtrl);
            this.bulletNode.addChild(temp);
        }
        this.setFireState(fireState.FIRE,1);
        
        ctrl.initInfo(this,this.rotate);
        this.fireEffect.play();        
    }
    public bulletCollider(bullet){
        this.bulletPool.put(bullet);
    }
    public autoFire(dt){
        this.fireTime-=dt;
        if(this.fireTime<0){
            this.fireTime=Math.random()*0.2+0.3;
            if(this.attr.bulletCount<1)
                this.fireTime=randomRangeInt(10,15);
            this.playerAttack();
            // let playerID = GameViewCtrl.instance.getPlayerID()
            // let pos = GameViewCtrl.instance.getPlayerPos(playerID);
            // if(pos!=null){
            //     this.rotate = Math.atan2(pos.y-this.pos.y,pos.x-this.pos.x);
            // }
            // else
            //     this.rotate = (Math.random()*2-1)*Math.PI;
            // this.setRotate(rotate,Node.EventType.TOUCH_START);    
        }
    }
    private updateRotate(){
        let rotate = this.rotate;
        let bone = this.dragon._armature.getBone("rotate");
        let scaleY = 1;
        if(this.state.direct==playerDirect.LEFT){
            rotate = getRotate((Math.PI-rotate)*180/Math.PI)*Math.PI/180;
            if(rotate<-Math.PI/2 || rotate>Math.PI/2){
                scaleY=-1;
            }
        }
        else{
            if(rotate<-Math.PI/2 || rotate>Math.PI/2){
                scaleY=-1;
            }
        }
        bone.offset.rotation = rotate;        
        this.dragonWeapon.node.setRotationFromEuler(new Vec3(0,0,rotate*180/Math.PI));
        this.dragonWeapon.node.setScale(1,scaleY);
        bone.invalidUpdate();
    }
    private setPlayState(state:playerState){
        this.state.play=state;
        this.dragon.playAnimation(this.state.play);
    }
    private setPlaySkin(index:number,color:Color){          
        this.bodyIndex=index;         
        this.bodySlot.displayIndex=this.bodyIndex;
        this.bodySlot.invalidUpdate();  
        this.dragon.color=color;      
    }
    
    private setFireState(state:fireState,count:number){
        this.state.fire=state;
        this.dragonWeapon.playAnimation(this.state.fire,count);
    }
    public initInfo(id:number,x:number,y:number){
        this.node.setPosition(x,y);
        this.playerID= id;
        let collider = this.node.getComponent(BoxCollider2D);        
        collider.tag=id;
        let ninjaComponent = this.ninjaCollider.getComponent(PolygonCollider2D);
        ninjaComponent.tag=id;
        this.bRemove=false;
        this.attr = {
            heartCount:MAX_HEART,
            protectCount:0,
            bulletCount:MAX_BULLET
        }
        let r = randomRangeInt(0,256);
        let g = randomRangeInt(0,256);
        let b = randomRangeInt(0,256);
        this.playerColor = new Color(r,g,b);
        this.setPlaySkin(30,this.playerColor);
    }
    public addHeart(){
        if(this.attr.heartCount<MAX_HEART){
            this.attr.heartCount++;
            return true;
        }
        return false;
    }
    public addProtect(){
        if(this.attr.protectCount<MAX_PROTECT){
            this.attr.protectCount++;
            return true;
        }
        return false;
    }
    public updateInput(key:number){
        this.inputKey=key;
    }
    public updatePlayer(dt:number){
        this.updateState(this.inputKey);
        let playerID = GameViewCtrl.instance.getPlayerID()
        if(this.playerID!=playerID){
            let pos = GameViewCtrl.instance.getPlayerPos(playerID);
            //敌人随机操作
            //0 1 2 4 8 16
            this.autoKesUpdateTime-=dt;
            if(this.autoKesUpdateTime<0){
                this.autoKesUpdateTime=1;
                this.inputKey = randomRangeInt(0,16);
                //控制面向玩家
                if(this.pos&&pos){
                    if(this.pos.x>pos.x){
                        this.inputKey|=0x01;//左
                    }
                    else{
                        this.inputKey|=0x02;//右
                    }
                }
            }
            this.autoFire(dt);
        }
        this.autoAddBullet(dt);
        if(this.ninjaTime>=0){
            this.ninjaTime+=dt;
            if(this.ninjaTime>=15){
                this.setPlaySkin(30,this.playerColor);
                this.weaponSlot.displayIndex=5;
                this.ninjaTime=-1;
                this.ninjaCollider.active=false;
                this.ninjaParticle.active=false;
            }
            else{
                this.ninjaCollider.active=true;
                this.ninjaParticle.active=true;
            }
        }
    }
    public autoAddBullet(dt){
        if(this.attr.bulletCount<10){
            this.bulletAddInterval-=dt;
            if(this.bulletAddInterval<=0){
                this.bulletAddInterval=BULLET_ADD_INTERVAL;
                this.attr.bulletCount+=1;
            }
        }        
    }
    private updateState(keys){
        this.tempPos.y = this.body.linearVelocity.y;
        this.setSpeed(keys);
        this.tempPos.x = this.speedPos.x;
        if(this.speedPos.x!=0){
            if(this.speedPos.x<0){
                this.state.direct = playerDirect.LEFT;
                this.rotate=Math.PI;
            }
            else{
                this.state.direct = playerDirect.RIGHT;
                this.rotate=0;
            }
            this.playerNode.setScale(this.state.direct,1);

            if(this.state.play!=playerState.WALK)
                this.setPlayState(playerState.WALK);
        }
        else if(this.state.play!=playerState.IDLE){
            this.setPlayState(playerState.IDLE);
        }        
        let bInAir=this.checkInAir();
        if(this.collider.friction!=0 && bInAir==true){
            this.collider.friction=0;
            this.collider.apply();
        }
        else if(this.collider.friction==0 && bInAir==false){
            this.collider.friction=this.friction;
            this.collider.apply();
        }
        if(this.speedPos.y!=0&&(this.jumpState==0||this.jumpState==1||this.jumpState==4)){            
            this.jumpState+=1;
            this.tempPos.y = this.speedPos.y;
        }         
        this.updateRotate();
        if(this.state.fire!=fireState.NINJAFIRE)
            this.body.linearVelocity=this.tempPos;
    }
    private setSpeed(keys){
        if(keys & 0x01){
            this.speedPos.x=-WALK_SPEED;
        }
        if(keys & 0x02){
            this.speedPos.x=WALK_SPEED;
        }
        if((keys & 0x02) == (keys & 0x01)){
            this.speedPos.x=0;
        }           
        if(keys & 0x04){
            if(this.jumpState==3)
                this.jumpState=4;
            if(this.jumpState==0||this.jumpState==4){
                this.speedPos.y=JUMP_SPEED;
            }
        }        
        else{
            if(this.jumpState==1||this.jumpState==2)
                this.jumpState=3;
        }
    }
    onDestroy(){
        // eventCtrl.getInstance().off("playerFire",this.onPlayerFire.bind(this),this);
    }
}


