

const textField0 = document. getElementById("text0");
textField0.innerHTML = "Hej på dig"

const buttonnumber0 = document.getElementById("button0");






//Buttons
const button0 = document.getElementById("button0");
button0.addEventListener("click", () => {
textField0.innerHTML = "Hej då";
});


let score = 0


//What is going to happen in what sequence

buttonnumber0.addEventListener("click", () => {
  increaseScore(1);
  updateScore();
});

function increaseScore() {
  score++;
}

function updateScore() {
  textField0.innerHTML = score;
}


