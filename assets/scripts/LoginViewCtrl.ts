import { _decorator, Component, log, Node, profiler } from 'cc';
import { ViewManager } from './ViewManager';
import { SocketManager } from './network/SocketManager'
// import { LoginGameMsg } from './network/game/GameMsg';
// import { ClientMsg } from './network/ClientMsg';
import { AssertPath } from './emun/Enum';
import proto from './msg/ServerProto.js';
import { LoadViewCtrl } from './LoadViewCtrl';
import { NATIVE } from 'cc/env';
const { ccclass, property } = _decorator;

interface percentAttr{
    finish:number,
    total:number
}
@ccclass('LoginViewCtrl')
export class LoginViewCtrl extends Component {
    private loadPercent:Array<percentAttr>=[];
    private loadCount=0;
    private finishCount=0;
    private bTouch = false;
    private btnTopName=[
        ["setting",this.onSetting],
        ["demos",this.onDemos],
        ["editor",this.onEditor],
        ["play",this.onPlay.bind(this)]
    ];
    private btnBottomName=[
        ["quit",this.onQuit]
    ];
    start() {
        if(NATIVE){
            let test=new test_space.Test();
            test.print();
            log(test.publicFloatProperty);
            console.log(test.publicFloatProperty);
            test.callMethod();
        }

        ViewManager.instance.destroyView([AssertPath.LOAD,AssertPath.GAME,AssertPath.UI]);
        let btnNode;
        for(let btnInfo of this.btnTopName){
            btnNode = this.node.getChildByPath("SpriteTop/"+btnInfo[0]+"/btn");
            btnNode.on(Node.EventType.TOUCH_START,btnInfo[1]);
        }
        for(let btnInfo of this.btnBottomName){
            btnNode = this.node.getChildByPath("SpriteBottom/"+btnInfo[0]+"/btn");
            btnNode.on(Node.EventType.TOUCH_START,btnInfo[1]);
        }
        // this.addCallBackMap();
    }
    private onSetting(){        
        profiler.showStats();
    }
    private onDemos(){
        profiler.hideStats();
    }
    private onEditor(){

    }

    private onPlay(){     
        // clientMsg.getInstance<clientMsg>().sendLogin();
        if(this.bTouch==false){
            this.bTouch=true;
            ViewManager.instance.loadView(AssertPath.LOAD,null,null,()=>{
                this.node.active=false;
                this.preLoadGame();
                let loadCtrl:LoadViewCtrl = ViewManager.instance.getView(AssertPath.LOAD);            
                loadCtrl.setVersion(ViewManager.instance.getVersion());
                loadCtrl.setPercent(0);
            })            
        }
        // ViewManager.instance.loadView("serverListView");
    }
    private preLoadGame(){
        this.preLoadView(AssertPath.GAME,this.loadCount);
        // this.preLoadView(AssertPath.UI,this.loadCount);
        this.loadPrefab(AssertPath.UI,this.loadCount);
        this.loadPrefab(AssertPath.PLAYER,this.loadCount);
        this.loadPrefab(AssertPath.BULLET,this.loadCount);
        this.loadPrefab(AssertPath.PROP_HEART,this.loadCount);  
        this.loadPrefab(AssertPath.PROP_PROTECT,this.loadCount);   
        this.loadPrefab(AssertPath.PROP_BULLET,this.loadCount);
        this.loadPrefab(AssertPath.PROP_MAPHEART,this.loadCount);  
        this.loadPrefab(AssertPath.PROP_MAPPROTECT,this.loadCount); 
        this.loadPrefab(AssertPath.PROP_NINJA,this.loadCount);
        // this.loadPrefab(AssertPath.SCORE_VIEW,this.loadCount);
    }
    private preLoadView(name,tag){
        this.loadCount++;
        this.loadPercent[tag]={
            finish:0,
            total:0
        }
        console.time("preload")
        ViewManager.instance.preLoadView(name,(finish,total)=>{
            this.loadPercent[tag].finish=finish;
            this.loadPercent[tag].total=total;
            this.updatePercent();
        },()=>{
            console.timeEnd("preload")
            this.loadPercent[tag].finish=1;
            this.loadPercent[tag].total=1;
            this.updatePercent(true);
        });
    }
    private loadPrefab(name,tag){
        this.loadCount++;
        this.loadPercent[tag]={
            finish:0,
            total:0
        }
        ViewManager.instance.loadPrefab(name,(finish,total)=>{
            this.loadPercent[tag].finish=finish;
            this.loadPercent[tag].total=total;
            this.updatePercent();       
        },()=>{
            this.loadPercent[tag].finish=1;
            this.loadPercent[tag].total=1;
            this.updatePercent(true);
        });
    }
    private updatePercent(bComplete?){
        let loadCtrl:LoadViewCtrl = ViewManager.instance.getView(AssertPath.LOAD);
        let totalNum=0;
        let finishNum=0;
        
        for(let p of this.loadPercent.values()){
            totalNum+=p.total;
            finishNum+=p.finish;
        }
        if(bComplete==true)
            this.finishCount++;
        if(totalNum!=0)
            loadCtrl.setPercent(finishNum/totalNum);
        if(this.finishCount==this.loadCount){
            this.bTouch=true;
            console.time("loadgame")
            ViewManager.instance.loadView(AssertPath.GAME,null,null,()=>{
                console.timeEnd("loadgame")
            })
        }
    }
    private onQuit(){
    }
//     private onLogin(login){
//         clientMsg.getInstance<clientMsg>().onLogin(login);
//         if(this.bTouch==false){
//             this.bTouch=true;
//             ViewManager.instance.loadView(AssertPath.GAME,[AssertPath.BG,AssertPath.LOGIN],null,()=>{
//                 this.bTouch=false;
//             });
//         }
// //       ViewManager.instance.loadView("serverListView");
//     }
    // private onPlayerInfo(player){
    //     clientMsg.getInstance<clientMsg>().onPlayerInfo(player)
    // }
    onDestroy(){
        // let btnNode;
        // for(let btnInfo of this.btnTopName){
        //     btnNode = this.node.getChildByPath("SpriteTop/"+btnInfo[0]+"/btn");
        //     btnNode.off(Node.EventType.TOUCH_START,btnInfo[1]);
        // }
        // this.removeCallBackMap();
    }
    // public addCallBackMap(){
    //     socketManager.getInstance<socketManager>().addGameMap(proto.serverProto.MSG.PLAYER_INFO,this.onPlayerInfo.bind(this));
    //     socketManager.getInstance<socketManager>().addGameMap(proto.serverProto.MSG.LOGIN_INFO,this.onLogin.bind(this));
    // }
    // public removeCallBackMap(){
    //     socketManager.getInstance<socketManager>().addGameMap(proto.serverProto.MSG.PLAYER_INFO,this.onPlayerInfo.bind(this));
    //     socketManager.getInstance<socketManager>().removeGameMap(proto.serverProto.MSG.LOGIN_INFO,this.onLogin.bind(this));
    // }
}


