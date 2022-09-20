
指定调试器应该定位 指定地址的映射文件 而不是生成的位置。

```json
{
  "compilerOptions": {
    "sourceMap": true,
    "mapRoot": "https://my-website.com/debug/sourcemaps/"
  }
}
```
将声明 index.js 的 sourceMappingURL 指向 https://my-website.com/debug/sourcemaps/index.js.map

```js
"use strict";
exports.__esModule = true;
exports.helloWorld = void 0;
exports.helloWorld = "hi";
//# sourceMappingURL=https://my-website.com/debug/sourcemaps/index.js.map
```
