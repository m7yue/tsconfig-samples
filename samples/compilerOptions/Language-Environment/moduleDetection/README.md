# compilerOptions - moduleDetection

## 官网翻译
- auto(默认值)： TypeScript 不仅会查找 import 和 export语句。当运行设置 module 为 nodenext 或 node16 时，还会检查 package.json 中的 “type” 字段是否为 ”module“，并且在 jsx 值为 react-jsx 检查当前文件是否为 JSX 文件。

- legacy：与4.6及以前版本相同的行为，使用导入和导出语句来确定文件是否是模块。

- force：确保将每个非声明文件作为模块处理。  即便是 commonjs 模块，也不会报错

相关参考链接：
- https://devblogs.microsoft.com/typescript/announcing-typescript-4-7/#esm-nodejs