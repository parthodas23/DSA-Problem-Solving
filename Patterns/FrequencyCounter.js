// function freqCount(arr1, arr2) {
//   for (let i = 0; i < arr1.length; i++) {
//     let a = arr2[i] == arr1[i] ** 2;
//     if (a) {
//       console.log(true);
//     } else {
//       console.log(false);
//     }
//   }
// }

// freqCount([1, 2, 3], [1, 4, 9]);

function same(arr1, arr2) {
  // Step 1: Check if both arrays have the same length
  if (arr1.length !== arr2.length) {
    return false;
  }

  // Step 2: Count values in arr1
  let count1 = {};
  for (let i = 0; i < arr1.length; i++) {
    let value = arr1[i];
    if (count1[value] === undefined) {
      count1[value] = 1;
    } else {
      count1[value]++;
    }
  }
  console.log(count1);
  // Step 3: Count values in arr2
  let count2 = {};
  for (let i = 0; i < arr2.length; i++) {
    let value = arr2[i];
    if (count2[value] === undefined) {
      count2[value] = 1;
    } else {
      count2[value]++;
    }
  }

  // Step 4: Loop through count1 using for...in to access keys directly
  for (let num in count1) {
    // console.log(num);
    let square = num * num;

    // Check if square exists in count2
    if (count2[square] === undefined) {
      return false;
    }
    console.log(count2[square]);

    // Check if frequency matches
    if (count2[square] !== count1[num]) {
      return false;
    }
  }

  // Step 5: Everything matches
  return true;
}

// Test cases
console.log(same([1, 2, 3, 2], [9, 1, 4, 4])); // true
// console.log(same([1, 2, 3], [1, 9])); // false
// console.log(same([1, 2, 1], [4, 4, 1])); // false
