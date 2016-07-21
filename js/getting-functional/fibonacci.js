// fib(n)
// Return the nth number of the Fibonacci sequence.

// http://en.wikipedia.org/wiki/Fibonacci_number

// Example Input

// var number = 7;

// Example Output

// 13

function fibCheck(n) {
  var fibSeq = [];
  fibSeq[0] = 0;
  fibSeq[1] = 1;
  for(var i = 2; i < 10000; i++) {
    fibSeq[i] = fibSeq[i-2] + fibSeq[i-1];
  };
  return fibSeq[n];
};

console.log(fibCheck(7))
