
Downleveling 是 TypeScript 的术语，意思是转换到旧版本的 JavaScript。此标志支持更精确地实现现代 JavaScript 如何在旧 JavaScript 运行时中的”迭代“新概念。

ECMAScript 6添加了几个新的迭代原语: for/of 循环(for (el of arr))、 Array spread ([ a，... b ])、argument spread (fn (... args))和 Symbol.iterator。

DownlevelIteration 允许在 ES5环境中更准确地使用这些迭代原语，如果有 Symbol.iterator 实现的话。


相关链接：
https://www.typescriptlang.org/tsconfig#downlevelIteration