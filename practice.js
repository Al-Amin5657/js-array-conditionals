var a = 83;
var b = 799;
var c = 145;
// if (a > b && a > c) {
//     console.log('a is grater');
// }
// else if (b > c && b > a) {
//     console.log('b is grater');
// }
// else {
//     console.log('c is grater')
// }

var num = 55;
if (num >= 80) {
    console.log('A grade')
}
else if (num >= 60) {
    console.log('B grade')

}
else if (num >= 50) {
    console.log('C grade')
}
else if (num >= 40) {
    console.log('D Grade')
}
else {
    console.log('F Grade')
}

var numbers = [22, 33, 44, 55, 66, 77];
// var element = numbers[2];
numbers[5] = 99;
// var element = numbers.indexOf(55);
numbers.push(100);
console.log(numbers);
numbers.pop()
console.log(numbers);
numbers.shift(80);
console.log(numbers);
numbers.unshift(200);
console.log(numbers);