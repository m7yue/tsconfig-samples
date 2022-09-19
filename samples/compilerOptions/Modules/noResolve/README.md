# Modules - noResolve

通常，编译器在开始编译过程之前会尝试解析所有模块导入。每次成功解析对文件的导入时，该文件都会添加到编译器稍后将处理的文件集中。

NoResolve 编译器选项指示编译器不要“添加”任何未在命令行上传递的文件到编译中。它仍将尝试将模块解析为文件，但是如果未指定该文件，则不会包含该文件。

本例中， noResolve 设为 true, 会提示 找不到模块“./module-b”或其相应的类型声明。ts(2307), 如果设为 false, 则不会报错。

# 相关链接
- https://www.typescriptlang.org/docs/handbook/module-resolution.html#using---noresolve