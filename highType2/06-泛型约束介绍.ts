// 创建泛型函数
// function id<Type>(value: Type): Type {
//   // value.length
//   return value
// }

// id('a')
// id(10)

// 收缩类型： 指定更加具体的类型
function id<Type>(value: Type[]): Type[] {
  value.length
  // value.forEach(item => {})
  return value
}

id(['a'])
id([10])

// 添加约束：
// 1 使用 extends 关键字
interface ILength {
  length: number
}
// Type extends ILength 表示： Type 必须要满足 ILength 接口的约束，也就必须是一个对象，并且有 length 属性
function id1<Type extends ILength>(value: Type): Type {
  return value
}

// 因为数组是有 length 属性的，所以，满足 ILength 接口的要求
id1(['a', 'b'])
// 虽然，字符串不是对象类型，但是，它的包装来修是对象类型的，并且这个包装类型（ String('123') ）是有 length 属性的
id1('123')

id1({ length: 123 })
id1({ length: 123, name: 'js' })

// 错误
// id1(1)
