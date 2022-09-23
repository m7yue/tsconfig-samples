
对于可选属性，例如
```ts
interface UserDefaults {
  // The absence of a value represents 'system'
  colorThemeOverride?: "dark" | "light";
}
```

默认情况下 (exactOptionalPropertyTypes 为 true)，colorThemeOverride 可以设置三个值， “dark”, “light” 和 undefined。 但是 undefined 这个值往往不是我们期望的，这就会存在潜在的错误。

当 exactOptionalPropertyTypes 为 false， colorThemeOverride 就只能设置两个值， “dark”, “light”。

正常情况下是需要开启的，因为属性没有，在 js 中就是 undefined

