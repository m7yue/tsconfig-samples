# JavaScriptSupport - maxNodeModuleJsDepth

## 官网翻译
在 node _ module 下搜索并加载 JavaScript 文件的最大依赖深度。

此标志只能在启用 allowJs 时使用，如果您希望为 node _ module 中的所有 JavaScript 推断类型，则可以使用此标志。

理想情况下，这应该保持为0(默认值) ，并且 d.ts 文件应该用于显式定义模块的形状。但是，在某些情况下，您可能希望以牺牲速度和潜在的准确性为代价来打开它。