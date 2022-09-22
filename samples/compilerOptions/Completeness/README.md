
跳过声明文件的类型检查。

这可以在编译期间节省时间，代价是牺牲类型系统的准确性。例如，两个库可以以不一致的方式定义同一类型的两个副本。TypeScript 不会对所有 d.ts 文件进行全面检查，而是会检查应用程序源代码中特定引用的代码。

您可能会考虑使用 skipLibCheck 的一种常见情况是，在 node _ module 中有一个库类型的两个副本。在这种情况下，最好确保依赖安装只有一个副本（yarn，pnpm），从而在不使用其他工具的情况下修复问题。

另一种可能性是，当您在 TypeScript 发行版之间迁移时，更改会导致 node _ module 和 JS 标准库中的故障，而您不希望在 TypeScript 更新期间处理这些故障。

注意，如果这些问题来自 TypeScript 标准库，您可以使用 TypeScript 4.5的 [lib 替换技术](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-5.html#supporting-lib-from-node_modules)替换该库。