interface Point2D {
  x: number
  y: number
}

interface Point {
  a: number
  // x: string
}

// 如果 Point2D 和 Point 中有同名的属性，但是，如果属性值的类型（比如，number 和 string）不同，那么会报错！
interface Point3D extends Point2D, Point {
  z: number
}

let p3: Point3D = {
  x: 1,
  y: 2,
  z: 3,
  a: 1
}
