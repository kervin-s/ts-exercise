// let obj: { name: string; age: number; sayHi(name: string): void } = {
//   name: 'jack',
//   age: 18,
//   sayHi(name) {
//     console.log('你好,', name)
//   }
// }

// obj.sayHi('jack')

// --

let obj: {
  name: string
  age: number
  sayHi(name: string): void
  add: (num1: number, num2: number) => number
} = {
  name: 'jack',
  age: 18,
  sayHi(name) {
    console.log('你好,', name)
  },
  add(num1, num2) {
    return num1 + num2
  }
}

obj.sayHi('jack')
