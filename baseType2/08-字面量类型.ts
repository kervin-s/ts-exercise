let num1 = 18

const num2: 18 = 18
const str1: 'Hello' = 'Hello'

// 字面量类型的使用场景：
// function changeDirection(direction: string) {}
function changeDirection(direction: 'up' | 'down' | 'left' | 'right') {}

changeDirection('up')
changeDirection('left')
