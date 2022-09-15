# CompilerOptions-Projects-tsBuildInfoFile

## 官网翻译
此设置允许指定一个文件，用于将增量编译信息存储为组合项目的一部分，从而能够更快地构建更大的 TypeScript 代码库。

这个选项提供了一种方法来配置 TypeScript 保持跟踪其存储在磁盘上的文件的位置，以指示项目的构建状态ーー默认情况下，这些文件与发出的 JavaScript 位于同一个文件夹中。如果该选项设为 true， 则默认位置不会再生成文件。