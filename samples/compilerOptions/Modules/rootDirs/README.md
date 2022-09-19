# Modules-rootDirs

## 官网翻译
有时，在编译时将来自多个目录的项目源全部组合在一起，以生成单个输出目录。这可以看作是一组源目录创建了一个“虚拟”目录。

使用 rootDirs，您可以通知编译器，有许多“虚拟”目录充当单个根目录。这允许编译器解析这些“虚拟”目录中的相对模块导入，就好像它们被合并到一个目录中一样。

每次编译器在 rootDirs 的子文件夹中看到一个相对模块导入时，它都会尝试在 rootDirs 的每个条目中查找这个导入。



同样的，构建输出的代码需要结合构建工具支持。构建产物路径的正确性需要通过构建工具保证。

# 参考链接
- https://www.typescriptlang.org/docs/handbook/module-resolution.html#virtual-directories-with-rootdirs
