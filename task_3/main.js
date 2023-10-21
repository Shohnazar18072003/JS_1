function checkGuess() {
  var userInput = parseInt(document.getElementById("user-input").value);
  var randomNumber = Math.floor(Math.random() * 10) + 1;
  var resultElement = document.getElementById("result");

  if (userInput === randomNumber) {
    resultElement.textContent =
      "Congratulations! You guessed the correct number!";
    resultElement.style.color = "green";
    resultElement.style.animation = "none";
  } else {
    resultElement.textContent = "Wrong guess. Try again!";
    resultElement.style.color = "red";
    resultElement.style.animation = "shake 0.5s ease-in-out";
  }
}

function resetGame() {
  document.getElementById("user-input").value = "";
  document.getElementById("result").textContent = "";
  document.getElementById("result").style.animation = "none";
}
