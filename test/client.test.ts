import { ClientMsg } from "../assets/scripts/network/ClientMsg";
import proto from "../server/serverProto.js";
import serverMsg from "../server/serverMsg.js"
import { decodeHead, encodeHead, getRotate } from "../assets/scripts/common/Utils";
test("testLogin",()=>{
    let sendData = encodeHead(proto.serverProto.MSG.LOGIN_INFO);
    let decodeData = decodeHead(sendData);
    expect(decodeData.type).toBe(proto.serverProto.MSG.LOGIN_INFO);

    let randTest=[0,1,100,19999,20000]
    let recvData:Uint8Array;
    let login,login1;
    let loginInfo;

    for(let i=0;i<16;++i){
        for(let rand of randTest){
            loginInfo = {
                info:{
                    playerID:i,
                    heartCount:10,
                    protectCount:10,
                    bulletCount:10,            
                    randNum:rand
                },
                mapName:"dm1"
            }
            recvData = serverMsg.getLoginInfo(loginInfo);
            let decodeData:Uint8Array = new Uint8Array(recvData.buffer,2);
            let decodeData1:Uint8Array = recvData.slice(2);
            login= proto.serverProto.loginInfo.decode(decodeData);
            login1= proto.serverProto.loginInfo.decode(decodeData1);            
            expect(login).toEqual(loginInfo);
            expect(login1).toEqual(loginInfo);

        }
    }
})
test("testInputInfo",()=>{
    const inputData ={
        key:0,
        frameID:0,
        playerID:0        
    }
    let buffer = ClientMsg.getInstance<ClientMsg>().sendInput(inputData).slice(2);
    let decodeInput = serverMsg.decodeInputInfo(buffer);
    console.log(decodeInput);
    expect(decodeInput).toEqual(inputData);

    let inputArray={
        input:[]
    }
    for(let i=0;i<5;++i){
        inputArray.input.push(inputData);
    }
    let bufferArray = serverMsg.encodeInputArray(inputArray);
    let decodeData:Uint8Array = new Uint8Array(bufferArray.buffer,2);
    let decodeData1:Uint8Array = bufferArray.slice(2);
    let decodeBuffer = ClientMsg.getInstance<ClientMsg>().onInputArray(decodeData);
    let decodeBuffer1 = ClientMsg.getInstance<ClientMsg>().onInputArray(decodeData1);    
    expect(decodeBuffer).toEqual(inputArray);
    expect(decodeBuffer1).toEqual(inputArray);
})
test("testRotate",()=>{
    let r1 = [0,1/4,1/2,3/4,-1,-3/4,-1/2,-1/4]
    let r2 = [0,-1/4,-1/2,-3/4,-1,3/4,1/2,1/4]

    for(let i=0;i<50;++i){
        let ret1 = getRotate(i*180/4);
        let ret2 = getRotate(-i*180/4);
        expect(ret1).toBeCloseTo(r1[i%8]*180,0.001);
        expect(ret2).toBeCloseTo(r2[i%8]*180,0.001);
    }
})