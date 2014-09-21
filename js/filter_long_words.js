// 9. Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.

console.log("----------", "Exercise 9", "----------");

var wordAry = ["apple", "banana", "watermelon", "peach"];
var integer = 5;
var newAry = [];

function filterLongWords(wordAry){
  for(var i = 0; i < wordAry.length; i++){
    if(wordAry[i].length > integer){
      newAry.push(wordAry[i]);
    }
  }
}

filterLongWords(wordAry);
console.log(newAry);