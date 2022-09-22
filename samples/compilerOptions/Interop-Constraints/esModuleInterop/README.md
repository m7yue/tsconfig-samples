esModuleInterop 默认值为 false. 

默认场景下， TypeScript 对待 CommonJS/AMD/UMD 和 ESM 模块一致。但这可能带来问题：
1. 对于命名空间导入像 import * as moment from "moment" 处理为 const moment = require("moment")

2. 对于默认导入像 import moment from "moment" 处理为 const moment = require("moment").default

- ES6 标准规定 命名空间导入 (import * as x) 只能是一个对象，这就导致处理为像  const moment = require("moment") 导入的可能是一个函数。这在规定中是无效的。
- 虽然符合 ES6 模块规范，但大多数具有 CommonJS/AMD/UMD 模块的库并不像 TypeScript 的实现那样严格。

开启 esModuleInterop 可以在编译输出阶段解决这些问题。 主要是提供一些辅助工具函数，__createBinding， __importStar， __importDefault，__setModuleDefault 等

```js
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));

var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});

/**
 * import * as fullObject from 'xxx.lib'
 * 
 * 1. 如果 xxx.lib 是一个 esm 规范的包，直接返回 require 结果。
 * 2. 如果 xxx.lib 是一个 commonjs 规范的包：
 *    会遍历 所有导出属性并赋值（遍历用的 for in）给 result     
 *    最后会自动包装一个 default 属性，值是导出的所有属性。result['default'] = mod
 */
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for (var k in mod){
            if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) {
                __createBinding(result, mod, k);
            }
        }
    }
    __setModuleDefault(result, mod);

    return result;
};

/**
 * import Object from 'xxx.lib'
 * 
 * 1. 如果 xxx.lib 是一个 esm 规范的包，直接返回 require 结果。
 * 2. 如果 xxx.lib 是一个 commonjs 规范的包，则会自动包装一个 default 属性。
 * 这样能够获取正确的结果
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
```

开启 esModuleInterop 也会自动开启  allowSyntheticDefaultImports

https://juejin.cn/post/7033392392866955278
