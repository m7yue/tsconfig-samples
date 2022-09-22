当开启 noImplicitReturns， TypeScript 将检查函数中的所有代码路径，以确保它们返回值。

```ts
// 报错：并非所有的代码路径都有返回值
function lookupHeadphonesManufacturer(color: "blue" | "black"): string {
  if (color === "blue") {
    return "beats";
  } else {
    "bose";
  }
}
```