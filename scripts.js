document.addEventListener('DOMContentLoaded', () => {
    const startBtn = document.getElementById("start-btn")
    const nextBtn = document.getElementById("next-btn")
    const restartBtn = document.getElementById("restart-btn")
    const questionContainer = document.getElementById("question-container")
    const questionText = document.getElementById("question-text")
    const choicesList = document.getElementById("choices-list")
    const resultContainer = document.getElementById("result-container")
    const scoreDisplay = document.getElementById("score")

    console.log("Hellow world");

    const questionss = [
        {
            question: "What is the capital of France?",
            choices: ["Paris", "London", "Berlin", "Madrid"],
            answer: "Paris",
        },
        {
            question: "Which planet is know as the Red Planet?",
            choices: ["Mars", "Venus", "Jupiter", "Saturn"],
            answer: "Mars",
        },
        {
            question: "Which planet is know as the Red Planet?",
            choices: ["Mars", "Venus", "Jupiter", "Saturn"],
            answer: "Mars",
        },
        {
            question: "Which planet is know as the Red Planet?",
            choices: ["Mars", "Venus", "Jupiter", "Saturn"],
            answer: "Mars",
        },
        {
            question: "Which planet is know as the Red Planet?",
            choices: ["Mars", "Venus", "Jupiter", "Saturn"],
            answer: "Mars",
        },
        {
            question: "Which planet is know as the Red Planet?",
            choices: ["Mars", "Venus", "Jupiter", "Saturn"],
            answer: "Mars",
        },
        {
            question: "Which planet is know as the Red Planet?",
            choices: ["Mars", "Venus", "Jupiter", "Saturn"],
            answer: "Mars",
        },
        {
            question: "Which planet is know as the Red Planet?",
            choices: ["Mars", "Venus", "Jupiter", "Saturn"],
            answer: "Mars",
        },
        {
            question: "Which planet is know as the Red Planet?",
            choices: ["Mars", "Venus", "Jupiter", "Saturn"],
            answer: "Mars",
        },
        {
            question: "Which planet is know as the Red Planet?",
            choices: ["Mars", "Venus", "Jupiter", "Saturn"],
            answer: "Mars",
        },

    ]
    let currentQuestionIndex = 0
    let score = 0

    startBtn.addEventListener('click', startQuiz)

    nextBtn.addEventListener('click',()=>{
        currentQuestionIndex++
        if(currentQuestionIndex<questionss.length){
            showQuestion()
        }
        else{
            showResult()
        }
    })

    function showResult(){
        questionContainer.classList.add('hidden')
        resultContainer.classList.remove('hidden')
        scoreDisplay.textContent=`${score}out of ${questionss.length}`
    }
    function startQuiz() {
        startBtn.classList.add('hidden')
        resultContainer.classList.add('hidden')
        questionContainer.classList.remove('hidden')
        showQuestion()
        console.log("Hello workd");

    }
    restartBtn.addEventListener('click',()=>{
        score = 0
        resultContainer.classList.add('hidden')
        startQuiz()
    })

    function showQuestion() {
        nextBtn.classList.add('hidden')
        questionText.textContent = questionss[currentQuestionIndex].question
        choicesList.innerHTML = ""
        questionss[currentQuestionIndex].choices.forEach(choice => {
            const li = document.createElement('li')
            li.textContent = choice
            li.addEventListener('click', () => selectAnswer(choice))
            choicesList.appendChild(li)
        })
    }
    function selectAnswer(choice) {
        console.log("hello");
        
        const correctAnswer = questionss[currentQuestionIndex].answer
        if (choice === correctAnswer) {
            score++
        }
        nextBtn.classList.remove("hidden")
    }
})  