// Exercise 2-9
// ------------

// Make this function return the longest word in the input string. If the input
// string is empty then return an empty string.
// If multiple words have the same length, return the last one that matches.

// Example
//   longestWord("hey hello morning") returns "morning"

// HINTS:
//  - You'll need to use the split string method
//  - `forEach` might be helpful

function longestWord(str) {
  if(typeof str === 'string') {
    let strArr = str.split(' ');
    let longestWord = strArr[0];
    let characterCount = strArr[0].length;

    for(let i=1; i<strArr.length; i++) {
      if(strArr[i].length >= characterCount){
        characterCount = strArr[i].length;
        longestWord = strArr[i];
      }
    }
    return longestWord;
  }
  return undefined;
}

// We need 5 test cases

expect(longestWord('this is a phrase'), 'phrase');
expect(longestWord('this is a phrase with abcdef'), 'abcdef');
expect(longestWord('this is a phrase with 5555555'), '5555555');
expect(longestWord(42), undefined);
expect(longestWord(['this is a phrase']), undefined);


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
