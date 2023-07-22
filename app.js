const compChoice = document.getElementById('computer-choice')
const yourChoice = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const playButton = document.getElementById('play')
const choices = document.getElementsByName('choice')
const possibleChoices = ['rock', 'paper', 'scissors']

choices.forEach((c) => {
    c.addEventListener('click', () => {
        playButton.disabled = false
    })
})

playButton.addEventListener('click', (e) => {
    const buttonsArray = Array.prototype.slice.call(choices, 0)
    const isClicked = buttonsArray.filter((b)=> b.checked)
    addTextToSpan(yourChoice, isClicked[0].id);
    const randChoice = generateComputerChoice()
    showResult(isClicked[0].id, randChoice)
    e.target.disabled = true;
    choices.forEach((b)=> {
        b.checked = false;
    })
})

function generateComputerChoice() {    
    const randomNumber = Math.floor(Math.random() * possibleChoices.length)
    const computerChoice = possibleChoices[randomNumber]
    addTextToSpan(compChoice, possibleChoices[randomNumber])
    return computerChoice
}

function addTextToSpan(spanControl, text) {
    while(spanControl.firstChild) {
        spanControl.removeChild(spanControl.firstChild)
    }
    spanControl.appendChild(document.createTextNode(text))
}

function showResult(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        addTextToSpan(resultDisplay, 'tied')
    }
    else if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            addTextToSpan(resultDisplay, 'you lost')       
        }
        else if (computerChoice == 'scissors') {
            addTextToSpan(resultDisplay, 'you won')
        }
    }
    else if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
            addTextToSpan(resultDisplay, 'you lost')       
        }
        else if (computerChoice == 'rock') {
            addTextToSpan(resultDisplay, 'you won')
        }
    }
    else if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
            addTextToSpan(resultDisplay, 'you lost')       
        }
        else if (computerChoice == 'paper') {
            addTextToSpan(resultDisplay, 'you won')
        }
    }
}