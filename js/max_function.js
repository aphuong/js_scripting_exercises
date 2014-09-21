// 1. Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.

console.log("----------", "Exercise 1", "----------");

function max(x, y){

  if(x == y){
    console.log(x + " and " + y + " are equal");
  } else if(x > y){
    console.log(x + " is the larger number");
  } else {
    console.log(y + " is the larger number");
  }
}

max(4, 10);