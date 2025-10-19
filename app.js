let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompchoice = () =>{
    // rock, paper, scissors
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const drawGame = () =>{
    console.log("Game was draw.");
}

const showWinner = (userwin, userchoice, compChoice) =>{
    if(userwin) {
        // console.log("You win!");
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win. Your ${userchoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        // console.log("You lose");
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lose. ${compChoice} beats Your ${userchoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userchoice) => {
    console.log("user choice = ", userchoice);
    // generate computer choice -> modular
    const compChoice = genCompchoice();
    console.log("comp choice = ", compChoice);

    if(userchoice === compChoice){
        // drawGame
        drawGame();
        msg.innerText = "Game was Draw, Play Again.";
        msg.style.backgroundColor = "#081b31";
    } else {
        let userwin = true;
        if(userchoice === "rock"){ /*if user choice rock */
            // so  paper, scissors are the choice of computer.
            userwin = compChoice === "paper" ? false : true;

        } 
        
        else if(userchoice === "paper"){
            // rock, scissors
            userwin = compChoice === "scissors" ? false : true;
        } 
        
        else {
            // rock, paper
            userwin = compChoice === "rock" ? false : true;
        }

        showWinner(userwin, userchoice, compChoice);
        
    }
}



choices.forEach((choice) =>{
    console.log(choice)
    choice.addEventListener("click", () =>{
        const userchoice = choice.getAttribute("id")
        console.log("choice was clicked", userchoice)
        playGame(userchoice)

    });

})