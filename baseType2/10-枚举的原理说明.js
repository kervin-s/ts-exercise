var num1 = 18;
var num2 = 18;
var str1 = 'Hello';
function changeDirection(direction) { }
changeDirection('up');
changeDirection('left');
// --
var Direction;
(function (Direction) {
    Direction["Up"] = "UP";
    Direction["Down"] = "DOWN";
    Direction["Left"] = "LEFT";
    Direction["Right"] = "RIGHT";
})(Direction || (Direction = {}));
console.log(Direction.Up);
