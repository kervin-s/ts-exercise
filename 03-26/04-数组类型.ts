// 推荐：
let arr1: number[] = [1, 3]

let arr2: Array<number> = [1, 3]

let arr3: boolean[] = [false, true]

// 联合类型：
// 加小括号表示：首先是数组，然后，数组中可以出现 number 或 string 类型的元素
let arr4: (number | string)[] = ['a', 1, 'b', 'c']

// 不加小括号表示：要么是 number 类型，要么是 string[] 类型
let arr5: number | string[] = ['123']
