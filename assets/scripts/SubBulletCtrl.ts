import { _decorator, BoxCollider2D, Component, Contact2DType, log, Node, ParticleSystem2D, PhysicsGroup, PhysicsSystem2D, RigidBody2D, Sprite, UITransform, Vec2, Vec3 } from 'cc';
import { SubPlayerCtrl } from './SubPlayerCtrl';
import { GameViewCtrl } from './GameViewCtrl';
import { GroupCollider } from './emun/Enum';
import { BulletCtrl } from './baseClass/BulletCtrl';
const { ccclass, property } = _decorator;

@ccclass('SubBulletCtrl')
export class SubBulletCtrl extends BulletCtrl {
    private bulletBody:RigidBody2D=null;
    private bulletCollider:BoxCollider2D=null;
    private rotateV = new Vec2(1,0);
    private parentCtrl:SubPlayerCtrl;
    private bRemove = false;
    private bCollider=false;//是否碰撞
    private particle:ParticleSystem2D=null;
    protected onLoad(): void {
        //玩家左移状态
        this.bulletBody = this.node.getComponent(RigidBody2D);
        this.bulletCollider=this.node.getComponent(BoxCollider2D);
        this.bulletCollider.on(Contact2DType.BEGIN_CONTACT,this.onCollider.bind(this));
        this.particle=this.node.getChildByName("particle").getComponent(ParticleSystem2D);
    }
    public initInfo(parent:SubPlayerCtrl,rotate:number){
        this.node.setPosition(0,0);
        this.bCollider=true;
        let force=100;
        this.bulletBody.applyForceToCenter(new Vec2(force*Math.cos(rotate),force*Math.sin(rotate)),true);
        this.bulletBody.enabled=true;
        this.bulletCollider.enabled=true;
        this.parentCtrl=parent;
        this.bulletCollider.tag=this.parentCtrl.playerID;
        this.bulletBody.wakeUp();
        this.node.setScale(1,1);
        this.particle.resetSystem();
    }
    private onCollider(bullet:BoxCollider2D,other:BoxCollider2D){
        if(other.group==this.bulletBody.group){
            [bullet,other]=[other,bullet];
        }
        if(bullet.group==this.bulletBody.group){
            if(other.group!=GroupCollider.BULLTE){               
                //子弹对应玩家与命中玩家不相同触发
                if(other.group==GroupCollider.PLAYER){
                    if(this.parentCtrl.playerID != other.tag && this.bRemove==false){
                        GameViewCtrl.instance.hitPlayer(this.parentCtrl.playerID,other.tag);
                        this.bRemove=true;//update里下一帧移除，不然报错
                    }
                }
                else
                    this.bRemove=true;//update里下一帧移除，不然报错
                if(this.bRemove==true){
                    this.bulletBody.sleep();
                    this.node.setScale(0,0); 
                    this.node.setPosition(0,0);
                    this.particle.stopSystem();
                }
            }
        }
    }
    update(deltaTime: number) {
        if(this.bCollider==true){
            let rotate = this.bulletBody.linearVelocity.signAngle(this.rotateV);
            this.node.angle=-rotate*180/Math.PI;
            // if(this.direct==-1){
            //     this.node.angle=rotate*180/Math.PI;
            //     this.sprite.angle=(Math.PI+2*rotate)*180/Math.PI;
            // }
            if(this.bRemove){
                this.bRemove=false;            
                this.parentCtrl.bulletCollider(this.node);

            }
        }

    }
    onDestroy(){
        this.bulletCollider.off(Contact2DType.BEGIN_CONTACT,this.onCollider.bind(this));
    }
}


