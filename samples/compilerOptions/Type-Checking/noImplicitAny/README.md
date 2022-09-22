
在某些没有类型注释的情况下，当 TypeScript 无法推断变量的类型时，它将退回到 any 类型。

这可能会导致错过一些错误.

开启 noImplicitAny (默认为 false, 不开启)， 只要推断出 any, 就会提示错误。