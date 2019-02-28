// var userGuess = process.argv[2];

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
    this.guess = function (){

        if (userGuess === this.character){
            this.guessed === true;
        } else {
            this.guessed === false;
        }
    }
}

// var guess = new Letter("f", true);

// guess.guess();
// guess.toString();