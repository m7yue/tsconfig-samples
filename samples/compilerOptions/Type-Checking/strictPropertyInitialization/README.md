当设置为 true 时，当声明了类属性但未在构造函数中设置值时，TypeScript 将引发错误。

```ts
class UserAccount {
  name: string;
  accountType = "user";
 
  email: string; //Property 'email' has no initializer and is not definitely assigned in the constructor.
  address: string | undefined;
 
  constructor(name: string) {
    this.name = name;
    // Note that this.email is not set
  }
}
```

上面的代码中：
- this.name 是特别指定的
- this.accountType 设定了初始值
- this.email 没有指定值，会导致报错
- this.address 的类型可以是 undefined, 所以可以不设置值

指定此选项需要同时指定 strictNullChecks