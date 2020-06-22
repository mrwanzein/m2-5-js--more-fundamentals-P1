// Exercise 2-6
// ------------

// Step 1
// Write a function that
// - accepts an array.
// - The array has 3 elements.
// - The first element of the array is a string that represents an operation.
// - If the operation is
//      - "add", return the sum of the two other elements of the array.
//      - "sub" return their difference.
//      - "mult" return their product.
//  - Anything else return undefined.

// For example:
// f(["add", 10, 20]); // 30
// f(["mult", 2, 3]); // 6
// f(["spoof", 10, 10]); // undefined

function calculator(arr) {
  switch(arr[0]) {
    case 'add':
      return arr[1] + arr[2];
    case 'sub':
      return arr[1] - arr[2];
    case 'mult':
      return arr[1] * arr[2];
    
      default:
        return undefined;
  }
}

// Step 2
// We need 8 total test cases. The first two is provided.
expect(calculator(['mult', 2, 4]), 8);
expect(calculator(['add', 2, 4]), 6);
expect(calculator(['sub', 2, 4]), -2);
expect(calculator(['spoofed', 2, 4]), undefined);
expect(calculator([{operation: ['add']}, 2, 4]), undefined);
expect(calculator([function(){console.log('hey');}, 2, 4]), undefined);
expect(calculator([42, 2, 4]), undefined);
expect(calculator([['add'][0], 2, 4]), 6);

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
