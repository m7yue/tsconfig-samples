项目中引入了一个 pnpm 软连接的包 compilerOptions-module。
tsconfig.json 开启了 traceResolution。

当 preserveSymlinks 为 false，追踪日志如下：
```
======== Resolving module 'compilerOptions-module' from '/tsconfig-samples/samples/compilerOptions/Interop-Constraints/preserveSymlinks/src/index.ts'. ========
Explicitly specified module resolution kind: 'NodeJs'.
Loading module 'compilerOptions-module' from 'node_modules' folder, target file type 'TypeScript'.
Directory '/tsconfig-samples/samples/compilerOptions/Interop-Constraints/preserveSymlinks/src/node_modules' does not exist, skipping all lookups in it.
Found 'package.json' at '/tsconfig-samples/samples/compilerOptions/Interop-Constraints/preserveSymlinks/node_modules/compilerOptions-module/package.json'.
'package.json' does not have a 'typesVersions' field.
File '/tsconfig-samples/samples/compilerOptions/Interop-Constraints/preserveSymlinks/node_modules/compilerOptions-module.ts' does not exist.
File '/tsconfig-samples/samples/compilerOptions/Interop-Constraints/preserveSymlinks/node_modules/compilerOptions-module.tsx' does not exist.
File '/tsconfig-samples/samples/compilerOptions/Interop-Constraints/preserveSymlinks/node_modules/compilerOptions-module.d.ts' does not exist.
'package.json' does not have a 'typings' field.
'package.json' has 'types' field './lib/index.d.ts' that references '/tsconfig-samples/samples/compilerOptions/Interop-Constraints/preserveSymlinks/node_modules/compilerOptions-module/lib/index.d.ts'.
File '/tsconfig-samples/samples/compilerOptions/Interop-Constraints/preserveSymlinks/node_modules/compilerOptions-module/lib/index.d.ts' exist - use it as a name resolution result.
Resolving real path for '/tsconfig-samples/samples/compilerOptions/Interop-Constraints/preserveSymlinks/node_modules/compilerOptions-module/lib/index.d.ts', result '/tsconfig-samples/samples/compilerOptions/Modules/module/lib/index.d.ts'.
======== Module name 'compilerOptions-module' was successfully resolved to '/tsconfig-samples/samples/compilerOptions/Modules/module/lib/index.d.ts' with Package ID 'compilerOptions-module/lib/index.d.ts@0.0.1'. ========
```
重点是最后的,是找的软连接真实的路径。
```
Resolving real path for '/tsconfig-samples/samples/compilerOptions/Interop-Constraints/preserveSymlinks/node_modules/compilerOptions-module/lib/index.d.ts', result '/tsconfig-samples/samples/compilerOptions/Modules/module/lib/index.d.ts'.
```



当 preserveSymlinks 为 true，追踪日志如下：
```
======== Resolving module 'compilerOptions-module' from '/tsconfig-samples/samples/compilerOptions/Interop-Constraints/preserveSymlinks/src/index.ts'. ========
Explicitly specified module resolution kind: 'NodeJs'.
Loading module 'compilerOptions-module' from 'node_modules' folder, target file type 'TypeScript'.
Directory '/tsconfig-samples/samples/compilerOptions/Interop-Constraints/preserveSymlinks/src/node_modules' does not exist, skipping all lookups in it.
Found 'package.json' at '/tsconfig-samples/samples/compilerOptions/Interop-Constraints/preserveSymlinks/node_modules/compilerOptions-module/package.json'.
'package.json' does not have a 'typesVersions' field.
File '/tsconfig-samples/samples/compilerOptions/Interop-Constraints/preserveSymlinks/node_modules/compilerOptions-module.ts' does not exist.
File '/tsconfig-samples/samples/compilerOptions/Interop-Constraints/preserveSymlinks/node_modules/compilerOptions-module.tsx' does not exist.
File '/tsconfig-samples/samples/compilerOptions/Interop-Constraints/preserveSymlinks/node_modules/compilerOptions-module.d.ts' does not exist.
'package.json' does not have a 'typings' field.
'package.json' has 'types' field './lib/index.d.ts' that references '/tsconfig-samples/samples/compilerOptions/Interop-Constraints/preserveSymlinks/node_modules/compilerOptions-module/lib/index.d.ts'.
File '/tsconfig-samples/samples/compilerOptions/Interop-Constraints/preserveSymlinks/node_modules/compilerOptions-module/lib/index.d.ts' exist - use it as a name resolution result.
======== Module name 'compilerOptions-module' was successfully resolved to '/tsconfig-samples/samples/compilerOptions/Interop-Constraints/preserveSymlinks/node_modules/compilerOptions-module/lib/index.d.ts' with Package ID 'compilerOptions-module/lib/index.d.ts@0.0.1'. ========
```
只找到链接存在的路径。


默认值为 false, 即找的真实路径。