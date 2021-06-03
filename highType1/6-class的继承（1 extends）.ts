// 父类
class Animal {
  move() {
    console.log('走两步..')
  }
}

// 子类
class Dog extends Animal {
  bark() {
    console.log('旺旺牛奶')
  }
}

const d = new Dog()
d.move()
d.bark()
