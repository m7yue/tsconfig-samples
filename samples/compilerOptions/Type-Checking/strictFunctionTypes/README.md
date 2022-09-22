
启用此标志时，将更正确地检查函数参数。

仅适用于以 function 语法。
报错
```ts
function fn(x: string) {
  console.log("Hello, " + x.toLowerCase());
}
 
type StringOrNumberFunc = (ns: string | number) => void;
 
// Unsafe assignment is prevented
let func: StringOrNumberFunc = fn;
Type '(x: string) => void' is not assignable to type 'StringOrNumberFunc'.
  Types of parameters 'x' and 'ns' are incompatible.
    Type 'string | number' is not assignable to type 'string'.
      Type 'number' is not assignable to type 'string'.
```

不报错
```ts
type Methodish = {
  func(x: string | number): void;
};
 
function fn(x: string) {
  console.log("Hello, " + x.toLowerCase());
}
 
// Ultimately an unsafe assignment, but not detected
const m: Methodish = {
  func: fn,
};
m.func(10);
```