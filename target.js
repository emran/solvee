// function twoSum(nums, target_num) {
//   var temp = [];
//   var indexnum = [];

//   for (var x = 0; x < nums.length; x++) {
//     console.log('Num ->', temp[nums[x]])
//     if (temp[nums[x]] != null) {
//       index = temp[nums[x]];
//       indexnum = [index, x];
//       break;
//     } else {
//       temp[target_num - nums[x]] = x;
//     }
//     // console.log('temp => ', temp, indexnum);
//   }
//   return indexnum;
// }

// console.log(twoSum([10, 20, 40, 50, 60, 70], 50));
class User {

  constructor(name) {
    this.name = name;
  }

  sayHi() {
    console.log(this.name);
  }
  get name() {
    return this._name;
  }

  set name(value) {
    if (value.length < 4) {
      alert("Name is too short.");
      return;
    }
    this._name = value;
  }
}

// Usage:
let user = new User("John");
console.log(user.name);