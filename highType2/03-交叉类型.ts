interface Person {
  name: string
}
interface Contact {
  phone: string
}

type PersonDetail = Person & Contact
// 相当于：
// type PersonDetail = { name: string; phone: string }

let o: PersonDetail = {
  name: '',
  phone: ''
}

// 这个用法，类似于 接口之间的继承 extends
interface Person1 {
  name: string
}
// 接口之间的继承
interface Contact1 extends Person1 {
  phone: string
}

let o1: Contact1 = {
  name: '',
  phone: ''
}
