function isPalindrome(string) {
  if(!string) {
    return true;
  }
  for (let i = 0; i < parseInt(string.length/2); i++) {
    if (string[i] !== string[string.length - (i+1)]) {
      return false;
    }
  }
  return true;
}

// rotator => 7 
// 3

console.log(isPalindrome('rotator'));
console.log(isPalindrome('rotatoy')); 