// JS 中的 typeof
// console.log(typeof 'abc')
// console.log(typeof 123)
// console.log(typeof true)

const p = { x: 1, y: 2 }
function formatPoint(point: { x: number; y: number }) {}
formatPoint(p)

// 更好的方式，推荐使用：typeof 运算符
function formatPoint1(point: typeof p) {}
// formatPoint1(p)
formatPoint({ x: 100, y: 200 })

// 演示查询 对象属性 的类型
let num1: typeof p.x
num1 = 123

// 错误演示：
// const fn = () => 1
// let num2: typeof fn()
