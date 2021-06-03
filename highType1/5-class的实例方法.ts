class Point {
  x = 10
  y = 10

  // 实例方法
  scale(n: number) {
    this.x *= n
    this.y *= n
  }
}

const p = new Point()
p.scale(10)
console.log(p)
