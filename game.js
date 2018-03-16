
        //Create the variables.
        //letters = this is an array of the letters to randomly choose a secret letter for the game.
        //wins = this is the number of times user guessed the right number. Incremental.
        //loses = this is the number of times user did not guessed the right number. Incremental.
        //Guesses = this is the player's guess and count as a letter letter being pressed.
        //guessesRemaining = this is the total number of tries a player has to play.
        //guessesDone = this is the total number of times the player has tried.


        var letters = ["a", "b", "c", "d", "e", "f", "g", "J", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
        var wins = 0;
        var losses = 0;
        var guessesRemaining = 12;
        var guessesDone = (12 - wins - losses);
        console.log("Wins: " + wins + " Losses: " + losses + " GuessesRemaining: " + guessesRemaining + " GuessesDone: " + guessesDone);

        //Run the game loop once player press on a letter.
        console.log('outside the event handler');
        document.onkeyup = function (event) {

            //This is the computer's randomly generated letterToGuess.

            var letterToGuess = letters[Math.floor(Math.random() * letters.length)];

            //Determine which key was pressed. Update number of guesses.
            var guesses = event.key;
            var keySelected = event.keyCodess;

            //Check the player's guess against the computer. Use if logic to find out result of the game and update score board with incremental wins or losses.
            //letterToGuess

            //Continue the game loop until guessRemaining is less than 0.
            console.log('Gesses Remaining: ', guessesRemaining);
            if (guessesRemaining > 0) {
                guessesRemaining--;
                if (guesses === letterToGuess) {
                    wins++;
                    // console.log('guessesRemaining: ', guessesRemaining);
                    // console.log('guesses: ', guesses)
                    // console.log('letterToGuess: ', letterToGuess)
                } else if (guesses != letterToGuess) {
                    losses++;
                    // console.log('guesses: ', guesses)
                    // console.log('letterToGuess: ', letterToGuess)
                    // console.log('losses: ', losses);
                }
            } else {
                alert('Game Over!');
                location.reload ()
            }
            //When guesses is the same as letterToGuess, add 1 count to wins using ++ and minus 1 count from guessRemaining.
            
            var html =
                "<p>You chose: " + guesses + "</p>" +
                "<p>The computer chose: " + letterToGuess + "</p>" +
                "<p>Wins: " + wins + "</p>" +
                "<p>Losses: " + losses + "</p>" +
                "<p>Remaining tries " + guessesRemaining + "</p>";

            // Set the inner HTML contents of the #game div to our html string
            document.querySelector("#game").innerHTML = html;
        
        }