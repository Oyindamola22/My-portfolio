// switch operator takes a condition and gives us different case
// switch(expression){
//     case value:
//         break;

//     case value:
//             break

//     default:
//         break;
// }

var name = 'Kayode'
switch(name){
    case 'Anita':
        console.log('This is Anita');
        break;

    case 'Bunmi':
        console.log('This is Bunmi');
            break;

    default:
        console.log('name does not exist');
        break;
}

var todaysDate = new Date
// console.log(todaysDate);
// console.log(todaysDate.getDate());
// console.log(todaysDate.getDay()+1);
// console.log(todaysDate.getMinutes());
// var DayofMonth = new Date
// console.log(DayofMonth.getMonth());

var DayofWeek = new Date
// console.log(DayofWeek.getDay());
switch(DayofWeek.getDay()){
    case 3:
        console.log('today is wednesday');
}

// Mini baba Ijebu
// var RandomNumber = Math.round(Math.random() * 10);
// var UserInput = prompt('Kindly enter a number from 0 - 10');

// if(RandomNumber == UserInput){
//     alert(`computer picked ${RandomNumber} Congratulations number matched`)
// }
// else{
//     alert(`computer picked ${RandomNumber} Try again you lost`)
// }





// Loop is a block of code that can execute something over and over again
// type of loop
// while loop also known as infinity loop
// while(condition){
//     code
// }
// var age = 1
// while(age <= 10){
//     console.log(age);
//     age++
// }
// to ommit 6
var age = 1
while(age < 10){
    age ++
    if(age == 6){
        continue
    }
    console.log(age);
}


// for loop
// for(expression1,expression2,expression3){
//     code that will be executed
// }
// for(assignment of value, comparison of that variable,increament){
//     code that will be executed
// }
// var num = 2
// console.log(num+=1);
// for(let number = 0; number <= 10; number++){
//     console.log(number);
// }

// for(let number = 0; number <= 10; number+=1){
//     if(number % 2 == 0){
//         console.log(number);
//     }
// }

// for(let number = 1700; number <= 3600; number+=1){
//     if(number % 5 == 0 && number % 7 == 0 )
//     console.log(number);
// }


// do while loop

do {
    console.log('Hello');
}while(6<2)













