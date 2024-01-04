import { _decorator, Asset, Camera, color, Component, game, instantiate, log, native, Node, Prefab, resources } from 'cc';
import { AssertPath } from './emun/Enum';
import { load } from 'protobufjs';
import { LoadViewCtrl } from './LoadViewCtrl';
import { JSB, NATIVE } from 'cc/env';
const { ccclass, property } = _decorator;

@ccclass('ViewManager')
export class ViewManager extends Component {
    @property(Asset)
    manifestUrl:Asset=null;
    public static instance:ViewManager = null;
    private mapView:Map<string,any>=new Map<string,any>;//
    private mapCtrl:Map<string,any>=new Map<string,any>;//
    private mapPrefab:Map<string,any>=new Map<string,any>;//
    private updateManager:native.AssetsManager=null;
    private cameraNode:Node = null;
    onLoad() {
        if(ViewManager.instance==null)
            ViewManager.instance = this;
        else
            this.destroy();
        this.cameraNode = this.node.getChildByName("Camera")
        if(NATIVE){
            this.initUpdate();
        }
        this.loadView(AssertPath.BG);        
        this.loadView(AssertPath.LOAD,null,null,()=>{
            //本地版本才检查更新
            if(NATIVE){
                let loadCtrl:LoadViewCtrl = ViewManager.instance.getView(AssertPath.LOAD);            
                loadCtrl.setVersion(this.updateManager.getLocalManifest().getVersion())
                this.checkUpdate();                
            }
            else
                this.loadLogin();    
        })
    }
    private initUpdate(){
        let updatePath = native.fileUtils?native.fileUtils.getWritablePath():"/"+"update";
        log("updatePath=",updatePath);
        this.updateManager = new native.AssetsManager("",updatePath,this.versionCompare);
        //设置内容校验函数，暂时没使用，直接return true;
        this.updateManager.setVerifyCallback((path:string,assert:any)=>{
            // log("path=",path,assert);            
            return true;
        });
        //初始化                   
        if(this.updateManager.getState()===native.AssetsManager.State.UNINITED){
            let url = this.manifestUrl.nativeUrl;
            this.updateManager.loadLocalManifest(url);
        }
        //判断是否已经加载本地manifest
        if(!this.updateManager.getLocalManifest()||!this.updateManager.getLocalManifest().isLoaded()){
            log("loadManifest Fail")
            this.loadLogin();//失败直接加载登陆
            return false;
        }        
    }
    private checkUpdate(){  
        //检查更新
        this.updateManager.setEventCallback(this.checkUpdateCallBack.bind(this));
        this.updateManager.checkUpdate();        
    }
    private checkUpdateCallBack(event:native.EventAssetsManager){
        let v = this.updateManager.getLocalManifest().getVersion()
        // log("checkcode=",event.getEventCode(),v)
        // this.updateManager.setEventCallback(null!);
        //有新版本
        if(event.getEventCode()==native.EventAssetsManager.NEW_VERSION_FOUND){
            let loadCtrl:LoadViewCtrl = ViewManager.instance.getView(AssertPath.LOAD);
            this.updateManager.setEventCallback((event:native.EventAssetsManager)=>{    
                if(event.getEventCode()==native.EventAssetsManager.UPDATE_PROGRESSION){
                    let p=event.getPercent();
                    if(!Number.isNaN(p)){                        
                        loadCtrl.setPercent(p);
                    }
                    // log("percent=",p);
                }                        
                else if(event.getEventCode()==native.EventAssetsManager.UPDATE_FINISHED){
                    // log("finished");
                    loadCtrl.setPercent(1);
                    this.reStart();
                }
            });
            this.updateManager.update();
        }
        else if(event.getEventCode()==native.EventAssetsManager.ALREADY_UP_TO_DATE){
            this.loadLogin();
        }
        else if(event.getEventCode()!=native.EventAssetsManager.UPDATE_PROGRESSION){
            this.loadLogin();
        }
    }
    private reStart(){
        this.updateManager.setEventCallback(null!);
        var searchPaths = native.fileUtils.getSearchPaths();
        var newPaths = this.updateManager.getLocalManifest().getSearchPaths();
        log(JSON.stringify(newPaths));
        Array.prototype.unshift.apply(searchPaths, newPaths);
        //保存搜索路径
        localStorage.setItem('HotUpdateSearchPaths', JSON.stringify(searchPaths));
        native.fileUtils.setSearchPaths(searchPaths);
        // restart game.
        setTimeout(() => {
            game.restart();
        }, 1000)
    }
    private versionCompare(versionA:string,versionB:string){
        let result=parseFloat(versionA)-parseFloat(versionB)        
        // log("result=",result,versionA,versionB);
        return result;
    }
    public loadBgAndLogin(){
        let camera = this.cameraNode.getComponent(Camera);
        camera.clearColor=color("808080");

        this.loadView(AssertPath.BG);        
        this.loadView(AssertPath.LOAD,null,null,()=>{
            this.loadLogin();
        })
    }
    private loadLogin(){
        ViewManager.instance.loadView(AssertPath.LOGIN,[AssertPath.LOAD,AssertPath.GAME,AssertPath.UI],(finish,total)=>{
            let loadCtrl:LoadViewCtrl = ViewManager.instance.getView(AssertPath.LOAD);
            loadCtrl.setPercent(finish/total);
        },()=>{
            this.cameraNode.setPosition(0,0);
        });
    }
    public preLoadView(viewName:string,onProgress:((finish:number,total:number)=>void|null),onComplete){
        resources.preload(viewName,onProgress,onComplete);
    }
    //加载View
    public loadView(viewName:string,removeArray?,onProgress?:((finish:number,total:number)=>void|null),onComplete?){
        resources.load("prefabs/"+viewName,onProgress,(err,data:Prefab)=>{
            let mapName=viewName;
            let prefab = instantiate(data);
            try{
                prefab.addComponent(viewName+"Ctrl");
            }
            catch(err){
                // log(err);
            }
            let ctrl = prefab.getComponent(viewName+"Ctrl");
            this.addViewToMap(mapName,prefab,ctrl);
            this.node.addChild(prefab);
            if(onComplete)
                onComplete();
        });
    }
    private addViewToMap(mapName,prefab,ctrl){
        if(ctrl)
            this.mapCtrl.set(mapName,ctrl);
        this.mapView.set(mapName,prefab);
    }
    public destroyView(removeArray){
        let nodeEle:Node,ctrlEle;
        if(!removeArray==false){
            for(let view of removeArray){
                nodeEle = this.mapView.get(view);
                if(nodeEle){                        
                    this.mapView.delete(view);     
                    ctrlEle = this.mapCtrl.get(view);
                    if(ctrlEle){
                        this.mapCtrl.delete(view);
                    }
                    nodeEle.destroy();
                }
            }
        }
    }
    public loadPrefab(prefabName,onProgress?:((finish:number,totao:number)=>void|null),onComplete?){
        resources.load("prefabs/"+prefabName,onProgress,(err,data:Prefab)=>{
            if(err)
                log(err);
            else{
                this.mapPrefab.set(prefabName,data);
                if(onComplete)
                    onComplete();
            }
        });
    }
    public async clonePrefab(prefabName:string,parent?:Node){
        let prefab = this.mapPrefab.get(prefabName);
        let prefabCtrl=null;

        if(prefab){
            let prefabNode = await instantiate(prefab);
            try{
                let ctrlName = prefabName.split('/');            
                prefabCtrl = prefabNode.addComponent(ctrlName[ctrlName.length-1]+"Ctrl");
            }
            catch(err){
                // log(err);
            }  
            let ctrl = prefabNode.getComponent(prefabName+"Ctrl");
            //没有父节点的加到本加点控制
            if(parent==null){
                parent=this.node;
                this.addViewToMap(prefabName,prefabNode,ctrl);
            }
            parent.addChild(prefabNode);
            return [prefabNode,prefabCtrl];
        }
        return null;
    }
    public getVersion(){
        if(NATIVE)
            return this.updateManager.getLocalManifest().getVersion();
        else
            return "1.0.0"
    }
    public getView(viewName){
        return this.mapCtrl.get(viewName);
    }
    public getPrefab(prefabName){
        return this.mapPrefab.get(prefabName);
    }
    public getCamera(){
        return this.cameraNode;
    }
}


