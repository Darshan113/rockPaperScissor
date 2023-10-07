


const game = () => {
    const choices = ['rock','paper','scissor']
    const getComputerChoice = (choices) => {
       let compSelection = Math.floor(Math.random() * choices.length)
       return choices[compSelection]
    }
    
    let userScore = 0 , compScore = 0

    const playRound = (userSelection,compSelection) =>{
        userSelection = userSelection.toLowerCase();
        compSelection = compSelection.toLowerCase()
        if(userSelection == compSelection){
            return 'It\'s TIE'
        }else if( (userSelection == "rock" && compSelection == "scissor") || 
                  (userSelection == "scissor" && compSelection == "paper") ||
                  (userSelection == "paper" && compSelection == "rock")
        ){
            userScore += 1
            return `You Win : ${userSelection} beats ${compSelection}`
        }else {
            compScore += 1
            return `You Lose : ${compSelection} beats ${userSelection}`
        }
    }
    
    while(1){
        if(userScore == 5 || compScore == 5){
            if(userScore == 5)
               console.log('you win this whole game') 
            else
              console.log('you lose this whole game')
            break
        }else{
            let userSelection = prompt('you select : (select from rock , paper , scissor) ')
            let compSelection = getComputerChoice(choices)
            console.log(playRound(
                userSelection , compSelection
            ))
            console.log(`user score : ${userScore}  AND comp score ${compScore}`)
        }
    }

}

game()