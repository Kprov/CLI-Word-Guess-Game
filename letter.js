var userGuess = process.argv[2];

function Letter(character, guessed){
    this.character = character;
    this.guessed = guessed;
    this.toString = function (){
        if (this.guessed === true){
            console.log(this.character);
        }else {
            console.log("_");
        }
    }
    this.check = function (){

        if (userGuess === this.character){
            this.guessed = true;
        }
    }
}

var guess = new Letter("a", false);

guess.check();
guess.toString();