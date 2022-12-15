默认值就是 true, 如果 allowSyntheticDefaultImports 为 true, 则允许像这样的导入.
```ts
import React from "react";
```

而不需要用这样的代码
```
import * as React from "react";
```

此标志不影响编译输出的 JavaScript， 它只是为了类型检查。这个选项使 TypeScript 的行为与 Babel 一致，在 Babel 中发出额外的代码，使用模块的默认导出更符合人体工程学。

1.8 版本发布，默认开启，一般不需要修改。


tip: 在平时自己编写的类库时，统一规范，还是尽量不要出现 default 导出