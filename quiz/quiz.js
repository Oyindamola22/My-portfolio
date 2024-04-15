// question answer array
var QuestionBank = [
    {
        question:'Who is the CEO of Appclick?',
        options : ['Osimehn','Seyi Adeleke','Seyi Law','Stanley']
    },
    {
        question:'Who is the President of Nigeria?',
        options : ['Obasanjo','Elon Musk','Thomas Muller','Asiwaju Bola Ahmeed']
    },
    {
        question:'Where is the capital of Nigeria?',
        options : ['Abuja','Lagos','Ibadan','Togo']
    },
]

// dom connection
var question = document.getElementById('question')
var option0 = document.querySelector('.option0')
var option1 = document.querySelector('.option1')
var option2 = document.querySelector('.option2')
var option3 = document.querySelector('.option3')
var i = 0
var next = document.querySelector('.next')
var stat = document.getElementById('stat')
var scoreboard = document.getElementById('scoreboard')
var quizContainer = document.getElementById('quizContainer')
var previous = document.querySelector('.previous')
// var dark = document.querySelector('.dark')
// var container = document.querySelector('.container')



// functions
function displayQuestion(){
    question.innerHTML = 'Q ' + (i+1)+ " " + QuestionBank[i].question
    option0.innerHTML = QuestionBank[i].options[0]
    option1.innerHTML = QuestionBank[i].options[1]
    option2.innerHTML = QuestionBank[i].options[2]
    option3.innerHTML = QuestionBank[i].options[3]

    stat.innerHTML = `Question ${i+1}  of ${QuestionBank.length}`
}
// next function
function nextQuestion(){
    if(i < QuestionBank.length-1){
        i++
        displayQuestion()
    }
    else{
        quizContainer.style.display='none'
        scoreboard.style.display='block'
    }
}
next.addEventListener('click',nextQuestion)

// dark.addEventListener('click',function(){
//     container.QuestionBank.toggle('darkmode')
// })

// previous function
function previousQuestion(){
    if(i <  QuestionBank.length ){
        
        i-- 
        displayQuestion()
    }
}
previous.addEventListener('click',previousQuestion)

// function CalculateScore(e){
//     if(e.innerHTML === QuestionBank[i].answer && i < QuestionBank.length){
    // score = score + li

    // e.style.background="green"
    // console.log(score)
// }
// else{
     // e.style.background="tomato"
// }
// }

















displayQuestion()
