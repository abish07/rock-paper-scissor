let choices = document.querySelectorAll(".element");
let usersdata = document.querySelector("#value1");
let compdata = document.querySelector("#value2");
let result = document.querySelector("#result");
let uservalue = document.querySelector("#uservalue");
let comvalue = document.querySelector("#comvalue");
let modeHeader = document.querySelector("#mode-heading");
let reset = document.querySelector(".reset");
const params = new URLSearchParams(window.location.search);
const mode = params.get('mode');
let userScore = 0;
let comScore = 0;
let gameOver = false;
if (mode === "best3") {
  modeHeader.textContent = " Best of 3";
} else if (mode === "best5") {
  modeHeader.textContent = " Best of 5";
} else {
  modeHeader.textContent = " Normal Mode";
}

choices.forEach((element) => {
  element.addEventListener("click", () => {
    if(gameOver) return;
    const userchoice = element.id;
    const compchoice = getcomputerchoice()
    handleClick(userchoice , compchoice);
    bestOfmode();
  });
});
function getcomputerchoice(){
  const choices = ["rock", "paper", "scissor"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}
function handleClick(userchoice,compchoice){
  uservalue.textContent = userchoice;
  comvalue.textContent = compchoice;
  if(userchoice==compchoice){
    console.log("Its a tie");
    result.textContent= "Its a tie";
  }
  else if((userchoice=="scissor" && compchoice=="paper") ||
  (userchoice=="paper" && compchoice=="rock") ||
  (userchoice=="rock" && compchoice=="scissor")){
  userScore++;
  console.log("Userscore = "+ userScore);
  usersdata.textContent = userScore;
  result.textContent= "user won";
}
else{
  comScore++;
  console.log("Userscore = "+ comScore);
  compdata.textContent = comScore;
  result.textContent= "Computer won";
  }
}
function bestOfmode() {
  if (mode === "normal") return;
  const winLimit = mode === "best3" ? 2 : 3;
   if (userScore === winLimit || comScore === winLimit) {
    gameOver = true;
    result.textContent =userScore > comScore? "🎉 YOU WON THE GAME!": "😞 COMPUTER WON THE GAME!";
  }
}
reset.addEventListener("click", ()=>{
  gameOver=false;
  userScore=0;
  comScore=0;
  usersdata.textContent = userScore;
  compdata.textContent = comScore;
  result.textContent = "Result";
  uservalue.textContent = "";
  comvalue.textContent = "";
})
