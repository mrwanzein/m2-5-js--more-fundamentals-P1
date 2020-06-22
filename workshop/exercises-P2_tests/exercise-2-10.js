// Exercise 2-10
// -------------

// Make this function return the input string, capitalized.
// f("hello world"); // Hello World
// f("ALL YOUR BASE ARE BELONG"); // All Your Base Are Belong

// HINT:
//  - Write a function that capitalizes a single word.
//  - Split the input sentence into an array of words
//  - Iterate over each word, calling your "capitalize word" function
//  - Join the results into a string

function makeIntoTitle(sentence) {
  if(typeof sentence === 'string') {
    let allLowerCase = sentence.toLowerCase();
    let strArr = allLowerCase.split(' ');
    return strArr.map((x) => x.replace(x[0], x[0].toUpperCase())).join(' ');
  }
  return undefined
}

// Add 6 total (5 more)

expect(
  makeIntoTitle('the longest road is a great song'),
  'The Longest Road Is A Great Song'
);
expect(
  makeIntoTitle('THIS iS KinDa MESSy'),
  'This Is Kinda Messy'
);
expect(
  makeIntoTitle(42),
  undefined
);
expect(
  makeIntoTitle(['THIS iS KinDa MESSy'][0]),
  'This Is Kinda Messy'
);
expect(
  makeIntoTitle(function(){console.log('hello')}),
  undefined
);
expect(
  makeIntoTitle(function(){return 'THIS iS KinDa MESSy';}),
  undefined
);

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
