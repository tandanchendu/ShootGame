import { Vec2, _decorator } from 'cc';
import { PropCtrl } from '../baseClass/PropCtrl';
const { ccclass, property } = _decorator;

@ccclass('NinjaCtrl')
export class NinjaCtrl extends PropCtrl {
    protected birthTime=15;
    public initInfo(pos:Vec2){
        super.initInfo(pos);
        this.node.setPosition(pos.x+1500,pos.y-1800); 
    }
}


