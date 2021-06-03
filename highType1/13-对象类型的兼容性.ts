class Point {
  x: number
  y: number
}
class Point3D {
  x: number
  y: number
  z: number
}

// 技巧： 成员多的可以赋值给成员少的
const p: Point = new Point3D()

// 错误：
// const p1: Point3D = new Point()
