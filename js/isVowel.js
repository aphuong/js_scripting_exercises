  // 3. Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
  
console.log("----------", "Exercise 3", "----------");

var vowels = [ "a", "e", "i", "o", "u"];

function isVowel(character){
  for(var i = 0; i < vowels.length; i++){
    if(character == vowels[i]){
      return true;

    }else{
      return false;
    }
  }
}

console.log(isVowel("l"));