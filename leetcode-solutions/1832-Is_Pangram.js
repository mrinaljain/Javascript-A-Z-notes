/*
A pangram is a sentence where every letter of the English alphabet appears at least once.

Given a string sentence containing only lowercase English letters, return true if sentence is a pangram, or false otherwise.
*/
var checkIfPangram = function (sentence) {
  //convert to map
  // check length of map
  sentence = sentence.trim();
  let freqMap = {};
  for (let i = 0; i < sentence.length; i++) {
    const element = sentence[i];

    freqMap[element] = (freqMap[element] || 0) + 1;
  }
  console.log(freqMap);

  let length = Object.keys(freqMap).length;
  console.log(length);
  if (length === 26) {
    return true;
  } else {
    return false;
  }
};

sentence1 = "thequickbr df  ownfoxjumpsoverthelazydog";
sentence2 = "leedhtsksjdh";

console.log(checkIfPangram(sentence1));
console.log(checkIfPangram(sentence2));


//intution

/*
convert to map
check length of map
if length is 26 then there are all letters return true 
else return false
*/