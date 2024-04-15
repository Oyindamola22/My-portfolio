// console.log("hello world from js")
// var, let and const
// var name="i am sodiq"
// var car="i drive Ferarri"
// var food="i love Rice"
// console.log(name,car,food );

var firstname="sodiq";
console.log(firstname);
var favouriteCar="Benz"
console.log(favouriteCar)

var last_name="Thomas";
console.log(last_name);
// redclare
var last_name="Thanos";
console.log(last_name);
// reassign
last_name="ade"
console.log(last_name)

// let does everything var does except you cannnot redeclare. 
// let variables
let animal = 'lion'
console.log(animal);

// const cannot redeclare and reassign
const pi=3.14
console.log(pi);

// how to form a meaning sentence
var name='oyindamola'
var food='spag'
var movie='merlin'
console.log('my name is '+ name +', my fav food is ' + food + ' and my fav movie is ' + movie );

// Data types in JS
// They are representation of data in our code
// 1. String 
var school = "Appclick"
// 2.Nummber
var age = 22
// 3.BigInt there are numbers that are very big numbers or numbers that end in n
var km = 17799844552n
// 4.Boolean true or false statements
var is_online = true
// 5.Undefined is a variable that does not have a value
var laptop
// 6.Null means empty
var electronics = null
// 7.Object is a data type you can store more than one thing at a time. It takes key and value
var user = {
    name: 'ifeoluwa',
    gender: 'male'
}
// types of object
// a. Array can store all the data types
var listofBallers = ['Dele Ali', 5, true,{}]
// b. Date
var todaysDate = new Date()
// 8.Symbol they are used as keys for object property
var brand = Symbol()

// how to check the data type
console.log(typeof(km));
console.log(typeof(is_online));
console.log(typeof(laptop));
console.log(typeof(brand));

// Operators in JS 
// 1. Arithmetic Operators
var number1 = 10
var number2 = 3
console.log(number1*number2);
console.log(number1+number2);
// modulus will show the remainder not the answer
console.log(number1%number2);
// 2. Comparison Operators returns a boolean value
// == double equals sign checks for only value
var num1 = 5
var num2 = 5
console.log(num1==num2);
// === it checks for both value and data type. the both of them must be the same
var num1 = 5
var num2 = 5
console.log(num1===num2);
// != not equals
var num1 = 5
var num2 = 5
console.log(num1!=num2);
// >
var num1 = 5
var num2 = 5
console.log(num1>num2);
// <
var num1 = 5
var num2 = 5
console.log(num1<num2);
// >=
var num1 = 5
var num2 = 5
console.log(num1>=num2);
// <=
var num1 = 5
var num2 = 5
console.log(num1<=num2);

// or means you are taking one side, and means both must be correct

var score = 180
var age = 16
console.log(score >= 200 && age >=18);

// || is the or sign
var score = 180
var age = 16
console.log((!score >= 200) ||(!age >=18));


// declare age and drivers license
var age = 18
var drivers_license = true
console.log((age >= 18) && (drivers_license == true));

