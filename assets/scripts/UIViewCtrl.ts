import { _decorator, Button, Camera, Component, EventKeyboard, EventTouch, Input, input, KeyCode, Label, Layers, log, Node, NodePool, Prefab, resources, sys, Vec2, view } from 'cc';
import { EventCtrl } from './EventCtrl';
import { GameViewCtrl } from './GameViewCtrl';
import { ViewManager } from './ViewManager';
import { getRotate } from './common/Utils';
import { AssertPath } from './emun/Enum';
import { IUIViewCtrl, PlayerAttr } from './interface/IUIView';
import { NATIVE } from 'cc/env';
const { ccclass, property } = _decorator;

@ccclass('UIViewCtrl')
export class UIViewCtrl extends Component implements IUIViewCtrl{
    // private camera:Camera=null;
    // private size = view.getViewportRect();
    // private centern;
    private heartNode:Node=null;
    private protectNode:Node=null;
    private bulletNode:Node=null;

    private bullet:Node[]=[];
    private heart:Node[]=[];
    private protect:Node[]=[];
    private _playerID=-1;
    private _keys=0;
    private labScore:Label=null;
    private scoreNum=0;
    private scoreNode:Node=null;
    private labTime:Label=null;
    private startTimet:number=0;
    onLoad() {
        //ui相机确保高度一致，适配高可以确保高度一致，适配宽可能就要重新计算设置相机高度
        // this.camera = this.node.getChildByName("uiCamera").getComponent(Camera);
        // let size = view.getVisibleSize();
        // this.camera.orthoHeight = size.height;

        this.labScore=this.node.getChildByPath("scoreView/labelScore").getComponent(Label);
        this.scoreNode=this.node.getChildByName("scoreView")
        this.scoreNode.active=false;

        // this.centern = new Vec2(this.size.width/2,this.size.height/2);
        this.heartNode = this.node.getChildByName("heartNode");
        this.protectNode = this.node.getChildByName("protectNode");
        this.bulletNode = this.node.getChildByName("bulletNode");
        this.loadProp(AssertPath.PROP_BULLET,this.bulletNode,this.bullet);
        this.loadProp(AssertPath.PROP_HEART,this.heartNode,this.heart);
        this.loadProp(AssertPath.PROP_PROTECT,this.protectNode,this.protect);

        // this.node.on(Node.EventType.TOUCH_START,this.onTouch.bind(this));
        // this.node.on(Node.EventType.TOUCH_MOVE,this.onTouch.bind(this));
        input.on(Input.EventType.KEY_DOWN,this.onKeyDown.bind(this));
        input.on(Input.EventType.KEY_UP,this.onKeyUp.bind(this));

        let btnRestart=this.node.getChildByPath("scoreView/btnRestart")
        let btnBack = this.node.getChildByPath("scoreView/btnBack")
        btnRestart.on(Button.EventType.CLICK,this.onRestart.bind(this))
        btnBack.on(Button.EventType.CLICK,this.onBack.bind(this))

        let btnFire = this.node.getChildByPath("BtnFire")
        btnFire.on(Input.EventType.TOUCH_START,this.onFire.bind(this))

        let btnLeft=this.node.getChildByName("BtnLeft");

        let btnRight = this.node.getChildByName("BtnRight")
        let btnJump=this.node.getChildByName("BtnJump")

        this.setBtnTouch(btnLeft,this.onLeft);

        this.setBtnTouch(btnRight,this.onRight);
        this.setBtnTouch(btnJump,this.onJump);
        let time=new Date();
        this.startTimet=time.getTime();
        this.labTime=this.node.getChildByName("LabelTime").getComponent(Label);
        if(sys.isBrowser==true || sys.platform==sys.Platform.WIN32){
            let nodeTips=this.node.getChildByName("LabelTips");
            nodeTips.active=true;
            btnLeft.active=false;
            btnRight.active=false;
            btnJump.active=false;
        }
    }

    private setBtnTouch(btn:Node,callBack:Function){
        btn.on(Input.EventType.TOUCH_START,callBack.bind(this,1))
        btn.on(Input.EventType.TOUCH_END,callBack.bind(this,2))
        btn.on(Input.EventType.TOUCH_CANCEL,callBack.bind(this,3))
    }
    private onLeft(index:number){
        if(index==1)
            this._keys |= 0x01;//左
        else        
            this._keys &= 0xfe;//左 1111 1110        
    }
    private onRight(index:number){
        if(index==1)
            this._keys |= 0x02;//右
        else
            this._keys &= 0xfd;//右 1111 1101
    }
    private onJump(index:number){
        if(index==1)
            this._keys |= 0x04;//跳
        else
            this._keys &= 0xfb;//跳 1111 1011
    }
    private onFire(index:number){
        GameViewCtrl.instance.playerFire(this._playerID);
    }
    private onRestart(){
        this.scoreNum=0;
        this.labScore.string="0";
        this.scoreNode.active=false;
        GameViewCtrl.instance.addPlayer(0);
    }
    private onBack(){
        ViewManager.instance.loadBgAndLogin();
    }
    private onKeyDown(event:EventKeyboard){
        // keys |= 0x01;//左
        // keys |= 0x02;//右
        // keys |= 0x04;//跳
        // keys |= 0x08;//左点击
        // keys |= 0x10;//右点击
        if(event.keyCode==KeyCode.KEY_A){            
            this._keys |= 0x01;//左
        }
        else if(event.keyCode==KeyCode.KEY_D){
            this._keys |= 0x02;//右
        }
        else if(event.keyCode==KeyCode.SPACE){
            this._keys |= 0x04;//跳
        }  
    }
    private onKeyUp(event:EventKeyboard){
        if(event.keyCode==KeyCode.KEY_A){            
            this._keys &= 0xfe;//左 1111 1110
        }
        else if(event.keyCode==KeyCode.KEY_D){
            this._keys &= 0xfd;//右 1111 1101
        }
        else if(event.keyCode==KeyCode.SPACE){
            this._keys &= 0xfb;//跳 1111 1011
        }     
    }
    get keys(){
        return this._keys;
    }
    get playerID(){
        return this._playerID; 
    }
    set playerID(playerID){
        this._playerID=playerID;
    }
    loadProp(name,parent,nodeArray){
        this.checkLoad(name,parent,nodeArray);
        this.updateAttr(nodeArray,10);
    }
    private async checkLoad(name,parent,nodeArray){
        for(let i=0;i<10;++i){
            [nodeArray[i], ]=await ViewManager.instance.clonePrefab(name,parent);
            nodeArray[i].setPosition(35+i*70,0);
        }
    }

    // private onTouch(event:EventTouch){
    //     //坐标原点左下角
    //     // let touch = event.getTouches();
    //     // let pos = touch[0].getLocation();
    //     // let rotate = Math.atan2(pos.y-this.centern.y,pos.x-this.centern.x);
    //     // GameViewCtrl.instance.setPlayerRotate(this._playerID,rotate,event.getType());
    //     GameViewCtrl.instance.playerFire(this._playerID);
    // }
    private updateAttr(arrayNode,count){
        if(arrayNode.length>0){
            for(let i=0;i<arrayNode.length;++i){
                if(i<count)
                    arrayNode[i].active=true;            
                else
                    arrayNode[i].active=false;
            }
        }
    }
    private updateTime(){
        let time = new Date();
        let timeCount=(time.getTime()-this.startTimet)/1000;
        let min = Math.floor((timeCount)/60);
        let second = Math.floor(timeCount%60);
        this.labTime.string = `${min>=10?min:"0"+min}:${second>=10?second:"0"+second}`;
        // GameViewCtrl.instance.playerFire(this._playerID);
    }
    public updateView(attr:PlayerAttr){
        this.updateAttr(this.heart,attr.heartCount);
        this.updateAttr(this.protect,attr.protectCount);
        this.updateAttr(this.bullet,attr.bulletCount);
        this.updateTime();
    }
    public addScore(score){
        this.scoreNum+=score;
        this.labScore.string=this.scoreNum.toString();
    }
    public showGameOver(){
        this.scoreNode.active=true;
    }
    onDestroy(){
        // UIViewCtrl.instance=null;
        // this.node.off(Node.EventType.TOUCH_START,this.onTouch.bind(this));
        // this.node.off(Node.EventType.TOUCH_MOVE,this.onTouch.bind(this));
    }
}


