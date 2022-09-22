
strict 标志支持大范围的类型检查行为，从而更好地保证程序的正确性。

打开此选项相当于启用所有严格模式系列选项，如下所示。然后您可以根据需要关闭单独的严格模式系列检查。
```json
{
  "noImplicitAny": true,
  "strictNullChecks": true, 
  "strictFunctionTypes": true,
  "strictBindCallApply": true,
  "strictPropertyInitialization": true,
  "noImplicitThis": true,
  "alwaysStrict": true
}
```

TypeScript 的未来版本可能会在此标志下引入更严格的检查，因此 TypeScript 的升级可能会导致程序中出现新的类型错误。在适当和可能的情况下，将添加相应的标志来禁用该行为。