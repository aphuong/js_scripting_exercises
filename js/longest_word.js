// 8. Write a function findLongestWord() that takes an array of words and returns the length of the longest one.

console.log("----------", "Exercise 8", "----------");


var wordList = ["one", "two", "three", "four"];
var longest;
var length = 0;

function findLongestWord(wordList){
  for(i in wordList){
    if(wordList[i].length > length){
      length = wordList[i].length;
      longest = wordList[i];
    }
  }
}

findLongestWord(wordList);
console.log(longest);
