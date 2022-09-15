# compilerOptions-target
## 官网翻译
现代浏览器支持所有 ES6 特性，因此 ES6是一个不错的选择。如果将代码部署到较旧的环境，则可以选择设置较低的目标，如果确保代码在较新的环境中运行，则可以选择设置较高的目标。

target 的配置将会改变哪些 JS 特性会被降级，而哪些会被完整保留 例如，如果 target 是 ES5 或更低版本，箭头函数 () => this 会被转换为等价的 函数 表达式。

改变 target 也会改变 lib 选项的默认值。 你可以根据需要混搭 target 和 lib 的配置，你也可以为了方便只设置 target。

对于像 Node 这样的开发平台，根据平台的类型及其版本，目标平台有基准值。您可以在 [tsconfig/base](https://github.com/tsconfig/bases#centralized-recommendations-for-tsconfig-bases) 上找到一组社区组织的 TSConfig，其中包含针对通用平台及其版本的配置。

特殊的 ESNext 值代表你的 TypeScript 所支持的最高版本。这个配置应当被谨慎使用，因为它在不同的 TypeScript 版本之间的含义不同，并且会导致升级更难预测。

## 理解
在官网的解释中，这个选项主要是做浏览器的兼容性。如果编译输出的代码供浏览器直接使用，则需要着重考虑目标环境的兼容性输出。如果输出的是 lib 库，则因为最终还会被一些构建工具处理，就显得不是那么重要了。


## \__esModule
```js
// 如果 __esModule 为 true, 那么 import 拿到的 default 就是 module.exports.default, 否则拿到的是 module.exports 的全部内容
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
```

我们在写一个 lib 包的时候，最好将 main module exports types 都指明，并提供不同类型的包，这样可以兼容多种场景. https://nodejs.org/api/packages.html#packages_exports
```json
// package.json
{
    "name": "my-package",
    "type": "module",
    "exports": {
        ".": {
            // Entry-point for TypeScript resolution - must occur first!
            "types": "./types/index.d.ts",
            // Entry-point for `import "my-package"` in ESM
            "import": "./esm/index.js",
            // Entry-point for `require("my-package") in CJS
            "require": "./commonjs/index.cjs",
        },
    },
    // CJS fall-back for older versions of Node.js
    "main": "./commonjs/index.cjs",
    // Fall-back for older versions of TypeScript
    "types": "./types/index.d.ts"
}
```