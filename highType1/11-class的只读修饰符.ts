class Person {
  // 注意：因为 age 是只读属性，所以，就像 const 声明的常量一样
  // 是不会发生改变的，所以，TS 默认推论出来的类型是 10（ 字面量类型 ）
  // readonly age = 10

  // 所以，此处我们显示的为 age 来指定类型为 number
  readonly age: number = 10
  constructor(age: number) {
    this.age = age
  }

  setAge() {
    // 此处，无法再次给 age 赋值
    // this.age = 20

    console.log(this.age)
  }
}

// --

// 在 接口 或 {} 中，也可以使用 readonly 来修饰属性为只读
// interface Point {
//   readonly x: number
// }

// let p: Point = {
//   x: 10
// }

// 或

let p: { readonly x: number } = {
  x: 10
}

// 错误演示：
// p.x = 20
