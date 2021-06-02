// let age: number = 18

// 推荐省略类型：
let age = 18
let str = 'abc'
let obj = {
  name: 'jack',
  age: 18,
  sayHi() {}
}

function add(num1: number, num2: number) {
  return num1 + num2
  // return false
}

add(1, 3)

console.log('object')

// 注意：如果仅仅声明变量不给初始值的情况下，应该为变量提供类型
// let a
// a.a.a.a.a = '1'
// a()

let a: number

a = 1
// a = '1'
// a()
