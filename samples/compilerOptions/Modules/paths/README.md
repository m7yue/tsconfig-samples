# Module-paths

- 模块解析路径映射，以支持类似一些 loader 的路径别名。
- 请注意，paths 是相对于 baseUrl 解析的。即以 baseUrl 为基准路径。

使用 paths 还允许更复杂的映射，包括多个 fall back 位置。考虑一个项目配置，其中一个位置只有一些模块可用，其余的在另一个位置。构建步骤将把它们放在一个地方。项目布局可能是这样的:
```
projectRoot
├── folder1
│   ├── file1.ts (imports 'folder1/file2' and 'folder2/file3')
│   └── file2.ts
├── generated
│   ├── folder1
│   └── folder2
│       └── file3.ts
└── tsconfig.json
```
相应的 tsconfig.json 类似于:
```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "*": ["*", "generated/*"]
    }
  }
}
```
这告诉编译器，任何与模式“ *”(即所有值)匹配的模块导入都要查看两个位置:
- '*': 表示相同的名称未改变，因此 < moduleName > => < baseUrl >/< moduleName >
- 'generated/*': 意味着模块名称的前缀为 “generated”，因此 < moduleName > => < baseUrl >/generated/< moduleName >

如果是  `import 'folder1/file2'`
1. 匹配 * 规则，通配符捕获整个模块名。
2. 尝试列表中的第一个替换: ’*’ -> folder1/file2，替换的结果是非相对名称-将其与 baseUrl-> projectRoot/folder1/file2.ts 组合。
3. 文件存在，完成。

如果是  `import ‘folder2/file3’`
1. 匹配 * 规则，通配符捕获整个模块名。
2. 尝试列表中的第一个替换:’*’-> folder2/file3
3. 替换的结果是非相对名称-将其与 baseUrl-> projectRoot/folder2/file3.ts 组合。
4. 文件不存在，尝试第二个替换
5. 第二个替换‘ generated/*’-> generated/folder2/file3
6. 替换的结果是非相对名称-将其与 baseUrl-> projectRoot/generated/folder2/file3.ts 组合。
7. 文件存在，完成。

同样的，构建输出的代码需要结合构建工具支持。构建产物路径的正确性需要通过构建工具保证。

参考链接：
- https://www.typescriptlang.org/docs/handbook/module-resolution.html#path-mapping