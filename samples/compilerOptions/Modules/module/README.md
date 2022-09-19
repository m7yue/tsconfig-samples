# compilerOptions-module

## node16/nodenext
兼容了 import default 的问题， 对比看来 CommonJs 的输出是有问题的。
```js
"use strict";
exports.__esModule = true;
exports.runner = void 0;
var react_1 = require("react");
var runner = function () {
    console.log(react_1["default"]); // 这里 react_1 没有 default 属性
};
exports.runner = runner;
exports["default"] = (function () {
    console.log('i‘m default!');
});
```


https://www.typescriptlang.org/docs/handbook/esm-node.html