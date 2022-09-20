
设置为 true，TypeScript 将把源映射内容嵌入到 .js 文件中。

尽管这会导致更大的 JS 文件，但是在某些场景中可能很方便。例如，您可能希望在不允许提供 .map 文件的 Web 服务器上调试 JS 文件。

sourceMap 和 inlineSourceMap 选项只能设置其中一个。


