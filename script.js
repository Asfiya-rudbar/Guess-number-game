let randomNum = Math.floor(Math.random() * 50) + 1;

function check() {
    let userGuess = parseInt(document.getElementById('guessno').value); 
    let message = document.getElementById('comment');

    if (userGuess === randomNum) {
        message.textContent = `Congratulations! You guessed the number ${randomNum}`; 
        message.style.color = "green";
    } else if (userGuess > randomNum) {
        message.textContent = "Your guess is too high! Try Again."; 
        message.style.color = "red";
    } else if (userGuess < randomNum) {
        message.textContent = "Your guess is too low! Try Again."; 
        message.style.color = "red";
    }
}

function refresh() {
    randomNum = Math.floor(Math.random() * 50) + 1;
    document.getElementById('guessno').value = ""; 
    document.getElementById('comment').textContent = "";
}