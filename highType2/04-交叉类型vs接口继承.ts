// interface A {
//   fn: (value: number) => void
// }
// 出现类型冲突，导致代码报错：
// interface B extends A {
//   fn: (value: string) => void
// }

interface A {
  fn: (value: number) => void
}
interface B {
  fn: (value: string) => void
}

type C = A & B

let c: C
c.fn(123)
c.fn('abc')
// c.fn(true)

// ---
