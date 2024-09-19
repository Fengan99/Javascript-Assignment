const textField0 = document.getElementById("text0");

textField0.innerHTML = "Kolla detta";
textField0.style.color = 'gold';




//KNAPPEN

const button0 = document.getElementById("button0");
button0.addEventListener("click", () => {
  textField0.innerHTML = "Hej då";
});

