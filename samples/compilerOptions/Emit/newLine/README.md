
指定在输出文件时使用的行结束序列: ‘CRLF’(dos) 或 ‘LF’(unix)。

## CRLF和LF的差异
https://zhuanlan.zhihu.com/p/380574688

CRLF 对应 \r, LF 对应 \n

\r 对应符号 ^M, \n 对应符号 $

如果设为 crlf
```sh
cat -benstuv dist/index.js
```
结果为
```
1  "use strict";^M$
2  exports.__esModule = true;^M$
3  exports.helloWorld1 = exports.helloWorld = void 0;^M$
4  exports.helloWorld = "hi";^M$
5  exports.helloWorld1 = "hi";^M$
```

如果设为 crlf
```sh
cat -benstuv dist/index.js
```
结果为
```
1  "use strict";$
2  exports.__esModule = true;$
3  exports.helloWorld1 = exports.helloWorld = void 0;$
4  exports.helloWorld = "hi";$
5  exports.helloWorld1 = "hi";$
```

