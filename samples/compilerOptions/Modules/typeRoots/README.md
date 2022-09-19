# Modules - typeRoots

## 官网翻译
默认情况下，所有可见的“@type”包都包含在您的编译中。任何封闭文件夹的 node _ module/@type 中的包都被认为是可见的。例如，这意味着，/node _ module/@types/, ../node _ module/@types/, ../../node _ module/@types/等等。

如果指定了 typeRoots，则只包含 typeRoots 下的包。例如:
```json
{
  "compilerOptions": {
    "typeRoots": ["./typings", "./vendor/types"]
  }
}
```


只对通过 npm 安装的声明模块有效(即包含 package.json)，用户自定义的类型声明文件与它们没有任何关系。
声明模块通常会包含一个 index.d.ts 文件，或者其 package.json 设置了 types 字段。


此配置文件将包括./typings， ./vendor/types 下的所有包。并且不包含。/node _ module/@type. 所有路径都是相对于 tsconfig.json 的。
