const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');
const userCountDisplay = document.getElementById('user-count');
const compCountDisplay = document.getElementById('comp-count');
let userChoice
let computerChoice
let result
let userCount = 0
let compCount = 0

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
    buttonColor()
    scoreCount()
}) )

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1

    if (randomNumber === 1) {
        computerChoice = "rock"
    }
    if (randomNumber === 2) {
        computerChoice = "paper"
    }
    if (randomNumber === 3) {
        computerChoice = "scissors"
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
    if (computerChoice === userChoice) {
        result = "DRAW!"
    }
    if (computerChoice === 'rock' && userChoice === 'paper') {
        result = 'WINNER!'
    }
    if (computerChoice === 'rock' && userChoice === 'scissors') {
        result = 'LOSER!'
    }
    if (computerChoice === 'paper' && userChoice === 'rock') {
        result = 'LOSER!'
    }
    if (computerChoice === 'paper' && userChoice === 'scissors') {
        result = 'WINNER!'
    }
    if (computerChoice === 'scissors' && userChoice === 'paper') {
        result = 'LOSER!'
    }
    if (computerChoice === 'scissors' && userChoice === 'rock') {
        result = 'WINNER!'
    }

    resultDisplay.innerHTML = result
}

function buttonColor() {
    if (resultDisplay.innerHTML === "WINNER!") {
        document.getElementById('rock').classList.add('green-bor');
        document.getElementById('paper').classList.add('green-bor');
        document.getElementById('scissors').classList.add('green-bor');        
        document.getElementById('rock').classList.remove('red-bor');        
        document.getElementById('paper').classList.remove('red-bor');        
        document.getElementById('scissors').classList.remove('red-bor');        
        setTimeout(function() {document.getElementById('rock').classList.remove('green-bor')}, 500);
        setTimeout(function() {document.getElementById('paper').classList.remove('green-bor')}, 500);
        setTimeout(function() {document.getElementById('scissors').classList.remove('green-bor')}, 500);
        
    } else if (resultDisplay.innerHTML === "LOSER!") {
        document.getElementById('rock').classList.remove('green-bor');
        document.getElementById('paper').classList.remove('green-bor');
        document.getElementById('scissors').classList.remove('green-bor');        
        document.getElementById('rock').classList.add('red-bor');        
        document.getElementById('paper').classList.add('red-bor');        
        document.getElementById('scissors').classList.add('red-bor');        
        setTimeout(function() {document.getElementById('rock').classList.remove('red-bor')}, 500);
        setTimeout(function() {document.getElementById('paper').classList.remove('red-bor')}, 500);
        setTimeout(function() {document.getElementById('scissors').classList.remove('red-bor')}, 500);
    } else {
        return;
    }
}

function scoreCount() {
    if (resultDisplay.innerHTML === "WINNER!") {
        userCount++
        userCountDisplay.innerHTML = userCount;
    } else if (resultDisplay.innerHTML === "LOSER!") {
        compCount++
        compCountDisplay.innerHTML = compCount;
    } else {
        return;
    }
}