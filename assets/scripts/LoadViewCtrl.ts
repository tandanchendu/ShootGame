import { _decorator, Component, Label, ProgressBar } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('LoadViewCtrl')
export class LoadViewCtrl extends Component {
    private progress:ProgressBar = null;
    private labPercent:Label = null;
    private percentNum:number = 0;
    start() {
        this.progress = this.node.getChildByName("ProgressBar").getComponent(ProgressBar);
        this.labPercent = this.progress.node.getChildByName("LabelPercent").getComponent(Label);    
    }
    public setVersion(version:string){
        let labVersion=this.node.getChildByName("LabelVersion").getComponent(Label)
        labVersion.string = version;        
    }
    public setPercent(percent:number){
        if(percent>this.percentNum)
            this.percentNum=Math.floor(percent*100)/100;
    }
    // public addLoadNum(num){
    //     this.loadNum+=num;
    // }
    // public addTotalNum(num){
    //     this.totalNum+=num;
    // }
    get percent(){
        return this.percentNum;
    }
    private updateProgress(){
        this.labPercent.string = Math.floor(this.percent*100)+"%";
        this.progress.progress = this.percent;
    }
    // private loadLogin(){
    //     // await viewManager.loadView("loginView");        
    //     viewManager.instance.loadView("loginView",["loadView"],null,null,(finish,total)=>{
    //         this.model.total = total;
    //         this.model.loadNum = finish;
    //     });
    //     // this.model.addLoad();
    // }
    update(deltaTime: number) {
        this.updateProgress();
    }
}


