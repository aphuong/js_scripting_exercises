// 6. Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".

console.log("----------", "Exercise 6", "----------");

var s;

function reverse(s){
  return s.split("").reverse().join("");
}

console.log(reverse("jag testar"));