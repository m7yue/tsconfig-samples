
Downleveling 是 TypeScript 的术语，意思是转换到旧版本的 JavaScript。此标志支持更精确地实现现代 JavaScript 如何在旧 JavaScript 运行时中的”迭代“新概念。

ECMAScript 6添加了几个新的迭代原语: for/of 循环(for (el of arr))、 Array spread ([ a，... b ])、argument spread (fn (... args))和 Symbol.iterator。

DownlevelIteration 允许在 ES5环境中更准确地使用这些迭代原语，如果有 Symbol.iterator 实现的话。如果缺少此实现，您将回到基于索引的迭代。

下面的代码
```ts
const str = "Hello!";
for (const s of str) {
  console.log(s);
}
```

如果没有启用 downlevelIteration，任何对象上的 for/of 循环都会降级为传统的 for 循环:
```js
"use strict";
var str = "Hello!";
for (var _i = 0, str_1 = str; _i < str_1.length; _i++) {
    var s = str_1[_i];
    console.log(s);
}
```
这通常是人们所期望的，但它不是100% 符合 ECMAScript 迭代协议。[例如表情长度](https://blog.jonnew.com/posts/poo-dot-length-equals-two)


相关链接：
https://www.typescriptlang.org/tsconfig#downlevelIteration