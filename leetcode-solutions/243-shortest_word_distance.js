/*
Given a list of words and two words word1 and word2, return the shortest distance between these two words in the list.
*/
let words = ["practice", "makes", "perfect", "coding", "makes"];
let wordOne = "makes"; //"makes"
let wordTwo = "coding"; //"coding"
// 3 // 1
// vml uds aih du vml uds

const shortestDistance = function (s, word1, word2) {
  let start = -1;
  let end = -1;
  let minDistance = Infinity;

  for (let i = 0; i < s.length; i++) {
    const element = s[i];

    if (element === word1) {
      start = i;
    }

    if (element === word2) {
      end = i;
    }

    if (start !== -1 && end !== -1) {
      minDistance = Math.min(minDistance, Math.abs(end - start));
    }
  }

  console.log(minDistance === Infinity ? -1 : minDistance);

};

shortestDistance(words, wordOne, wordTwo);


// Intution

/*
find the word one  set start
find another word set end

later print the diffrence
*/