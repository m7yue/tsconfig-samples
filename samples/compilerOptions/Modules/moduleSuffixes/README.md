# Modules - moduleSuffixes

## 官网翻译
提供在解析模块时重写要搜索的文件名后缀的默认列表的方法。
```json
{
  "compilerOptions": {
    "moduleSuffixes": [".ios", ".native", ".classnames", ""],
  }
}
```

给定上面的配置，导入如下:
```ts
import * as moduleA from './module-a'
```

TypeScript 将查找相关文件 ./module-a.ios.ts、 ./module-a.natve.ts, ./module-a.classnames.ts 和最后的./module-a.ts。

注意 moduleAffixes 中的空字符串 "" 是必须的，TypeScript 也需要这个字符串来查找./foo.ts。

这个特性对于 React Native 项目非常有用，其中每个目标平台都可以使用带有不同模块后缀的单独 tsconfig.json。
