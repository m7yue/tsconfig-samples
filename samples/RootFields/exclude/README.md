
指定在解析 include 时应跳过的文件名或模式的数组。

重要提示: 仅排除由于 include 设置而包含的文件的更改。但是如果被排除的文件有被引用，则被导入引用的文件依然会包括在内。


它不是一种阻止文件被包含在代码库中的机制——它只是更改 include 设置找到的内容

include 和 exclude 支持 glob 模式匹配：
- * : 匹配零个或多个字符(不包括目录分隔符)

- ？: 匹配任何一个字符(不包括目录分隔符)

- **/ : 匹配嵌套到任何级别的任何目录

如果通配符模式不包含文件扩展名, 那么默认匹配以下扩展名：.ts, .tsx, .d.ts, 如果 allowJs 为 true 的话， 还会匹配 .js, .jsx