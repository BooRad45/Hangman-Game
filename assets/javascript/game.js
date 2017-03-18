// VARIABLES
      // ==========================================================================
///////////////////////////////
      // Band bank
      var bands = ["Steely Dan", "The Doobie Brothers", "Hall and Oates", "Christopher Cross", "Toto", "Kenny Loggins"];

///////////////////////////////
      //section for user guesses
      var lettersGuessed = [];

      var indexer;

      var userGuess;

      var counter = 12;



      


 

 ////////////////////////////////////////////////////////

 //Random formula to choose band from band bank
    var currentBand = bands[Math.floor(Math.random() * bands.length)];
     console.log(currentBand);



////////////////////////////////////////////////////////////////
// stores user's selected letters in answerArray
     var answerArray = [];
     for (var i = 0; i < currentBand.length; i++){
    answerArray[i] = "_";
}

// FIGURE OUT HOW THIS IS WORKING!!!!!!!!!////////////////////////////////
document.querySelector("#currentBand").innerHTML = answerArray.join(" ");

//////////////////////////////////////////////////////////////////////////
// Display the length of the word to the user.
var remainingLetters = currentBand.length;
document.querySelector("#currentBand").innerHTML = "The band you're trying to guess is " + remainingLetters + " characters long.";


 



///////////////////////////////////////////////////////////////////////
//Shows user the total number of words they have guessed correctly, starting at 0.
    var bandsGuessedRight = 0;
    document.querySelector("#wins").innerHTML = "Total bands guessed: " + bandsGuessedRight;

/////////Sets number of available guesses to user and displays it on page. 
 


    //Capture character input and store it to userGuess
    document.onkeyup = function(event) {
    userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    // console.log(userGuess);
    lettersGuessed.push(userGuess);
    document.querySelector('#guess').innerHTML = "Your guesses: " + lettersGuessed;
    document.querySelector("#guessesLeft").innerHTML = "Number of Guesses Left: " + counter;
    counter--;



 
    //Sets number of available guesses to user and displays it on page.
//Sets number of available guesses to user and displays it on page.


    if (currentBand.indexOf(userGuess) !== -1) {
        indexer = currentBand.indexOf(userGuess);
        console.log(userGuess);
        answerArray[indexer] = userGuess;
        document.querySelector("#currentBand").innerHTML = answerArray.join(" ");



    }

  };

 

 

      // // We start the game with 0 wins.
      // var wins = 0;
      // // Variable to hold the index of current band.
      // var bandsIndex = 0;
      // // Array of bands.
      // var bandsArray = [bands.b1, bands.b2, bands.b3, bands.b4, bands.b5];

      // var guessesLeft = 12;

      // var lettersGuessed = 0;

      // // FUNCTIONS  (still need to be called in Main Process)
      // // ==============================================================================

      // // Function to render bands to guess.
      // function renderBands() {
      //   // If there are still more bands to guess, render the next one.
      //   if (bandsIndex <= (bandsArray.length - 1)) {
      //     document.querySelector("#bands").innerHTML = bandsArray[bandsIndex][1];
      //   }
      //   // If there aren't any bands left, render the end game screen.
      //   else {
      //     document.querySelector("#bands").innerHTML = "Game Over!";
      //     document.querySelector("#wins").innerHTML = "Final Score: " + wins + " out of " + bandsArray.length;
      //   }
      //  }
     
      // }


      // //Function to grab letters from current band name letters and store letters in variable
      //  function currentBand () {
      //       var curBand = bandsArray[bandsIndex][0];
      //       var curBandVar = curBand.charAt(0);
      //       document.getElementById(curBandVar).innerHTML = 

    //     // }str.charAt(0)bandsArray[bandsIndex][0] {

    //   // Function that updates wins...
    //   function updateWins() {
    //     document.querySelector("#wins").innerHTML = "Wins: " + wins;
    //   }

    //   // Function to update remaining guesses ...

    //   function updateguessesLeft() {
    //     // if there are still guesses left then render number for user reference
    //     for(var i = 12; i > 0; i--){
    //     document.write(guessesLeft);
    //    }
    // }


    //   // MAIN PROCESS
    //   // ==============================================================================

    //   // Calling functions to start the game.
     

      // When the user presses a key, it will run the following function...
      // document.onkeyup = function(event) {
        
      // };


    //     // If there are no more questions, stop the function.
    //     if (bandsIndex === bandsArray.length) {
    //       return;
    //     }
    //   renderBands();
    //   updateWins();
    //   updateguessesLeft();

    //     // Determine which key was pressed, make it lowercase, and set it to the userInput variable.
    //     var userInput = String.fromCharCode(event.keyCode).toLowerCase();

    //       if (userInput === str.charAt(0)bandsArray[bandsIndex][0]; {
    //             //re-render html at bandsArray[bandsIndex[1]]     
    //       }
          
    //       else {
    //         console.log("Made it");
    //       }

          // Increment the bandsIndex variable and call the renderBands function.
        //   bandsIndex++;

        // };
