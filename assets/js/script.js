// variables for the quiz
let yaynay = "unanswered";
const quizLength = 10;
let correctNum = 0;
let questionCount = 0;
const headerSection = document.getElementById("header");
const footerSection = document.getElementById("footer");
const landingSection = document.getElementById("landing-page");
const playButton = document.getElementById("button");
const newGameSection = document.getElementById("start-game");
const playerName = document.getElementById("player-name");

function startNewGame() {
    landingSection.style.display = "none";
    newGameSection.style.display = "inline-flex";
    playerName.focus();
  }
      
playButton.addEventListener("click", startNewGame);