var Letter = require("/letter.js");

function Word(letterArray){
    this.letterArray = letterArray;
    this.testWord = [];
    this.makeWord = function() {
        for (var i=0;i<wordsArray.length;i++){
            var let = new Letter(wordArray[i]);
            this.testWord.push(let);
        }
    }
    this.showWord = function() {
        var wordDisplay = [];
        for (var i=0;i<this.testWord.length;i++){
            wordDisplay.push(this.testWord[i].displayLet());
        }
        return wordDisplay.join(" ");
    }
    this.checkGuess = function(myGuess) {
        for (var i=0;i<this.testWord.length;i++){
            this.testWord[i].guess(myGuess);
        }
    }
}

module.exports = Word;






