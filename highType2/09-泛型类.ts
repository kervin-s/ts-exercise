class GenericNum<NumType> {
  constructor(num?: NumType) {
    this.defaultValue = num
  }

  defaultValue: NumType
  add: (num1: NumType, num2: NumType) => NumType
}

// 注意：对于 class 来说，在使用时，可以省略 泛型的类型变量
const g = new GenericNum<string>()
g.add('a', 'b')
g.defaultValue

// 注意：如果 class 是有构造函数的，一般可以省略泛型的类型变量
const g1 = new GenericNum(123)
g1.defaultValue
g1.add(1, 8)
