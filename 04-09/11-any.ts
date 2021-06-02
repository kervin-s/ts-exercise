let obj: any = { x: 0 }

obj.abc = 'abc'

obj()

const a: number = obj

// --
// 隐式具有 any 类型的情况：不推荐

// let a1

// function add(num1, num2) {}
// add(1, 3)
// add(false, 1)

// --

interface IO {
  x: number
}
function a2(o: IO | null) {
  console.log(o.x)
}
