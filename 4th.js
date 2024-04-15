// FUNCTION is a block of code that runs anytime you call it

// function nameoffunction() {
//     block of code
// }
// Types of function
// 1.Named function
function printText() {
    console.log('Print text!!!!');
}
printText()

// 2.Anonymous Function
let bella = function() {
    console.log('hello from bella');
}
bella()

// 3.Arrow function it can also be used as a call back function
const Ajoke = () => {
    console.log('hello world from Ajoke');
}
Ajoke()

// Parameters & Arguement
const greet = (name) => {
    console.log('good morning ' + name);
}
greet('stanley')
greet('musa')

function square(number) {
    return(
        number**2
    )
}
console.log(square(4));// convert dollar to naira
function convertz(dollar) {
    return(
       dollar*1500
    )
}
console.log(convertz(5));

// write a function that convert celcius to farenheit

function celciusToFarenheit(degree) {
    return(
        (degree*9/5)+32
    )
}
console.log(celciusToFarenheit(1));

function ageCalculator(year) {
    return 2024
}


function AgeCalculator(year) {
    var currentYear = new Date().getFullYear()
    return(
        currentYear - year
    )
}
console.log(AgeCalculator(2006));



function capitalize(string) {
    return(
        string.toUpperCase()
    )
}
console.log(capitalize('oyindamola'))


// MAP AND FILTER METHOD IN ARRAY

var numbers =  [1,2,3,4,5,6,7,8,9,0]
for(num in numbers){
    console.log(num);
}

var emails = ['ayo@mail.com', 'dayo@mail.com']
for(mail in emails){
    console.log(emails[mail] + ' hello how are you?');
}

// Map is a callback function
var newNumbers = [2,3,4,5,6]

var multipliedArray = newNumbers.map((ade) =>{
    return(
        ade * 2
    )
}) 

console.log(multipliedArray);

var filteredEvenNumbers = newNumbers.filter((num) =>{
    return(
        num % 2 == 0
    )
})
console.log(filteredEvenNumbers);


// how to search 

const foodItems = ['amala','eba','rice','egg','eggsauce','egg plant']

const search = 'egg'
// const filteredString = foodItems.filter((food) => {
//     return(
//         food.includes(search)
//     )
// })

// console.log(filteredString);

    //    OR


const filteredString = foodItems.filter(food => food.includes(search))
console.log(filteredString);


// DOM MANIPULATION
// DOM MEANS DOCUMENT OBJECT MODEL
// first way
// document.getElementsByTagName('h2')
// console.log(document.getElementsByTagName('h2'));

// second way

var text = document.getElementsByTagName('h2')

var stanley = document.getElementById('stanley')
console.log(stanley);

var ajoke = document.querySelector('.ajoke')
console.log(ajoke);


var BTN = document.querySelector('.btn')
var dark = document.querySelector('.dark')
var container = document.querySelector('.container')



stanley.innerHTML = 'hello stanley'

BTN.addEventListener('click',function(){
    alert('button clicked!!!')
})


dark.addEventListener('click',function(){
    container.classList.toggle('darkmode')
})




















