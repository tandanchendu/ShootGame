import { Vec2 } from "cc";
import proto from "../msg/ServerProto.js"

export function getRotate(rotate){
    // let rotate=Math.atan2(end.y-start.y,end.x-start.x);
    while(1){
        if(rotate>=180)
            rotate-=360;
        else if(rotate<-180){
            rotate+=360;
        }
        else
            return rotate;
    }
}
export function decodeHead(data){
    return proto.serverProto.headInfo.decode(data);
}
export function encodeHead(typeName){
    return proto.serverProto.headInfo.encode({
        type:typeName
    }).finish();
}
