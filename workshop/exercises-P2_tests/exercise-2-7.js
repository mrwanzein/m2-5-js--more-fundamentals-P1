// Exercise 2-7
// ------------

// Step 1
// - The function input is an array.
// - The first element of the array is a string. The second is a number.
// - Make this function return the string repeated as many times as specified by the second element of the array.
// - If a negative number or zero is specified, return an empty string. If any invalid parameters are supplied return undefined.

// f(["foo", 3]) // "foofoofoo"
// f(["fo", 3]) // "fofofo"
// f(["foo", -1]) // ""

function repeat(arr) {
  let str = '';
  if(typeof arr[0] === 'string' && typeof arr[1] === 'number'){
    if(arr[1] <= 0) return str;
    for(let i=0; i<arr[1]; i++) str += arr[0];
    return str;
  }
  return undefined;
}

// We need 7 test cases.
// Don't forget to test all of the question parameters

expect(repeat(["foo", 3]), 'foofoofoo');
expect(repeat(["fo", 3]), 'fofofo');
expect(repeat([34, -1]), undefined);
expect(repeat(["foo", true]), undefined);
expect(repeat([function(){console.log('hey')}, -1]), undefined);
expect(repeat(["foo", [0, 23]]), undefined);
expect(repeat([['tesing'][0], 3]), 'tesingtesingtesing');

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
