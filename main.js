


// const game = () => {
//     const choices = ['rock','paper','scissor']
//     const getComputerChoice = (choices) => {
//        let compSelection = Math.floor(Math.random() * choices.length)
//        return choices[compSelection]
//     }
//     const determineResult = (playerSelection , compSelection) => {
//         if(playerSelection == compSelection){
//             return 'It\'s TIE'
//         }else if( (playerSelection == "rock" && compSelection == "scissor") || 
//                   (playerSelection == "scissor" && compSelection == "paper") ||
//                   (playerSelection == "paper" && compSelection == "rock")
//         ){
//             playerScore += 1
//             return `You Win : ${playerSelection} beats ${compSelection}`
//         }else {
//             compScore += 1
//             return `You Lose : ${compSelection} beats ${playerSelection}`
//         }
//     }
//     let playerScore = 0 , compScore = 0

//     const playRound = (playerSelection,compSelection) =>{
//         playerSelection = playerSelection.toLowerCase();
//         compSelection = compSelection.toLowerCase()
//         return determineResult(playerSelection,compSelection)
//     }
    
    
//     while(1){
//         if(playerScore == 5 || compScore == 5){
//             if(playerScore == 5)
//                console.log('you win this whole game') 
//             else
//               console.log('you lose this whole game')
//             break
//         }else{
//             let playerSelection = prompt('you select : (select from rock , paper , scissor) ')
//             let compSelection = getComputerChoice(choices)
//             console.log(playRound(
//                 playerSelection , compSelection
//             ))
//             console.log(`player score : ${playerScore}  AND comp score ${compScore}`)
//         }
//     }

// }

// game()

const roundResult = document.querySelector('#roundresult')
const FinalResult = document.querySelector('#finalResult')
const player = document.querySelector('#player span')
const computer = document.querySelector('#computer span')


    let playerScore = 0 , compScore = 0
    const choices = ['rock','paper','scissor']
    const getComputerChoice = (choices) => {
       let compSelection = Math.floor(Math.random() * choices.length)
       return choices[compSelection]
    }

        const determineResult = (playerSelection , compSelection) => {
        if(playerSelection == compSelection){
            roundResult.textContent = "It\' TIE"
        }else if( (playerSelection == "rock" && compSelection == "scissor") || 
                  (playerSelection == "scissor" && compSelection == "paper") ||
                  (playerSelection == "paper" && compSelection == "rock")
        ){
            playerScore += 1
            roundResult.textContent = `You Win : ${playerSelection} beats ${compSelection}`
        }else {
            compScore += 1
            roundResult.textContent =  `You Lose : ${compSelection} beats ${playerSelection}`
        }
      player.textContent = playerScore
      computer.textContent = compScore
      if(playerScore == 5 || compScore == 5){
            if(playerScore == 5)
                FinalResult.textContent = "🎉🎉 YOU WON 🎉🎉"
            else
            FinalResult.textContent = "😤😤 YOU LOSE 😤😤"
        }
      
    }

const playRound = (btn) =>{
    // get choices
   const playerChoice = btn.textContent.toLowerCase()
   const computerChoice = getComputerChoice(choices).toLowerCase()
   determineResult(playerChoice,computerChoice)

}

const restart = () =>{
    roundResult.textContent =  ``
    FinalResult.textContent = ''
    playerScore = 0
    compScore = 0
    player.textContent = '0'
    computer.textContent = '0'
}



