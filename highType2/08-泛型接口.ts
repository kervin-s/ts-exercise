interface IdFunc<Type> {
  value: Type
  id: (value: Type) => Type
  ids: () => Type[]
}

let obj: IdFunc<number> = {
  value: 1,
  id(value) {
    return value
  },
  ids() {
    return [1, 3]
  }
}

// --

// JS 中的数组就是一个泛型接口
const arr = ['a', 'b']
arr.forEach(item => {})

const nums = [1, 3, 5]
nums.forEach(item => {})
