%module(target_namespace="test_space") test_module
%insert(header_file) %{
#pragma once
#include "bindings/jswrapper/SeApi.h"
#include "bindings/manual/jsb_conversions.h"
#include "Test.h"
%}
%{
#include "bindings/auto/jsb_test_module_auto.h"
%}
%include "Test.h"