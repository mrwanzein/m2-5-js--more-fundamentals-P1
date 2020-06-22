// Exercise 2-3
// ------------

// This function expects an array of 2 numbers as input (e.g. [1, 2])
// Make this function return the sum of the two numbers that are passed to it.
// If anything other than an array with 2 numbers is passed, return undefined.
//
// HINT: You can use the typeof function to check the type of each element:
//   - `typeof 3` returns 'number')

function sumDigits(input) {
  let sum = 0;
  
  if(input.every((x) => {
    return typeof x === 'number'
  })) {
    input.forEach((x) => {
      sum += x;
    })

    return sum;
  }

  return undefined;
}

// Add 5 more test cases here! 7 total
expect(sumDigits([2, 5]), 7);
expect(sumDigits([-1, 0]), -1);
expect(sumDigits([345, 1234]), 1579);
expect(sumDigits([true, 0]), undefined);
expect(sumDigits([[-1, 45], 0]), undefined);
expect(sumDigits([{number: 23}, 54]), undefined);
expect(sumDigits([-1, function(){console.log('hello');}]), undefined);

/**
 * -------------------------------------------------------------------
 * ⚠️ No changes necessary below. ⚠️
 * -------------------------------------------------------------------
 */
function expect(result, value) {
  if (result === value) {
    console.log('✅ Test succeeded');
  } else {
    console.log(`⛔️ Expected “${result}” to equal “${value}”`);
  }
}
