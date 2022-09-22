虽然您可以使用 TypeScript 从 TypeScript 代码生成 JavaScript 代码，但使用诸如 Babel 之类的其他传译器也是很常见的。
但是，其他构建程序一次只对一个文件进行操作，这意味着它们不能应用依赖于理解完整类型系统的代码转换。
此限制也适用于某些使用 TypeScript 的 ts.transileModule.API 的构建工具。

这些限制可能会导致一些 TypeScript 特性(如常量枚举和名称空间)的运行时问题。
如果您编写的某些代码无法由单文件翻译过程正确解释，那么设置 isolatedModules 标志将告诉 TypeScript 发出警告。

它不更改代码的行为，也不更改 TypeScript 的类型检查和编译输出进程的行为。

如果 isolatedModules 设为 true（默认为 false）, 则直接导出导入的类型会在编译阶段报错，因为 Typescript 不知道导出的是值还是类型，需要通过 import type 语法明确指定。


如果设置了 isolatedModules，则所有实现文件都必须是模块(这意味着它具有某种形式的 import/export)。如果有任何文件不是模块，则会发生错误.

对于 const enum, 由于其他编译器不能替换 enum 映射到数值，这会产生运行时的问题，所以也会报错。