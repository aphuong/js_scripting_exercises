// 5. Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.

console.log("----------", "Exercise 5", "----------");


var ary = [2, 5, 3, 2];
var total = 0;
var product = 1;

function sum(){
  for(var i in ary){
    total = total + ary[i]; 
  }
}

sum();
console.log(total);


function multiply(){
  for(var i in ary){
    product = product * ary[i];
  }
}

multiply();
console.log(product);