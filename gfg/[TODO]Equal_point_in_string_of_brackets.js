/*
Given a string str of opening and closing brackets '(' and ')' only. The task is to find an equal point. An equal point is an index (0-based) such that the number of closing brackets on the right from that point must be equal to the number of opening brackets before that point.
*/

let str1 = "(())))(";

const findIndex = (str) => {
  let n = str.length;
  // outer loop for starting point
  for (let i = 0; i < n; i++) {
    const center = i;
    // 2 inner loop for counting in both directions
    let rightStart = center + 1;
    let closingBracketCount = 0;
    if (center < n-1) {
      for (let j = rightStart; j < n; j++) {
        const elementj = str[j];
        if (elementj === ")") {
          closingBracketCount++;
        }
      }
    }

    let leftStart = center - 1;
    let openingBracketCount = 0;
    if (center > 0) {
      for (let k = leftStart; k >= 0; k--) {
        const elementk = str[k];
        if (elementk === "(") {
          openingBracketCount++;
        }
      }
    }

    if (closingBracketCount === openingBracketCount) {
      return center;
      break;
    }
  }

  // finally checking count if equal return that index
};

console.log(findIndex(str1));


// USe prefix sum to solve