function Word(letterArray){
    this.letterArray = letterArray;
}
var citiesArray = [];
var wordsArray = ["chicago", "detroit", "dallas", "seattle", "oakland", "missoula", "springfield", "atlanta", "miami", "houston","phoenix"];
for (var i=0;i<wordsArray.length;i++){
    
    
citiesArray.push(wordsArray[i]);
test = citiesArray[i].split(" ");
console.log(test);



}
