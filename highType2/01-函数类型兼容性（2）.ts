// 基本类型的参数：
type F1 = (a: number) => void
type F2 = (a: number) => void
type F3 = (a: string) => void

let f1: F1
let f2: F2
let f3: F3

f2 = f1
f1 = f2

// 错误：
// f1 = f3

// ----

// 复杂类型：
interface Point {
  x: number
  y: number
}
interface Point2D {
  x: number
  y: number
}
interface Point3D {
  x: number
  y: number
  z: number
}

type F4 = (a: Point) => void
// (x: number, y: number) => void
type F5 = (a: Point2D) => void
// (x: number, y: number, z: number) => void
type F6 = (a: Point3D) => void

let f4: F4
let f5: F5
let f6: F6

f4 = f5
f5 = f4

// 技巧：当参数为复杂类型（对象类型）的时候，需要将对象中的属性看做函数的参数
// 也就是有多个属性，就看做多少个参数。
// 然后，再按照 参数少的可以赋值给参数多的 来理解！！！
f6 = f5

// 错误：
// f5 = f6
