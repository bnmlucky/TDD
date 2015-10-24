
function isInt(n) {
   return n % 1 === 0;
}

function factorial(n) {
  // if n is negative return "N/A"
  if (n < 0)
    return "N/A";
  
  // if n is a fraction  return "N/A"
  if (!isInt(n))
    return "N/A";

  // if n > 10, return "too big"
  if (n > 10)
    return "too big";

  // factorial is 1*2*3...*n
  var result = 1;
  for (var i = 1; i <= n; i++) {
    result = result * i;
    //console.log(result);
  }
    
  return result;
}


// test

function test(n, expected) {
var actual = factorial(n);
if (actual === expected)
  console.log("success")
else
  console.log("failure")
}

    
test(1, 1);
test(10, 3628800);
test(-1, "N/A");
test(-10, "N/A");
test(0.5, "N/A");
test(4.5, "N/A");
test(0, 1);
test(5, 120);
test(7, 5040);
test(100, "too big");
