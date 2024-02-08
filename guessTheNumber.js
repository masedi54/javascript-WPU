// Generate a random number between 1 and 10
const randomNumber = Math.floor(Math.random() * 10) + 1;

// Initialize the number of attempts
let attempts = 3;

// Start the game
while (attempts > 0) {
  // Prompt the user to enter a number
  const userInput = parseInt(prompt("Guess a number between 1 and 10:"));

  // Check if the user input is a valid number
  if (isNaN(userInput) || userInput < 1 || userInput > 10) {
    alert("Invalid input. Please enter a number between 1 and 10.");
    continue;
  }

  // Check if the user guessed the correct number
  if (userInput === randomNumber) {
    alert("Congratulations! You guessed the correct number.");
    break;
  } else if (userInput < randomNumber) {
    alert("Too low. Try again.");
  } else {
    alert("Too high. Try again.");
  }

  // Decrease the number of attempts
  attempts--;
}

// Check if the user ran out of attempts
if (attempts === 0) {
  alert(`Game over. The correct number was ${randomNumber}.`);
}
