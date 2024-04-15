// Write a JavaScript function that returns a string that has letters in alphabetical order
var sortedString = sortletters("webmaster");

function sortletters(string){
    return string.split('') .sort().join('');
}
console.log(sortedString);

// Write a JavaScript function that accepts a string as a parameter and finds the longest word within the string
var sentence = 'Web Development Tutorial';


// Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string
var sentence = 'The quick brown fox'
var vowelCount = 0
var vowels = 'aeiouAEIOU'

function countVowels(str) {
    for(var i = 0; i<str.length; i++){
        if(vowels.includes(str[i])){
            vowelCount++;
        }
    }
    return vowelCount;
}

console.log(countVowels(sentence));

// Write a JavaScript function that accepts an argument and returns the type
function getType(value) {
    return typeof value;
    
}
console.log(getType(42));

// Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string.
var sentence = "monkey"
var letter = 'o'
var count = 0
function countOccurences(str,letter) {
    for (var i = 0; i<str.length; i++){
        
        if (str[i] == letter){
            count++;
        }
    }
    return count;
}

console.log(countOccurences(sentence,letter));

// using dom manipulation display a live counting date and time on the browser and apply dark mode to it
var dark = document.querySelector('.dark')
var container = document.querySelector('.container')

function autoDarkMode(){
    var hours = new Date().getHours()
    if (hours >=18){
        container.classList.add('dark-mode')
    }
    if (hours == 0){
        container.classList.remove('dark-mode')  
    }
}





















