let  cartItems = ['book', 'bat', 'ball', 'bus'];
let  nameOfPerson = "Halwa Puri";
// array prototype 
Array.prototype.getFirstCharacter = function(arg) {
   let ansArr = [];
   for (let i = 0; i < this.length; i++) {
      let firstChar = this[i][0]; 
      ansArr.push(firstChar);
   }
   console.log(arg);
   return  ansArr;
}

String.prototype.firstLetterUppercase = function () {
   console.log('Nahi karna' + this + 'Ko change' );
}

// Normal way to call function
// var firstCharOfCart = getFirstCharacter(cartItems);


// calling function after defining inside Array prototype

// var firstCharOfCart = cartItems.getFirstCharacter('This is the argument that I sent');

// console.log(firstCharOfCart);

nameOfPerson.firstLetterUppercase();