# compilerOptions-jsxImportSource

当使用 jsx 的值为 react-jsx 或 react-jsxdev 时，jsxImportSource 用于指定，声明用于导入 jsx 工厂函数的模块说明符。

例如如果指定为 preact, 则生成的代码为：
```js
"use strict";
exports.__esModule = true;
exports.HelloWorld = void 0;

var jsx_runtime_1 = require("preact/jsx-runtime");
var HelloWorld = function () { return (0, jsx_runtime_1.jsx)("h1", { children: "Hello world" }); };
exports.HelloWorld = HelloWorld;
```