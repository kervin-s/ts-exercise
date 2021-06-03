// 创建class
class Person {
  // 添加实例属性
  age: number

  // 如果实例属性有初始值，将来也会被 构造函数 中的操作覆盖
  gender: string = '女'

  // 通过 构造函数 来为实例属性设置默认值
  constructor(age: number, gender?: string) {
    this.age = age
    if (gender) {
      this.gender = gender
    }
  }
}

// 实例化
// p 就是 Person 类的实例对象
const p = new Person(18, '男')
console.log(p.age, p.gender)

const p1 = new Person(18)
console.log(p1.age, p1.gender)
