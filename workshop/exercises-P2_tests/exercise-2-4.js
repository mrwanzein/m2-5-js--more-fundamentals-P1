// Exercise 2-4
// ------------

// Write a function that returns the letter at the specified position in the
// string. If no such letter exists, it should return undefined.
//
// For example:
// getLetterAtIndex("hello", 1); // e
// getLetterAtIndex("", 4);      // undefined
// getLetterAtIndex("abc", 0);   // a

function getLetterAtIndex(str, index) {
  if(str === '' || typeof str !== 'string') return undefined;
  return str[index];
}

// Add 6 more test cases
expect(getLetterAtIndex('hello', 4), 'o');
expect(getLetterAtIndex('goodbye', 0), 'g');
expect(getLetterAtIndex('wordiness', 5), 'n');
expect(getLetterAtIndex('ALLCAP', 2), 'L');
expect(getLetterAtIndex(123, 0), undefined);
expect(getLetterAtIndex(function(){console.log('hello')}, 0), undefined);
expect(getLetterAtIndex('{number: 34}', 9), '3');

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
