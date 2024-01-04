// clang-format off

/* ----------------------------------------------------------------------------
 * This file was automatically generated by SWIG (https://www.swig.org).
 * Version 4.1.0
 *
 * Do not make changes to this file unless you know what you are doing - modify
 * the SWIG interface file instead.
 * ----------------------------------------------------------------------------- */

/****************************************************************************
 Copyright (c) 2022-2023 Xiamen Yaji Software Co., Ltd.

 http://www.cocos.com

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights to
 use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
 of the Software, and to permit persons to whom the Software is furnished to do so,
 subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
****************************************************************************/

#if defined(__clang__)
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wunused-variable"
#elif defined(__GNUC__) || defined(__GNUG__)
#pragma GCC diagnostic push
#pragma GCC diagnostic ignored "-Wunused-variable"
#elif defined(_MSC_VER)
#pragma warning(push)
#pragma warning(disable : 4101)
#endif


#define SWIG_STD_MOVE(OBJ) std::move(OBJ)


#include <stdio.h>


#include "bindings/jswrapper/SeApi.h"
#include "bindings/manual/jsb_conversions.h"
#include "bindings/manual/jsb_global.h"


#include "bindings/auto/jsb_test_module_auto.h"



se::Class* __jsb_test_space_Test_class = nullptr;
se::Object* __jsb_test_space_Test_proto = nullptr;
SE_DECLARE_FINALIZE_FUNC(js_delete_test_space_Test) 

static bool js_new_test_space_Test(se::State& s) // NOLINT(readability-identifier-naming)
{
    CC_UNUSED bool ok = true;
    const auto& args = s.args();
    size_t argc = args.size();
    
    test_space::Test *result;
    result = (test_space::Test *)new test_space::Test();
    
    
    auto *ptr = JSB_MAKE_PRIVATE_OBJECT_WITH_INSTANCE(result);
    s.thisObject()->setPrivateObject(ptr);
    return true;
}
SE_BIND_CTOR(js_new_test_space_Test, __jsb_test_space_Test_class, js_delete_test_space_Test)

static bool js_delete_test_space_Test(se::State& s)
{
    return true;
}
SE_BIND_FINALIZE_FUNC(js_delete_test_space_Test) 

static bool js_test_space_Test_print(se::State& s)
{
    CC_UNUSED bool ok = true;
    const auto& args = s.args();
    size_t argc = args.size();
    test_space::Test *arg1 = (test_space::Test *) NULL ;
    
    if(argc != 0) {
        SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int)argc, 0);
        return false;
    }
    arg1 = SE_THIS_OBJECT<test_space::Test>(s);
    if (nullptr == arg1) return true;
    (arg1)->print();
    
    
    return true;
}
SE_BIND_FUNC(js_test_space_Test_print) 

static bool js_test_space_Test_callMethod(se::State& s)
{
    CC_UNUSED bool ok = true;
    const auto& args = s.args();
    size_t argc = args.size();
    test_space::Test *arg1 = (test_space::Test *) NULL ;
    
    if(argc != 0) {
        SE_REPORT_ERROR("wrong number of arguments: %d, was expecting %d", (int)argc, 0);
        return false;
    }
    arg1 = SE_THIS_OBJECT<test_space::Test>(s);
    if (nullptr == arg1) return true;
    (arg1)->callMethod();
    
    
    return true;
}
SE_BIND_FUNC(js_test_space_Test_callMethod) 

static bool js_test_space_Test_publicFloatProperty_set(se::State& s)
{
    CC_UNUSED bool ok = true;
    const auto& args = s.args();
    size_t argc = args.size();
    test_space::Test *arg1 = (test_space::Test *) NULL ;
    
    arg1 = SE_THIS_OBJECT<test_space::Test>(s);
    if (nullptr == arg1) return true;
    
    ok &= sevalue_to_native(args[0], &arg1->publicFloatProperty, s.thisObject());
    SE_PRECONDITION2(ok, false, "Error processing arguments"); 
    
    
    return true;
}
SE_BIND_PROP_SET(js_test_space_Test_publicFloatProperty_set) 

static bool js_test_space_Test_publicFloatProperty_get(se::State& s)
{
    CC_UNUSED bool ok = true;
    test_space::Test *arg1 = (test_space::Test *) NULL ;
    
    arg1 = SE_THIS_OBJECT<test_space::Test>(s);
    if (nullptr == arg1) return true;
    
    ok &= nativevalue_to_se(arg1->publicFloatProperty, s.rval(), s.thisObject()); 
    
    
    return true;
}
SE_BIND_PROP_GET(js_test_space_Test_publicFloatProperty_get) 

bool js_register_test_space_Test(se::Object* obj) {
    auto* cls = se::Class::create("Test", obj, nullptr, _SE(js_new_test_space_Test)); 
    
    cls->defineStaticProperty("__isJSB", se::Value(true), se::PropertyAttribute::READ_ONLY | se::PropertyAttribute::DONT_ENUM | se::PropertyAttribute::DONT_DELETE);
    cls->defineProperty("publicFloatProperty", _SE(js_test_space_Test_publicFloatProperty_get), _SE(js_test_space_Test_publicFloatProperty_set)); 
    
    cls->defineFunction("print", _SE(js_test_space_Test_print)); 
    cls->defineFunction("callMethod", _SE(js_test_space_Test_callMethod)); 
    
    
    
    
    cls->defineFinalizeFunction(_SE(js_delete_test_space_Test));
    
    
    cls->install();
    JSBClassType::registerClass<test_space::Test>(cls);
    
    __jsb_test_space_Test_proto = cls->getProto();
    __jsb_test_space_Test_class = cls;
    se::ScriptEngine::getInstance()->clearException();
    return true;
}




bool register_all_test_module(se::Object* obj) {
    // Get the ns
    se::Value nsVal;
    if (!obj->getProperty("test_space", &nsVal, true))
    {
        se::HandleObject jsobj(se::Object::createPlainObject());
        nsVal.setObject(jsobj);
        obj->setProperty("test_space", nsVal);
    }
    se::Object* ns = nsVal.toObject();
    /* Register classes */
    js_register_test_space_Test(ns); 
    
    /* Register global variables & global functions */
    
    
    
    return true;
}


#if defined(__clang__)
#pragma clang diagnostic pop
#elif defined(__GNUC__) || defined(__GNUG__)
#pragma GCC diagnostic pop
#elif defined(_MSC_VER)
#pragma warning(pop)
#endif
// clang-format on
