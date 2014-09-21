// 10. Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").

console.log("----------", "Exercise 10", "----------");

var charFreq = function(someWord){
  var FreqList = {};
  var length = someWord.length;
  for (var i = 0; i < length; i++) { 
    if (someWord.charAt(i) in FreqList){
      FreqList[someWord.charAt(i)] += +1;
      } else {
        FreqList[someWord.charAt(i)] = 1;
    }
  } 
  return FreqList;
}


console.log(charFreq("abbabcbdbabdbdbabababcbcbab"));
