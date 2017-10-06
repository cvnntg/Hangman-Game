


// document.getElementById("tester").innerHTML = "Guess the Game of Thrones word";



var wordList = ["dorthraki", "dragon", "westeros", "winter", "cersei", "whitewalker", "citadel", "lanister", "kingslanding", "baratheon", "direwolf", "wildling", "danaerys" ];
var guessesLeft = 10;
var magicWord= wordList[Math.floor(Math.random()*wordList.length)];
	console.log(magicWord);
var guessedLetters = [];
var storedMagicWord = magicWord;
var totalWins = 0;
var totalLosses = 0;
document.getElementById("totalWins").innerHTML = ("Total Wins: "+ totalWins);
document.getElementById("totalLosses").innerHTML = ("Total Losses: "+ totalLosses);
var underScores = [];
	var	wordSplitUp = magicWord.split("");
	console.log(wordSplitUp)
	var wordLength = wordSplitUp.length;
	document.getElementById("wordLength").innerHTML = ("Length of word: " + wordLength);
	for (var i = 0; i<wordSplitUp.length; i++) {
				underScores.push("_");
	}
	var incorrectGuesses =[];

//Ask person if they want to play hangman
// document.getElementById("play").innerHTML = "Press Space Bar to Play";

// document.addEventListener("keydown", function(event) {
//   console.log(event.which);
//   if (event.which === 32) {
//   		return playgame();
//   }
//   else if (event !== 32) { 
//   	alert("press spacebar")
//   }
// });

// detemine whether they want to play and then begin the game or not
// document.onkeyup = function(event){
// 	var userChoice = event.key;
// 	if (userChoice === "y") {document.getElementById("play").innerHTML = "let's get started!";
// 		return playgame();
// 	// call play game function

// 		}
// 	else if 
// 		(userChoice === "n") {document.getElementById("play").innerHTML = "Boo! You're no fun. Press 'y' to play.";
		
// 		}
// 	else {document.getElementById("play").innerHTML = "you seem to have a difficult time pressing the right key, press 'y' to start"
// 		}
// 	}
// Radomly select from the wordtoguessarray, and store it as it's own "string"  by saying var wordChosen = sdklnsdn
	// function restartGameFunction {

	// }
		// if I want to create a start game functiion would I put the function inside or outside the onkeyup event(scope?)
	document.onkeyup= function(event) {
		var userGuess = event.key;
		//var userGuess = String.fromCharCode(event.keycode).toLowerCase();
		
	
		
			guessedLetters.push(userGuess);
			console.log("________________________");
			console.log(userGuess);
			console.log("guessedLetters Array: " + guessedLetters);
		

			
			//var underscoreDiv = document.getElementById("showLettersOfWord");
			//underscoreDiv.innerHTML= underScores;
			document.getElementById("showLettersOfWord").innerHTML=underScores;

			if (magicWord.indexOf(userGuess)>-1){
	//**			for (var i = 0 ; i < magicWord.length; i++) {
	//**				if (storedMagicWord[i]=== userGuess) {
					underScores[storedMagicWord.indexOf(userGuess)]= userGuess;
						document.getElementById("showLettersOfWord").innerHTML = ("MagicWord: " + underScores);
					//put in the rules for winning
					if (underScores.indexOf("_") === -1) {
	                totalWins++;
	                document.getElementById("totalWins").innerHTML = "Total Wins: "+ totalWins;
	                alert("You've won");
	                reset();
	                return;
	            	}
			}
			else {
				incorrectGuesses.push(userGuess);
				document.getElementById("guessedIncorrectLetters").innerHTML = "Incorrect Guesses: " + incorrectGuesses.join();
				guessesLeft--;
				//console.log("guesses left: " + guessesLeft);
				document.getElementById("guessesLeft").innerHTML= "Number of Guess remaining: " + guessesLeft;

				if (guessesLeft<1){
					totalLosses++;
					document.getElementById("totalLosses").innerHTML = "Total Losses: "+ totalLosses;
					alert("you lost the game!");
					reset();
					return;
				}	
			}
	}
				// //figure out how to check for duplicates, continue running a for loop on each space to put answer in there
				
				// underScores[magicWord.indexOf(userGuess)]= userGuess;
				// document.getElementById("showLettersOfWord").innerHTML = underScores;
				//console.log(underScores);

			

		
// create a function that resets the values so that you can play the game again.
	function reset(){
		magicWord= wordList[Math.floor(Math.random()*wordList.length)];
		console.log(magicWord);
		guessedLetters = [];
		wordSplitUp = magicWord.split("");
		console.log(wordSplitUp);
		wordLength = wordSplitUp.length;
		guessesLeft = 10;
		incorrectGuesses =[];
		underScores = [];
		for (var i = 0; i<wordSplitUp.length; i++) {
				underScores.push("_");
		}		
		// need to clear array of guessedLetters and guessword filled letters
		document.getElementById("guessesLeft").innerHTML= "Number of Guess left: " + guessesLeft;
		document.getElementById("wordLength").innerHTML = ("Length of word: " + wordLength);
		document.getElementById("showLettersOfWord").innerHTML=underScores;
		document.getElementById("guessedIncorrectLetters").innerHTML = "Guessed letters:  ";
		return;

	}

	    
		
		

		
		
		

	
	// decide whether you want to have a function at the end that updates or if you want to include in each other function
	// function updateHTML() {
	// 	document.getElementById("guessesLeft").innerHTML= "Number of Guess left " + guessesLeft;
	// 	document.getElementById("showLettersOfWord").innerHTML = underScores;
	// }
// count the number of guess the player has



