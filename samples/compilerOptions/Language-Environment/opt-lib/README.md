# lib

## 官网翻译
TypeScript 包括内置 JS API (如 Math)的默认类型定义集，以及在浏览器环境(如文档)中找到的内容的类型定义集。TypeScript 还包括与您指定的 target 相匹配的新 JS 特性的 API; 例如，如果目标是 ES6或更新的，那么可以使用 Map 的定义。

您可能会因为以下几个原因而需要更改这些内容:
- 您的程序不在浏览器中运行，所以您不需要“ dom”类型定义
- 运行时平台提供了某些 JavaScript API 对象(可能通过填充) ，但是还不支持给定 ECMAScript 版本的完整语法
- 对于较高级别的 ECMAScript 版本，有一些(但不是全部)填充或本机实现

在 TypeScript 4.5中，lib 文件可以被 npm 模块覆盖，在 [blog](https://devblogs.microsoft.com/typescript/announcing-typescript-4-5-beta/#supporting-lib-from-node_modules) 中可以找到更多信息。


TypeScript 源代码中的[完整 lib 列表](https://github.com/microsoft/TypeScript/tree/main/lib)。