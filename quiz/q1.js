var QuestionBank = [
    {
        question:"who is the president of nigeria?",
        options:["elon musk","seyi Adeleke","Seyi law","Ahmed Tinubu"],
       answers:"Ahmed Tinubu"
    },
    {
      question : "who is the CEO of Appclick?",
      options:["Benson","adeleke","Delight","stanley"],
      answers:"adeleke"
    },
]


     //dom connection
     var question = document.getElementById("question")
     var option0 = document.querySelector(".option0")
     var option1 = document.querySelector(".option1")
     var option2 = document.querySelector('.option2')
     var option3 = document.querySelector('.option3')
     var i = 0
     var next = document.getElementById("next")
     var previousButton = document.getElementById("previous")
     var questionStat = document.getElementById("stat")
     var lightMode = document.querySelector("body")
     var darkMode = document.querySelector(".bxs-bulb")
     var scoreBoard = document.querySelector("#scoreboard")
     var quizContainer = document.getElementById("quiz-container")
     var score = 0
     var span = document.querySelectorAll("span")
     var scorez = document.getElementById("score")
     var scoreSheet = document.getElementById("scoreSheet") 
     var answerShow = document.getElementById("check-answer")
     var answerSheet = document.getElementById("answerSheet")
     var answerBoard = document.getElementById("answerBoard")
     var timerElement = document.getElementById("timerelement")
     var count = document.getElementById("count")




      function displayQuestion() {

        for(var b = 0;b<span.length;b++){
          span[b].style.background = "none"
        }
        question.innerHTML = 'Q ' + (i+1)+ " " + QuestionBank[i].question
        option0.innerHTML = QuestionBank[i].options[0]
        option1.innerHTML = QuestionBank[i].options[1]
        option2.innerHTML = QuestionBank[i].options[2]
        option3.innerHTML = QuestionBank[i].options[3]
        questionStat.innerHTML ="question  " + (i+1) + " of " + QuestionBank.length
       
      }
        function nextQuestion(){
            if(i < QuestionBank.length-1){
                i++ ;
               displayQuestion()
            }
            else{
              quizContainer.style.display="none"
              scoreBoard.style.display="block"
              scorez.innerHTML = score + "/" + QuestionBank.length
            }
        } 
       
        function previousQuestion() {
          if( QuestionBank.length > i){
            i--;
            
         displayQuestion()
          }
        }    
  var backgroundMusic = new Audio("./songs/an-ambient-music-194431.mp3")

      
   next.addEventListener('click',nextQuestion);
  previousButton.addEventListener("click",previousQuestion),

  darkMode.addEventListener("click",function(){
    lightMode.classList.toggle("dark-mode")
    if(lightMode.classList.contains("dark-mode")){
     
      backgroundMusic.volume = 0.9
      backgroundMusic.play();

    }
    else{
       backgroundMusic.pause();
    
     
    }
    
  })

 
  function calculateScore(e){
    if(e.innerHTML === QuestionBank[i].answers && i < QuestionBank.length){
         score = score +1;
         e.style.background = "green"
        
    }
    else{
      e.style.background = "tomato"
    }

    setTimeout(nextQuestion,300)
  }
  
 

function backToQuiz(){
  location.reload()
}

// function countDown(){ 
//   const timer = new Date().toLocaleTimeString()
//   timerElement.innerHTML = timer
  
//   setInterval(countDown,1000)
  
//   } 
  // countDown()


let time = 1 * 60

let timer = time 
 function counter(){
 
   let minute = Math.floor(timer / 60)
   let seconds = timer % 60 ;
   minute = minute < 10 ?'0' + minute : minute;
   seconds = seconds < 10 ?"0" + seconds: seconds;
  count.innerHTML = minute + ":" + seconds
  
  if(timer <= 0){
    
    quizContainer.style.display="none"
    scoreBoard.style.display="block"
    scorez.innerHTML = score + "/" + QuestionBank.length
    count.innerHTML = "Time up!"
    count.style.color = "black"
    timer.stop()

   
  }
  if (timer <= 3) {
    count.style.color = "red"
  } 

  
  else {
    
  }

  timer--;
 

 }

 const setCountDown = setInterval(counter,1000)

 counter()









 function showAnswer(){
 
for(var a = 0;a < QuestionBank.length;a++){
  var list = document.createElement("li")
 list.innerHTML = QuestionBank[a].answers
 answerBoard.appendChild(list)


}
  }

 
 
function  checkAnswer() {
 
    answerSheet.style.display = "block"
    quizContainer.style.display="none"
    scoreBoard.style.display="none"

   
}
       
answerShow.addEventListener("click",checkAnswer)







showAnswer();











  
displayQuestion()