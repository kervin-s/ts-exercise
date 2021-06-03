// function add(num1: number, num2: number): number {
//   return num1 + num2
// }

// let add = (num1: number, num2: number): number => {
//   return num1 + num2
// }

let add: (num1: number, num2: number) => number = (num1, num2) => {
  return num1 + num2
}

console.log(add(10, 2))

// 空类型 void
function greet(name: string): void {
  console.log('欢迎：', name)
}

greet('各位同学')
