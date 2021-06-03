// 创建一个用来获取对象中属性的函数
// Key extends keyof Type 表示： Key 必须是 Type 中所有键的联合类型中的任何一个才行
// 如果 Type 是 person 对象，那么，keyof Type 就是 keyof person 也就是： 'name' | 'age'
// Key extends 'name' | 'age'
function getProp<Type, Key extends keyof Type>(obj: Type, key: Key) {
  return obj[key]
}

let person = { name: 'jack', age: 18 }
// getProp(person, 'name')
getProp(person, 'name')
getProp(person, 'age')
