
生成代码中的不删除常量枚举声明。const 枚举提供了一种在运行时通过发出枚举值而不是引用来减少应用程序总体内存占用的方法.

```ts
const enum Album {
  JimmyEatWorldFutures = 1,
  TubRingZooHypothesis = 2,
  DogFashionDiscoAdultery = 3,
}
 
const selectedAlbum = Album.JimmyEatWorldFutures;
if (selectedAlbum === Album.JimmyEatWorldFutures) {
  console.log("That is a great choice.");
}
```
默认的 const 枚举行为是将任何 枚举引用代码 转换为相应的数字文本。并从 JavaScript 中完全删除对枚举的引用。

```js
"use strict";
const selectedAlbum = 1 /* Album.JimmyEatWorldFutures */;
if (selectedAlbum === 1 /* Album.JimmyEatWorldFutures */) {
    console.log("That is a great choice.");
}
```

将 presveConstEnums 设置为 true 时，枚举在运行时存在，并且仍然发出数字。
```js
"use strict";
var Album;
(function (Album) {
    Album[Album["JimmyEatWorldFutures"] = 1] = "JimmyEatWorldFutures";
    Album[Album["TubRingZooHypothesis"] = 2] = "TubRingZooHypothesis";
    Album[Album["DogFashionDiscoAdultery"] = 3] = "DogFashionDiscoAdultery";
})(Album || (Album = {}));
const selectedAlbum = 1 /* Album.JimmyEatWorldFutures */;
if (selectedAlbum === 1 /* Album.JimmyEatWorldFutures */) {
    console.log("That is a great choice.");
}
```

这实际上使得这样的常量枚举只具有源代码特性，没有运行时跟踪。