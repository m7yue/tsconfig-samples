
设置后，TypeScript 将检查函数的内置方法 call, bind, aplly 是否使用正确参数进行调用

开启 strictBindCallApply
```ts
// With strictBindCallApply on
function fn(x: string) {
  return parseInt(x);
}
 
const n1 = fn.call(undefined, "10");
 
const n2 = fn.call(undefined, false);
Argument of type 'boolean' is not assignable to parameter of type 'string'.
```

否则，这些函数将接受任何参数并返回 any
```ts
// With strictBindCallApply off
function fn(x: string) {
  return parseInt(x);
}
 
// Note: No error; return type is 'any'
const n = fn.call(undefined, false);
```

建议开启。