# CompilerOptions-Projects-composite

## 官网翻译
若启用composite标记：
- 对于rootDir设置，如果没有被显式指定，默认为包含tsconfig.json文件对应的目录
- 所有的实现文件必须匹配到某个include模式或在files数组里列出。如果违反了这个限制，tsc会提示你哪些文件未指定。
- 默认开启declaration选项。
- 必须开启增量编译（incremental 为 true，即不能设为 false）