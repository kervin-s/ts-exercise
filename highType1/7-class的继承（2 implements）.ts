// 接口
interface Singable {
  sing(): void
}

// 实现接口
class Person implements Singable {
  sing() {
    console.log('你是我的小苹果儿')
  }
}

const p = new Person()
p.sing()
