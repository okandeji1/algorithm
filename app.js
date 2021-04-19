function fizzBuzz(n) {
    let three = 3;
        let five = 5;
    // Write your code here
    for(var i = 1; i <= n; i++){
        if(i % three == 0 && i % five > 0 ){
            console.log("Fizz");
        }else if(i % five == 0 && i % three > 0){
            console.log("Buzz")
        }else if(i % three == 0 && i % five == 0){
            console.log("FizzBuzz")
        }else {
            console.log(i)
        }
    }

}

// Complete the compareTriplets function below.
// Compare two array together
function compareTriplets(a, b) {
let alice = 0;
let bob = 0;
let result;
for(var i = 0; i < a.length; i++){
    if(a[i] > b[i]){
        alice++;
    }else if(a[i] < b[i]){
        bob++;
    }else {
        console.log("No point")
    }
}
return result = [alice, bob];
}

// Combinations
function factorial(a,b) {
  var product = a,i = a;
 
  while (i++< b) {
    product*=i;
  }
  return product;
}


function combinations(n, r) 
{
  if (n==r) 
  {
    return 1;
  } 
  else 
  {
    r=(r < n-r) ? n-r : r;
    return factorial(r+1, n)/factorial(1,n-r);
  }
}

function allOutcomes(n){
    let result = [];
    for(var i = 1; i < n; i++){
        result.push(combinations(n, i));
    }
    console.log(result);
}

