默认情况下，导入的值如果没有使用，则在编译输出时不会存在。但是有些场景下，是明明使用了，但是 Typescript 并不能探测出来。比如本例使用了 eval 函数执行。
```ts
import { Animal } from "./animal";

eval("console.log(new Animal().isDangerous())");
```
这时编译输出的内容导入语句被删除了，这不是期望的结果

所以如果设置 preserveValueImports 为 true (默认为 false), 则会保留导入的 import。


当 importsNotUsedAsValues 设为 ”preserve“， preserveValueImports 为 false 时，输出结果是错误的。
```js
import "./animal";
eval("console.log(new Animal().isDangerous())");
```

## 和 importsNotUsedAsValues 对比
当 importsNotUsedAsValues 设为 ”preserve“， preserveValueImports 为 true 时，输出结果是对的。
```js
import { Animal } from "./animal";
eval("console.log(new Animal().isDangerous())");
```

当 importsNotUsedAsValues 设为 ”remove“， preserveValueImports 为 true 时，输出结果是对的。
```js
import { Animal } from "./animal";
eval("console.log(new Animal().isDangerous())");
```

> 开启  isolatedModules， 明确导入场景， 即 import type, 有助于这种模糊的 导入场景