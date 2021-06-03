class Animal {
  // public 表示该方法时公开的，任何地方都可以访问
  public move() {
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

const a = new Animal()
a.move()
