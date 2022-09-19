# Modules-baseUrl

- 允许您设置基目录以解析非绝对模块名称。
- 相对路径的模块不受 baseUrl 值的影响.
- 但这只是解决了类型层面模块解析问题，构建产物路径的正确性需要通过构建工具保证。

参考链接：
https://www.typescriptlang.org/docs/handbook/module-resolution.html#base-url