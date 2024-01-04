#pragma once
#include "cocos/cocos.h"
#if (CC_PLATFORM == CC_PLAYFORM_ANDROID)
#include "platform/java/jni/JniHelper.h"
#endif
namespace test_space{
class Test{
public:
    Test();
    virtual ~Test();
    void print();      
    void callMethod();
    float publicFloatProperty{0.5f};
private:
#if (CC_PLATFORM == CC_PLAYFORM_ANDROID)
    jobject _obj;
#endif
    int _a{100};
    bool _b{true};
};
}