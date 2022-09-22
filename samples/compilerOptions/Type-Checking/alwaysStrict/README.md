确保您的文件在 ECMAScript 严格模式下进行解析，并为每个源文件发出 “use strict”。

ECMAScript 严格模式是在 ES5中引入的，它为 JavaScript 引擎的运行时提供行为调整以提高性能，并且抛出一组错误，而不是默默地忽略它们。

alwaysStrict 为 true, 编译输出文件 头包含 “use strict”， 否则不包含。