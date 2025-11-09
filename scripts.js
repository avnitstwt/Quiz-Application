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

    ]
    let currentQuestionIndex = 0
    let score = 0

    startBtn.addEventListener('click', startQuiz)

    nextBtn.addEventListener('click', () => {
        currentQuestionIndex++

        if (currentQuestionIndex < questionss.length) {
            console.log('following if');
            console.log(questionss.length);
            console.log(currentQuestionIndex);
            showQuestion()
        }
        else {
            console.log('following if');
            console.log(questionss.length);
            console.log(currentQuestionIndex);
            showResult()
            // DELETE THE LINES THAT WERE HERE
        }
    })

    function showResult() {
        questionContainer.classList.add('hidden')
        resultContainer.classList.remove('hidden')
        scoreDisplay.textContent = `${score}out of ${questionss.length}`
    }
    function startQuiz() {
        console.log("s");
        startBtn.classList.add('hidden')
        console.log("s");
        resultContainer.classList.add('hidden')
        console.log("s");
        questionContainer.classList.remove('hidden')
        console.log("s");
        showQuestion()
        console.log("s");
        console.log("Hello workd");
        console.log("s");

    }
    restartBtn.addEventListener('click', () => {
        score = 0
        console.log(1)
        currentQuestionIndex = 0
        console.log(2)
        resultContainer.classList.add('hidden')
        console.log(3)
        startQuiz()
        console.log(4)
        currentQuestionIndex = 0
        console.log(5)
        // log("hello world")
    })

    function showQuestion() {
        console.log("ss");

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