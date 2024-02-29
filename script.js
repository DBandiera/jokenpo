const result = document.querySelector('.results')
const humanScore = document.querySelector('#human-score')
const machineScore = document.querySelector('#machine-score')

let humanScoreNumber = 0
let machineScoreNumber = 0


const playHuman = (humanChoice) => {

    playTheGame(humanChoice, playMachine())


}

const playMachine = () => {
    const choices = ['rock', 'paper', 'scissors']
    const randomNumber = Math.floor(Math.random() * 3)

    const machineArena = document.querySelector('#machine-arena')

    console.log('maquina -' + choices[randomNumber])

    if (choices[randomNumber] === 'rock') {
        machineArena.innerHTML = '&#x1F44A;'
    }

    if (choices[randomNumber] === 'paper') {
        machineArena.innerHTML = '&#x1f590;'
    }

    if (choices[randomNumber] === 'scissors') {
        machineArena.innerHTML = '&#x270C;'
    }

    return choices[randomNumber]
}

const playTheGame = (human, machine,) => {

    if (human === machine) {
        humanScoreNumber++
        machineScoreNumber++
        humanScore.innerHTML = humanScoreNumber
        machineScore.innerHTML = machineScoreNumber
        result.innerHTML = "Deu Empate!"
        
    } else if ((human === 'paper' && machine === 'rock') ||
        (human === 'rock' && machine === 'scissors') ||
        (human === 'scissors' && machine === 'paper')
    ) {
        humanScoreNumber++
        humanScore.innerHTML = humanScoreNumber
        result.innerHTML = "Você Ganhou!"
    } else {
        machineScoreNumber++
        machineScore.innerHTML = machineScoreNumber
        result.innerHTML = "Você perdeu para a Alexa!"
    }

    

}

const humanAction = (buttonActive) => {

    const humanArena = document.querySelector('#human-arena')
    

    console.log(buttonActive)


    if (buttonActive === 'rock') {
        humanArena.innerHTML = '&#x1F44A;'
    }

    if (buttonActive === 'paper') {
        humanArena.innerHTML = '&#x1f590;'
    }

    if (buttonActive === 'scissors') {
        humanArena.innerHTML = '&#x270C;'
    }

}

const namePlay = () => {
    const namePlayHuman = document.querySelector('#play-name').value
    const humanPlay = document.querySelector('#human-play')

    console.log(namePlayHuman)

    humanPlay.innerHTML = namePlayHuman
}
