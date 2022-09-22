
在 TypeScript 4.0中，添加了该支持，以允许将 catch 子句中的变量类型从 any 更改为 unknown。


此模式确保错误处理代码变得更加全面，因为您不能提前确保抛出的对象是 Error 子类。

useUnknownInCatchVariables 开启， 那么您不需要额外的语法(: known)也不需要一个行程规则来尝试强制执行此行为。

useUnknownInCatchVariables 默认为 false, error 类型为 any, 开启后 error 类型为 unknown