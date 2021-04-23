
function findIndex(num, target) {
  for (let i = 0; i < num.length; i++) {

    for (let j = i+1; j < num.length; j++) {
      
      if((num[i] + num[j]) === target) {
        return [i, j];
      }
    }

  }
  return [];
}

console.log(findIndex([2, 15, 11, 7], 9));
