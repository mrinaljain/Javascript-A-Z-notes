let obj1 = {
  name: "halwa",
  class: 10,
};

let obj2 = {
  lastName: "puri",
  city: "sanawad",
};

// copy content from source to destination
let ans = Object.assign(obj1, obj2, {});
console.log(ans);
