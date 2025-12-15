let questions = document.querySelector('.question')
let option = document.querySelectorAll('.option')
let nextBtn = document.querySelector('.next-btn')




let Quizdata = [
    {
       question: "question 1",
       options: ["answer1" , "answer2","answer3","answer4"],
       correct:0
       
    },
     {
       question: "question 2",
       options: ["answer1" , "answer2","answer3","answer4"],
       correct:1
       
    },
     {
       question: "question 3",
       options: ["answer1" , "answer2","answer3","answer4"],
       correct:2
       
    },
     {
       question: "question 4",
       options: ["answer1" , "answer2","answer3","answer4"],
       correct:3
       
    }
]


let currentQuestions = 0;
questions.innerText = Quizdata[currentQuestions].question;

for(let i = 0 ; i < option.length; i++){
    option[i].innerText = Quizdata[currentQuestions].options[i]
}

nextBtn.addEventListener('click',function(){
    currentQuestions++;
    if(currentQuestions >= Quizdata.length){
        alert("quiz finished")
        currentQuestions = 0
    }

    questions.innerHTML = Quizdata[currentQuestions].question;
    for(let i = 0; i< option.length; i++){
        option[i].innerText = Quizdata[currentQuestions].options[i]
         option[i].classList.remove('correct');
    option[i].classList.remove('wrong');
    }
})

for(let i = 0; i < option.length; i++){
    option[i].addEventListener('click',function(){
        if(i === Quizdata[currentQuestions].correct){
            option[i].classList.add('correct')
        } else{
            option[i].classList.add('wrong')
        }
    })
}

