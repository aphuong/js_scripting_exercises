// 7. Represent a small bilingual lexicon as a Javascript object in the following fashion {"merry":"god", "christmas":"jul", "and":"och", "happy":gott", "new":"nytt", "year":"år"} and use it to translate your Christmas cards from English into Swedish.

console.log("----------", "Exercise 7", "----------");

var lexicon = {
  "merry" : "god",
  "christmas" : "jul",
  "and" : "och",
  "happy" : "gott",
  "new" : "nytt",
  "year" : "år"
};

var card = "merry christmas and happy new year";
var swedishAry = [];
var swedishCard;

function translateCard(card){
  cardAry = card.split(" ");
  console.log(cardAry);

  for(i in cardAry){
    var swedishWord = lexicon[cardAry[i]]
    swedishAry.push(swedishWord);
  }

  swedishCard = swedishAry.join(" ");
}

translateCard(card);
console.log(swedishCard);