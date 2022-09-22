
对隐含 “any” 类型的 “this” 表达式引发错误。

```ts
class Rectangle {
  width: number;
  height: number;
 
  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }
 
  getAreaFunction() {
    return function () {
      return this.width * this.height;
// 'this' implicitly has type 'any' because it does not have a type annotation.
// 'this' implicitly has type 'any' because it does not have a type annotation.
    };
  }
}
```

往往是因为错误的 this 指向
