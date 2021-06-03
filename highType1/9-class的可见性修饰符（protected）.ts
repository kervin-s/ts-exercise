class Animal {
  // protected 表示该方法是受保护的
  protected move() {
    console.log('走两步')
  }

  foo() {
    this.move()
  }
}

class Dog extends Animal {
  bark() {
    this.move()
  }
}

// 不管是在 类自己的实例对象，还是 子类的实例对象，都是无法访问的
// const a = new Animal()
// a.move()

// const d = new Dog()
// d.move()
