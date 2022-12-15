# Modules - types

## 官网翻译
默认情况下，所有可见的“@type”包都包含在您的编译中。任何封闭文件夹的 node _ module/@type 中的包都被认为是可见的。例如，这意味着，/node _ module/@types/, ../node _ module/@types/, ../../node _ module/@types/等等。

如果指定了类型，则只有列出的包将包含在【全局】范围中, 影响全局类型，不影响正常 @type/*。例如:
```json
{
  "compilerOptions": {
    "types": ["node", "jest", "express"]
  }
}
```
这个 tsconfig.json 文件将只包含 ./node _ module/@types/node、 ./node _ module/@types/jest 和 ./node _ module/@types/Express。 node _ module/@types/* 下的其他包将不包含在内。


这个特性与 typeRoots 的不同之处在于，它只指定您想要包含的确切类型，而 typeRoots 支持说您想要特定的文件夹。
