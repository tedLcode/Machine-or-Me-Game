// Selecting the guessnumber and result
var guessnumber = document.getElementById("guessnumber");
var result = document.getElementById("result");
var randomNumber = Math.floor(Math.random() * 10) + 1;
var score = document.getElementById("score");
var fullScore = 10;

function check() {
  var enterednumber = Number(guessnumber.value); // Convert input to number

  if (randomNumber === enterednumber) {
    result.textContent = "GOAT! You guessed it right!";
    result.style.color = "green";
    result.style.transform = "scale(1.2)";
    setTimeout(() => {
      result.style.transform = "scale(1)";
    }, 300);
    alert("Finally Me");
  } else {
    fullScore = fullScore - 1;

    if (fullScore > 0) {
      score.textContent = "Your Score is " + fullScore;
      result.textContent = "COAT! Try again!";
      result.style.color = "red";

      // Add a shake effect
      result.classList.add("shake");
      setTimeout(() => {
        result.classList.remove("shake");
      }, 500);
    } else {
      result.textContent = "GAME OVER! The number was " + randomNumber;
      result.style.color = "black";
      guessnumber.disabled = true;
    }
  }
}
