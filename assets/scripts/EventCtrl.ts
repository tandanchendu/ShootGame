import { EventTarget } from "cc";

export class EventCtrl extends EventTarget{
    private static instance:EventCtrl=null;
    
    public static getInstance(){
        if(EventCtrl.instance==null)
            EventCtrl.instance = new EventCtrl();
        return EventCtrl.instance;
    }
    addEvent(type,fun){
        this.on(type,fun);
    }
    removeEvent(type,fun){
        this.off(type,fun);
    }
}