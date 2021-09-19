const questions = [
    {
        question: "Which of these fabrics usually has a lower carbon footprint? <br>(Hint: it can be organic and is biodegradable!)",
        optionA: "Nylon",
        optionB: "Polyester",
        optionC: "Fleece",
        optionD: "Cotton",
        correctOption: "optionD",
        
    },

    {
        question: "What’s the best way to shrink your carbon footprint?",
        optionA: "Buy eco friendly products",
        optionB: "Use less and buy less too!",
        optionC: "Wear smaller shoes",
        optionD: "All of the above",
        correctOption: "optionB"
    },

    {
        question: "What is the most potent greenhouse gas?",
        optionA: "Nitrous oxide",
        optionB: "Carbon dioxide",
        optionC: "Methane",
        optionD: "Fluorinated gases",
        correctOption: "optionD"
    },

    {
        question: "How much have global average temperatures<br> increased in the last century?",
        optionA: "4.4 degrees Fahrenheit",
        optionB: "0.6 degrees Fahrenheit",
        optionC: "1.4 degrees Fahrenheit",
        optionD: "1 degrees Fahrenheit",
        correctOption: "optionC"
    },

    {
        question: "How much have sea levels risen in the past 100 years?",
        optionA: "16 inches",
        optionB: "12 inches",
        optionC: "4 inches",
        optionD: "7 inches",
        correctOption: "optionD"
    },

    {
        question: "What is the main cause of the extinction of many living species?",
        optionA: "Human activities",
        optionB: "Changes in climate",
        optionC: "Natural catastrophes",
        optionD: "Can't say",
        correctOption: "optionA"
    },

    {
        question: "Which of the following contributes least to your carbon footprint?",
        optionA: "Driving a car to the shops",
        optionB: "Taking a plane",
        optionC: "Riding a bike to college",
        optionD: "All of the above",
        correctOption: "optionC"
    },

    {
        question: "Which of the following activities contributes<br> the most to carbon emissions globally?",
        optionA: "Energy supply",
        optionB: "Forestry",
        optionC: "Transport",
        optionD: "Agriculture",
        correctOption: "optionA"
    },

    {
        question: "Which of these countries has the highest per capita carbon dioxide emissions?",
        optionA: "US",
        optionB: "India",
        optionC: "China",
        optionD: "Austrailia",
        correctOption: "optionD"
    },

    {
        question: "Why should people be concerned about sustainable transportation?",
        optionA: "For the environment",
        optionB: "For human health reasons",
        optionC: "To save money",
        optionD: " All of the above ",
        correctOption: "optionD"
    },

    {
        question: "Approximately how many gallons of fuel <br>are burned each year by idling vehicles?",
        optionA: "2.5 billion",
        optionB: "1 million ",
        optionC: "6 billion",
        optionD: "7 million",
        correctOption: "optionC"
    },

    {
        question: "Replacing a clogged air filter can increase your mileage by:",
        optionA: "10%",
        optionB: "1%",
        optionC: "2%",
        optionD: "2.5%",
        correctOption: "optionA"
    },


    {
        question: "How are warming ocean temperatures impacting <br>whales, fish, & other marine mammals?",
        optionA: "They are not as hungry because its so hot",
        optionB: "Their migratory patterns are changing",
        optionC: "Warmer water makes them sleepy",
        optionD: "Summer seems longer so fish are schooling less",
        correctOption: "optionB"
    },

    {
        question: "How can extreme events like hurricanes, drought,<br> & wildfires impact energy infrastructure? ",
        optionA: "Water shortages",
        optionB: "Power outages",
        optionC: "Higher electricity & gas prices",
        optionD: "All of the Above",
        correctOption: "optionD"
    },

    {
        question: "Of the following, the most impactful action you can take<br> to reduce your carbon footprint ?",
        optionA: "Eat a plant-based diet",
        optionB: "Drive a hybrid car",
        optionC: "Hang your clothes to dry",
        optionD: "Turn off your lights more often",
        correctOption: "optionA"
    },

    {
        question: "How much of the world’s food goes to waste each year?",
        optionA: "1/10 of total food produced goes to waste",
        optionB: "1/8 of total food produced goes to waste",
        optionC: "1/3 of total food produced goes to waste",
        optionD: "1/2 of total food produced goes to waste",
        correctOption: "optionC"
    }

]


let shuffledQuestions = [] 

function handleQuestions() { 
    while (shuffledQuestions.length <= 9) {
        const random = questions[Math.floor(Math.random() * questions.length)]
        if (!shuffledQuestions.includes(random)) {
            shuffledQuestions.push(random)
        }
    }
}


let questionNumber = 1 
let playerScore = 0  
let wrongAttempt = 0 
let indexNumber = 0 

function NextQuestion(index) {
    handleQuestions()
    const currentQuestion = shuffledQuestions[index]
    document.getElementById("question-number").innerHTML = questionNumber
    document.getElementById("player-score").innerHTML = playerScore
    document.getElementById("display-question").innerHTML = currentQuestion.question;
    document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
    document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
    document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
    document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;

}


function checkForAnswer() {
    const currentQuestion = shuffledQuestions[indexNumber]
    const currentQuestionAnswer = currentQuestion.correctOption 
    const options = document.getElementsByName("option"); 
    let correctOption = null

    options.forEach((option) => {
        if (option.value === currentQuestionAnswer) {
           
            correctOption = option.labels[0].id
        }
    })

    
    if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
        document.getElementById('option-modal').style.display = "flex"
    }

    
    options.forEach((option) => {
        if (option.checked === true && option.value === currentQuestionAnswer) {
            document.getElementById(correctOption).style.backgroundColor = "SeaGreen"
            playerScore++ 
            indexNumber++ 
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }

        else if (option.checked && option.value !== currentQuestionAnswer) {
            const wrongLabelId = option.labels[0].id
            document.getElementById(wrongLabelId).style.backgroundColor = "red"
            document.getElementById(correctOption).style.backgroundColor = "SeaGreen"
            wrongAttempt++ 
            indexNumber++
            
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }
    })
}



function handleNextQuestion() {
    checkForAnswer() 
    unCheckRadioButtons()
    
    setTimeout(() => {
        if (indexNumber <= 9) {

            NextQuestion(indexNumber)
        }
        else {
            handleEndGame()
        }
        resetOptionBackground()
    }, 1000);
}


function resetOptionBackground() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = ""
    })
}


function unCheckRadioButtons() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}


function handleEndGame() {
    let remark = null
    let remarkColor = null

    
    if (playerScore <= 3) {
        remark = "Keep Updating Yourself ! "
        remarkColor = "red"
    }
    else if (playerScore >= 4 && playerScore < 7) {
        remark = "Good !"
        remarkColor = "orange"
    }
    else if (playerScore >= 7) {
        remark = "Excellent!"
        remarkColor = "SeaGreen"
    }
    const playerGrade = (playerScore / 10) * 100

    //data to display to score board
    document.getElementById('remarks').innerHTML = remark
    document.getElementById('remarks').style.color = remarkColor
    document.getElementById('grade-percentage').innerHTML = playerGrade
    document.getElementById('wrong-answers').innerHTML = wrongAttempt
    document.getElementById('right-answers').innerHTML = playerScore
    document.getElementById('score-modal').style.display = "flex"

}

//closes score modal, resets game and reshuffles questions
function closeScoreModal() {
    questionNumber = 1
    playerScore = 0
    wrongAttempt = 0
    indexNumber = 0
    shuffledQuestions = []
    NextQuestion(indexNumber)
    document.getElementById('score-modal').style.display = "none"
}

//function to close warning modal
function closeOptionModal() {
    document.getElementById('option-modal').style.display = "none"
}

