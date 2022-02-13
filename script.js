let tiedGames = 0
let playerWon = 0
let computerWon = 0
let result =""

const resetGame = () => {
    tiedGames = 0
    playerWon = 0
    computerWon = 0
}

const computerPlay = () => {
    const randomInt = Math.floor(Math.random() * 3)
    const options = ["Rock", "Paper", "Scissors"]
    return options[randomInt]
}

const playRound = (playerSelection, computerSelection) => {
    if (playerSelection === computerSelection) {
        tiedGames += 1
        return result = `Tie game! Both players chose ${playerSelection}.`;
    };
    if ((playerSelection === "Rock" && computerSelection === "Scissors") || (playerSelection === "Paper" && computerSelection === "Rock") || (playerSelection === "Scissors" && computerSelection === "Paper")) {
        playerWon += 1 
        return  result = `You Win! ${playerSelection} beats ${computerSelection}.`
    };
    computerWon += 1
    return result = `You Lose! ${computerSelection} beats ${playerSelection}.`
}

const playerPlay = () => {
    let play = prompt("Choose: Rock, Paper or Scissors?")
    play = String(play)
    while ((play.toLowerCase() != "rock") && (play.toLowerCase() != "paper") && (play.toLowerCase() != "scissors")) {
    // while (play.toLowerCase() != "rock") {
        play = prompt(`${play} is not a valid option.\nChoose: Rock, Paper or Scissors?`)
        play = String(play)
    }
    return capitalize(play);
}

const capitalize = (word) => {
    word = String(word);
    word = word.toLowerCase();
    let firstLetter = word.slice(0, 1);
    word = word.replace(firstLetter, firstLetter.toUpperCase());
    return word;
}

const game = () => {
    resetGame()
    for (let i = 0; i < 5; i++) {
        playRound(playerPlay(), computerPlay())
        console.log(result)
    }
    if (playerWon > computerWon) return `Congratulations! You won ${playerWon} to ${computerWon}.`
    if (computerWon > playerWon) return `Oh no! You lost ${playerWon} to ${computerWon}.`
    return `Tied Game! Both players won ${playerWon} times.`
}

console.log(game())