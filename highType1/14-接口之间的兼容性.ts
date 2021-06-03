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

let p1: Point
let p2: Point2D
let p3: Point3D

// 原则（技巧）：成员多的可以赋值给成员少的
// p2 = p1
// p1 = p2

// p2 = p3
// p1 = p3

// 错误：
// p3 = p1
// p3 = p2

class PointClass {
  x: number
  y: number
}

// 类和接口之间也是可以相互兼容的
const p4: Point = new PointClass()
