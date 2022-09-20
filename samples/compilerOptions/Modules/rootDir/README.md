# Modules-rootDir


当 TypeScript 编译文件时，它在输出目录中保持与输入目录（rootDir)中相同的目录结构。即 rootDir 会影响输出目录结构

默认值是所有输入文件的公共最长路径，但不包含声明文件（.d.ts）.例如本例根目录是 src, 即便和 src 同级还有 index.d.ts. 输出文件是以 src 为根目录的所有文件。但如果把 index.d.ts 换成 index.ts，则输出文件就变成了以 rootDir 为根目录的所有文件。

如果 composite 设为 true， 则根目录默认为 tsconfig.json 文件所在目录。除非明确指定了 outDir 选项。

重要的是，rootDir 不会影响哪些文件成为编译的一部分。它与 include、exclude 的设置没有相互作用。

注意，TypeScript 永远不会将输出文件写入 outDir 之外的目录，也永远不会跳过发送某个文件。由于这个原因，rootDir 还强制所有需要发出的文件都位于 rootDir 路径的下面。例如，如果将 rootDir 设为 "./src/module-b", 则编译会报错提示 module-a.ts 不在 rootDir 包含的目录中。除非将 include 选项设为 rootDir 或子集目录。换句话说，rootDir 的设定的目录，必定是包含 include 和 exclude 作用后所有输入目录的公共父级目录。