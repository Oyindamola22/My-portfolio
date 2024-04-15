// Strings
// String method perform a function in a string
// 1. Length property return the length in a string
var first_name = 'Stanley'
console.log(first_name.length);
// you use index number to access what is in a string
// 2. Slice extracts a part of a string and return the enhanced part into a new string
var first_name = 'Stanley'
console.log(first_name.slice(2));
// 3. Replace is to replaace a specific value with  another value
var club = 'manchester united'
var newClub = club.replace('manchester','newcastle')
console.log(newClub);
// when you are passing something into a bracket is called an arguement
// 4.Uppercase 
// uppercase does not take an arguement
console.log(newClub.toUpperCase());
// 5.Lowercase
console.log(newClub.toLowerCase());
// Concatination of strings
console.log(first_name.concat(' supports ',club));
// using the + sign
console.log(first_name + ' supports ' + club);
// format strings
console.log(`${first_name} supports ${club} `);
// Trimming of strings
var text = ' 123456 '
var newtext=text.trim()
console.log(newtext.length);
// 6.String charAt meaning character at
console.log(text.charAt(1));
// 7. Split method
console.log(text.split(''));
// index of is to check the first occurence of a string
console.log(club.indexOf('united'));
// lastindexof  
var school = 'Appclick'
console.log(school.lastIndexOf('p'));
// Search
console.log(school.search('click'));
// Match method
console.log(school.match('click'));
// Include returns true when a string includes a value
console.log(school.includes('click'));

// how to alert your browser. alert only comes when you refresh your page
// alert('Hello World!')

// prompt('Kindly input your name')



// Numbers
var age = 16.5
// Methods
// toString
console.log(typeof(age.toString()));
// toExponential
console.log(age.toExponential());
// toFixed to round a decimal number
console.log(age.toFixed());
// valueOf
console.log(age.valueOf());
// toPrecision. it round up to a nearest nummber
console.log(age.toPrecision());


console.log(Math.PI);
let speed = 240.5
console.log(Math.round(speed));
// ceil will round it to the highest number while floor to the lowest
console.log(Math.ceil(speed));
console.log(Math.floor(speed));

// to get random numbers
console.log(Math.floor(Math.random() * 100));

var pi = Math.PI
var radius = 2
console.log(pi * radius**2);

// Arrays
// you  can declare array either of this way [] or Array()
var BagPack = []
// push adds too the end of an array
BagPack.push('water bottle','spoon')
console.log(BagPack);
// unshift adds to the beginning
BagPack.unshift('book')
console.log(BagPack);

// pop removes from the end
BagPack.pop()
console.log(BagPack);
// shift removes the first element
BagPack.shift()
console.log(BagPack);
//splice to remove anywhere and to add a another variable
var newArray = ['Amala','Spag','pYam','Moi2']
newArray.splice(1,1,'beans')
console.log(newArray);

newArray[0] = 'Rice'
console.log(newArray);

// everyting in JS is true except null, empty string,0

// Conditionals 
// conditionn will run based on an action

var money = false;
if(money === true){
    console.log('show your face');
}
else{
    console.log('hide your face');
}


// var passkey = prompt('kindly input password!')
// console.log(passkey);


// var passkey = prompt('kindly input password!')
// var OriginalPassword = 'appclick'
// if(passkey.trim() == OriginalPassword){
//     alert('password is correct!')
// }else{
//     alert('password is incorrect')
// }


// var jambscore = prompt('enter input jambscore')
// var age = prompt('kindly input your age')
// if(jambscore >= 180 && age >= 16){
//     alert('You are eligible for admission')
// }else if(jambscore >= 180 || age >= 18){ 
//     alert('You are not eligible for admission but you can visit a private uni');
// }
// else{
//     alert('You are not eligible for admission');
// }

// var password = prompt('kindly input password')
// if(password.length <=8){
//     alert ('password should not be less than 8')

// }else if(!password.includes ('@')){
//     alert('password must have @ sign')
// }
// else{
//     alert('password correct!')
// }


var number = prompt('enter a number')
if(number > 0){
    alert('number is positive')
}else if(number < 0){
    alert('number is negative')
}else if(number == 0){
    alert('number is zero')
}
else{
    alert('This is not a number')
}













