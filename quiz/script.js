const quiz = $(".quiz-center")[0];

qns = [
    {
        question: "What is Nepal's current import GDP?",
        options: {
            "50.8": true,
            "51.6": false,
            "51": false,
            "59.5": false,
        }
    },
    {
        question: "What is Nepal's current export GDP?",
        options: {
            "15.7": false,
            "12": false,
            "9": true,
            "11.7": false,
        }
    },
    {
        question: "What is Nepal's current Literacy rate (12 - 24 years?",
        options: {
            "59.5": false,
            "83": false,
            "92": true,
            "90.3": false,
        }
    },
    {
        question: "What is the average lifespan of a Nepalese citizen?",
        options: {
            "80.2": false,
            "72.3": false,
            "75.6": false,
            "69.7": true,
        }
    }
]

currentQn = 0;

function loadQuestion(no) {
    currentQn = no;
    qn = qns[no];
    question = qn.question;
    html = `<span class="quiz-qn">${question}</span><div class="options">`
    Object.keys(qn.options).forEach(key => {
        console.log(key);
        val = qn.options[key];
        html += `<button onclick="revealCorrect()" class="option" data-correct="${val}">${key}</button>`
    })
    quiz.innerHTML = html + `</div><button class="next"onclick="next()">Next Question</button>`
}

function revealCorrect() {
    Array.from($(".options")[0].children).forEach(child => {
        if (child.getAttribute("data-correct") == "true") child.classList.add("correct");
        else child.classList.add("incorrect");
    });
}

function next() {
    loadQuestion(currentQn + 1);
}

loadQuestion(currentQn)