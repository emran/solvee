

function reverse(string) {
  let reverseString = [];
  if(!string) {
    return '';
  }
  for (let i = string.length-1; i >= 0; i--) {
    reverseString.push(string[i]);
  }
  return reverseString.join('');
}

console.log(reverse('emran'))