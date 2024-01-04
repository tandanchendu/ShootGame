import os
import subprocess
updatePath="E:\\workspace\web\\testUpdate\hotUpdate"
#版本号，要热更修改这个大版本号后运行就重新编译并拷贝热更到热更目录
updateVersion="1.0.0"
updateUrl="http://192.168.0.11:8080/hotUpdate/"
root=os.getcwd()
bBuildAndroid=True
bBuildWindows=False
bBuildWeb=True
bPack=True
bUpdate=True
configPath=""
platForm=""

def build(configPath,platForm,needUpdate):
    #CocosCreator.exe要加到环境变量，或者用全路径
    os.chdir(root+"//build")
    #编译
    subprocess.call(f"CocosCreator.exe --project ../ --build configPath={configPath}")
    
    #混淆
    assetsPath=f"{platForm}\\assets";
    if platForm=="android":
        assetsPath=f"{platForm}\\data";
    if platForm=="web-desktop":
        os.system(f"javascript-obfuscator {platForm}\\index.js --output {platForm}\\index.js --config mixConfig.json")
        os.system(f"javascript-obfuscator {platForm}\\assets\\main\\index.js --output {platForm}\\assets\\main\\index.js --config mixConfig.json")
    if needUpdate:
        os.system(f"rd {updatePath}\\{platForm} /S /Q")
        os.system(f"mkdir {updatePath}\\{platForm}")
        #拷贝到本地热更路径
        os.system(f"robocopy {assetsPath} {updatePath}/{platForm} /E")
        os.chdir(root)
        #生成manifest
        os.system(f"node updateVersion/version_generator.js -v {updateVersion} -u {updateUrl}/{platForm}/ -s build/{assetsPath} -d updateVersion/")
        #拷贝manifest到热更目录
        os.system(f"copy updateVersion\\project.manifest {updatePath}\\{platForm} /Y")
        os.system(f"copy updateVersion\\version.manifest {updatePath}\\{platForm} /Y")
#打包生成最新manifest
if bUpdate:
    if bBuildAndroid:
        configPath="buildConfig_android.json"
        platForm="android"  
        build(configPath,platForm,True)  
    if bBuildWindows:
        configPath="buildConfig_windows.json"
        platForm="windows"
        build(configPath,platForm,True)

    #拷贝manifest到资源目录
    os.system(f"copy updateVersion\\project.manifest assets /Y")
    os.system(f"copy updateVersion\\version.manifest assets /Y")  

#打包的话再build一遍，确保manifest最新
if bPack:
    if bBuildAndroid:
        configPath="buildConfig_android.json"
        platForm="android"  
        build(configPath,platForm,True)  
    if bBuildWindows:
        configPath="buildConfig_windows.json"
        platForm="windows" 
        build(configPath,platForm,True)  
    if bBuildWeb:
        configPath="buildConfig_web-desktop.json"
        platForm="web-desktop"
        build(configPath,platForm,False)        



