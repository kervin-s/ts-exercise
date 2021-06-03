type F1 = (a: number) => void
type F2 = (a: number, b: number) => void

let f1: F1
let f2: F2

// 技巧：参数少的可以赋值给参数多的！

f2 = f1

// 错误演示
// f1 = f2

// ---

// 为什么函数参数少的可以赋值给参数多的？
// 跟 JS 中的用法相关
//
// 比如，对于数组的 forEach 方法来说，它回调函数有 3 个参数
// 但是，我们在使用 forEach 方法的时候，可以传入一个回调函数
// 这个回调函数，可以一个参数都没有，可以提供 1 个参数、 2 个参数、 3 个参数。

const arr = ['a', 'b', 'c']
// callbackfn: (value: string, index: number, array: string[]) => void
let f = () => {}
arr.forEach(f)
let f11 = (value: string) => {}
arr.forEach(f11)
arr.forEach((value, index) => {})
arr.forEach((value, index, array) => {})

// 错误：
// arr.forEach((value, index, array, a) => {})
