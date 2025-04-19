const nested = {
  user: {
    name: "Mrinal",
    address: {
      city: "Brunswick",
      zip: "08816",
    },
  },
  active: true,
};
/*
{
  user.name:
  user.address.city
  user.address.zip 
  active: true,
};
*/

const flattern = function (obj, parentKey = "", ans = {}) {
  Object.entries(obj).forEach(([key, value]) => {
    let newKey = parentKey ? `${parentKey}.${key}` : key;

    if (typeof value === "object") {
      return flattern(value, newKey, ans);
    } else {
      ans[newKey] = value;
    }
  });
  return ans;
};

const simpleNested = {
  user: {
    name: "Mrinal",
    address: "14 azad road",
    active: true,
  },
};
console.table(flattern(nested));
