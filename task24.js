// Tests for equality and inequality with strings
var color = 'blue';
console.log("Is color equal to 'blue'? I predict True.");
console.log(color == 'blue');
var fruit = 'apple';
console.log("Is fruit not equal to 'banana'? I predict True.");
console.log(fruit != 'banana');
// Tests using the lower case function
var message = 'Hello World';
console.log("Is message in lower case equal to 'hello world'? I predict True.");
console.log(message.toLowerCase() == 'hello world');
var personName = 'Peter';
console.log("Is name in lower case not equal to 'peter'? I predict True.");
console.log(personName.toLowerCase() != 'peter');
// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
var num1 = 10;
var num2 = 20;
console.log("Is num1 less than num2? I predict True.");
console.log(num1 < num2);
console.log("Is num2 greater than or equal to 20? I predict True.");
console.log(num2 >= 20);
console.log("Is num1 equal to num2? I predict False.");
console.log(num1 == num2);
console.log("Is num1 not equal to num2? I predict True.");
console.log(num1 != num2);
// Tests using "and" and "or" operators
var age1 = 25;
var age2 = 30;
var isEmployed = true;
console.log("Is age1 greater than 20 AND age2 less than 40? I predict True.");
console.log(age1 > 20 && age2 < 40);
console.log("Is age1 greater than 30 OR isEmployed true? I predict True.");
console.log(age1 > 30 || isEmployed);
// Test whether an item is in an array
var animals = ['dog', 'cat', 'bird'];
console.log("Is 'cat' in the animals array? I predict True.");
console.log(animals.includes('cat'));
// Test whether an item is not in an array
console.log("Is 'fish' not in the animals array? I predict True.");
console.log(!animals.includes('fish'));
