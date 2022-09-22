
```ts
interface GameSettings {
  // Known up-front properties
  speed: "fast" | "medium" | "slow";
  quality: "high" | "low";
 
  // Assume anything unknown to the interface
  // is a string.
  [key: string]: string;
}
 
const settings = getSettings();
settings.speed;
          
(property) GameSettings.speed: "fast" | "medium" | "slow"
settings.quality;
           
(property) GameSettings.quality: "high" | "low"
 
// Unknown key accessors are allowed on
// this object, and are `string`
settings.username;
```

打开 noPropertyAccessFromIndexSignature, 使用 . 语法获取为定义的索引签名属性将会报错。
```ts
const settings = getSettings();
settings.speed;
settings.quality;
 
// This would need to be settings["username"];
settings.username;
Property 'username' comes from an index signature, so it must be accessed with ['username'].
```