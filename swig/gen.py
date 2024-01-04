import os
def gen():
    path=os.getcwd()+"/swig";
    print(f"path={path}");
    os.chdir(path);
    os.system("node D:\\ProgramData\\cocos\\editors\\Creator\\3.8.0\\resources\\resources\\3d\\engine\\native\\tools\\swig-config\\genbindings.js -c swig-config.js");

def main():
    gen();
if __name__=="__main__":
    main();