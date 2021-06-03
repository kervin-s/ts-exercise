class Animal {
  private age = 18

  // private 表示该方法是私有的，只能在当前类中使用
  // 不能在 子类、以及实例对象中使用
  private move() {
    console.log('走两步')
  }

  foo() {
    this.move()
    this.age
  }
}

class Dog extends Animal {
  bark() {
    // 无法访问 move，因为 move 是私有
    // this.move()
    // this.
  }
}

// 不管是在 类自己的实例对象，还是 子类的实例对象，都是无法访问的
// const a = new Animal()
// a.move()

// const d = new Dog()
// d.move()
