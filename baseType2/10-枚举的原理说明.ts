let num1: number = 18
const num2: 18 = 18
const str1: 'Hello' = 'Hello'

function changeDirection(direction: 'up' | 'down' | 'left' | 'right') {}
changeDirection('up')
changeDirection('left')

// --

enum Direction {
  Up = 'UP',
  Down = 'DOWN',
  Left = 'LEFT',
  Right = 'RIGHT'
}
console.log(Direction, Direction.Up)
