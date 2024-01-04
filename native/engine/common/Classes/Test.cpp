#include "Test.h"
using namespace cc;
namespace test_space{
Test::Test(){
#if (CC_PLATFORM == CC_PLAYFORM_ANDROID)
    jobject obj = JniHelper::newObject("com/cocos/game/testClassName");
    _obj = JniHelper::getEnv()->NewGlobalRef(obj);
    ccDeleteLocalRef(JniHelper::getEnv(), obj);
#endif
}
Test::~Test(){
#if (CC_PLATFORM == CC_PLAYFORM_ANDROID)
    JniHelper::getEnv()->DeleteGlobalRef(_obj);
#endif
}
void Test::print(){
    CC_LOG_INFO("a=%d,b=%d", _a, (int)_b);
}

void Test::callMethod() {
#if (CC_PLATFORM == CC_PLAYFORM_ANDROID)
        JniEnv *env= JniHelper::getEnv();
        JniMethodInfo methodInfo;        
        //主类方法调用
        long l=JniHelper::callObjectLongMethod(_obj,"com/cocos/game/testClassName", "testJaveMethod1", "(Ljava/lang/String;)J");
        CC_LOG_INFO("l=====%ld",l);
        
        float f=JniHelper::callObjectFloatMethod(_obj,"com/cocos/game/testClassName", "testJaveMethod2", 1,2);
        CC_LOG_INFO("f=====%f",f);        

        //静态方法调
        unsigned char ac[]={1,2,3,4,8};
        const jbyte *aj=(jbyte*)ac;        
        jbyteArray aArray;
        aArray=env->NewByteArray(5);
        env->SetByteArrayRegion(aArray,0,5,aj);
        int a=JniHelper::callStaticIntMethod("com/cocos/game/testClassName", "testJaveMethod3", aArray);        
        ccDeleteLocalRef(env,aArray);
        CC_LOG_INFO("a=====%d",a);

        jbyte bj[]={12,2,13,4,38};
        jbyteArray bArray=env->NewByteArray(5);
        env->SetByteArrayRegion(bArray,0,5,bj);
        ccstd::string s = JniHelper::callStaticStringMethod("com/cocos/game/testClassName", "testJaveMethod4", bArray);
        ccDeleteLocalRef(env,bArray);
        CC_LOG_INFO("s=====%s",s.c_str());
#endif
}
}