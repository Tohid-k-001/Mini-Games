let userScore = 0;
let compScore = 0;


// use the class contisn same classes
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

const draw = () =>{

    console.log("You won !");
    msg.innerText = " Game Draw. Play again ";
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore ++;
        userScorePara.innerText = userScore;
        // console.log("You won !");
        msg.innerText = `You Won. Your ${userChoice} beats ${compChoice}.`;
        msg.style.backgroundColor = "green";

    }else{
        compScore++;
        compScorePara.innerText = compScore;
        // console.log("You Loose");
        msg.innerText = `You Lost. ${userChoice} beats your ${compChoice}.`;
        msg.style.backgroundColor = "red";

    }
}; 

const playGame = (userChoice) => {
    console.log("User choice = ",userChoice);

    const compChoice = genCompChoice();

    console.log("User choice = ",compChoice);

    if(userChoice === compChoice){
        draw();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "scissors" ? true : false ;
        }else if (userChoice === "paper"){
            userWin = compChoice === "rock" ? true : false ;
        }else{
            userWin = compChoice === "paper" ? true : false;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});

