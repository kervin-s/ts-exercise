// 创建接口
// interface IPerson {
//   name: string
//   age: number
//   sayHi(name: string): void
// }

// 使用 type 来为对象添加类型
type IPerson = {
  name: string
  age: number
  sayHi(name: string): void
}

let obj: IPerson = {
  name: 'jack',
  age: 18,
  sayHi(name) {
    console.log('你好,', name)
  }
}

let ob1: IPerson = {
  name: 'rose',
  age: 16,
  sayHi(name) {
    console.log('helo', name)
  }
}
