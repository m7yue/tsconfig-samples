# references

## 说明
每个引用的path属性可以指向一个包含tsconfig.json文件的目录，或者指向配置文件本身（可以有任何名称）。

可以用来简化类似 monorepo 工程的多包编译。

每个模块都需要指定 composite 为 true, 这是内定的要求。

tsconfig.reference.json：配置了 noEmit 为 true 和 skipLibCheck， 因为其本身也算做了一次编译，会导致重复编译的问题以及其他问题。

每个子工程最好不要继承 tsconfig.reference.json， 而应该继承独立的公共配置 tsconfig.common.json， 职责分离。