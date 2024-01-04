export type PlayerAttr={
    heartCount:number,
    protectCount:number,
    bulletCount:number
}
export interface IUIViewCtrl{
    keys:number;
    get playerID();
    set playerID(playerID:number);
    addScore(score:number):void;
    updateView(attr:PlayerAttr):void;
    showGameOver():void;
}