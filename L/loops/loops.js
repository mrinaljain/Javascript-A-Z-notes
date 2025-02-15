const user = {
  firstName: "Mrinal",
  lastName: "Jain",
  dob: 21,
  mobile: "8871384191",
  isGood: true,
  extra: "lolololol",
};

const userTwo = {
  firstName: "Kunal",
  lastName: "Jain",
  dob: 14,
  mobile: "5454152415",
  isGood: false,
  __proto__: user,
};

// console.log(user);
// console.log(userTwo);

// for loop [Array]
// for (let i = 0; i < user.length; i++) {
//   console.log(i);
// }

//! for-in [Object]
// for (const key in userTwo) {
//   if (userTwo.hasOwnProperty(key)) {
//     console.log(`${key}: ${userTwo[key]}`);
//   }
// }

// 2
// for (const element of user) {
//   console.log(element);
// }
let keys = Object.keys(userTwo);
console.log(keys);

// keys.forEach((key) => {
//   console.log(key);
// });

// Object.values(userTwo).forEach((value) => {
//   console.log(value);
// });

// Object.entries(userTwo).forEach((entry) => {
//   console.log(entry);
// });
