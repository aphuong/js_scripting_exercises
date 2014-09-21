  // 2. Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.

console.log("----------", "Exercise 2", "----------");

function maxOfThree(a, b, c){
  if(a > b && a > c){
    console.log(a + " is the largest of the three numbers.");
  } else if( b > a && b > c){
    console.log(b + " is the largest of the three numbers.");
  } else{
    console.log(c + " is the largest of the three numbers.");
  }
}

maxOfThree(2, 4, 6);
