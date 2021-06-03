// 创建泛型函数
// 此处 <Type> 就是挖坑，将来会接受一个类型
function id<Type>(value: Type): Type {
  return value
}

// 调用泛型函数：
// 此处 <number> 就是填坑，来指定具体的类型
const num = id<number>(1)
const str = id<string>('a')

const arr = id<string[]>(['a'])

// 简化：省略类型进行调用
// 注意：对于当前函数来说，如果省略了类型，那么，TS 自动推断出来的类型是 字面量类型
// 也就是 参数值 本身。而这一点，对于我们获取到的结果来说，跟上面是一样的

let num1 = id(100)
let str1 = id('abc')

console.log(num, num1)
