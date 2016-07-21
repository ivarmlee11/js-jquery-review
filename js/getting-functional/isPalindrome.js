// isPalindrome(string)
// Checks if a string is a palindrome, and returns true or false

// Example Input

// var str = 'racecar';

// Example Output

// false

function isPalindrome(string) {
  stringChecker = string.split('').reverse().join('');
  stringChecker2 = string
  console.log(stringChecker);
  console.log(stringChecker2);
  if (stringChecker === stringChecker2) {
    console.log('this string is a palindrome');
  };
};

isPalindrome('dad');
