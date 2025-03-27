/*
You are assigned to put some amount of boxes onto one truck. You are given a 2D array boxTypes, where boxTypes[i] = [numberOfBoxesi, numberOfUnitsPerBoxi]:

numberOfBoxesi is the number of boxes of type i.
numberOfUnitsPerBoxi is the number of units in each box of the type i.
You are also given an integer truckSize, which is the maximum number of boxes that can be put on the truck. You can choose any boxes to put on the truck as long as the number of boxes does not exceed truckSize.

Return the maximum total number of units that can be put on the truck.
*/
/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */

let boxTypes1 = [
  [5, 10],
  [2, 5],
  [4, 7],
  [3, 9],
];
let truckSize1 = 10;
let boxTypes2 = [
  [1, 3],
  [5, 5],
  [2, 5],
  [4, 2],
  [4, 1],
  [3, 1],
  [2, 2],
  [1, 3],
  [2, 5],
  [3, 2],
];
let truckSize2 = 35;

var maximumUnits = function (boxTypes, truckSize) {
  // put them in seperate array
  //   let boxCountArr = [];
  let unitsCountArr = [];
  let hashMap = {};
  let maxUnits = 0;
  for (let i = 0; i < boxTypes.length; i++) {
    let noOfBox = boxTypes[i][0];
    let noOfUnits = boxTypes[i][1];
    if (hashMap[noOfUnits]) {
      hashMap[noOfUnits] = hashMap[noOfUnits] + noOfBox;
    } else {
      hashMap[noOfUnits] = noOfBox;
    }
    //  boxCountArr.push(noOfBox);
    unitsCountArr.push(noOfUnits);
  }
  console.log(hashMap);

  // sort in decresing order
  //   boxCountArr.sort((a, b) => b - a);
  unitsCountArr.sort((a, b) => b - a);

  let uniqueItems = [...new Set(unitsCountArr)];

  
  //   console.log(boxCountArr);
//   console.log(unitsCountArr);
  console.log(uniqueItems);
  // now loop on the units array

  for (let i = 0; i < uniqueItems.length; i++) {
    let units = uniqueItems[i];
    let boxCount = hashMap[units];
    if (boxCount < truckSize) {
      let unitsToBeAdded = units * boxCount;
      console.log("unitsToBeAdded", unitsToBeAdded);

      maxUnits += unitsToBeAdded;
      truckSize -= boxCount;
    } else {
      let unitsToBeAdded = truckSize * units;
      console.log("unitsToBeAdded", unitsToBeAdded);
      maxUnits += unitsToBeAdded;
      break;
    }
  }

  console.log(maxUnits);
};

// maximumUnits(boxTypes1, truckSize1);
maximumUnits(boxTypes2, truckSize2);
