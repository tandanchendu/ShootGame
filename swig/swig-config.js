"use strict"
const path = require("path")
const fs=require('fs')
//必选,使用相对目录/绝对路径
const configList = [
    ['test.i','jsb_test_module_auto.cpp']
]
const projectRoot = path.resolve(path.join(__dirname,'..'));
const interfacesDir = path.join(projectRoot,'swig');
//目录没有的话要手动创建下
const bindingsOutDir = path.join(projectRoot,'native','engine','common','Classes','bindings','auto');
const includeDirs = [
    path.join(projectRoot,'native','engine','common','Classes')
];
console.log("interfacesDir",interfacesDir)
module.exports = {
    interfacesDir,
    bindingsOutDir,
    includeDirs,
    configList
};