// 4. Write a function translate() that will translate a text into "rövarspråket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".

console.log("----------", "Exercise 4", "----------");

function translate(wordToTranslate){
  //first catch the word
  //initialize a translated word var
  var tword = "";
  //initialize a temporary letter var
  var tletter = "";

  //break the word into array
  wordToTranslate = wordToTranslate.split("");

  //console.log(wordToTranslate); 
  //console.log(wordToTranslate.length);

  //iterate through the array and compare each element with a vowel
  for(i = 0; i < wordToTranslate.length; i++){
    
    if(isVowel(wordToTranslate[i])){
      //if the element is a vowel then add it to tword and do not process
      tword = tword + wordToTranslate[i];
    }else{
      //if the element is not a vowel then store element's value in a variable
      tletter = wordToTranslate[i];
      tword  = tword + tletter + "o" + tletter;
    }     
  }
  return tword;
}

function isVowel(letter) {
    return ['a', 'e', 'i', 'o', 'u'].indexOf(letter) !== -1
}

//console.log(isVowel("b"));
console.log(translate("banana"));

