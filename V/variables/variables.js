//? Rule 1 : Same scope mai - Same naam se koi dusra variable nahi declare kr sakte
var naam = "Mrinal";
// let naam = "mrin";  //! Not allowed
// const naam = "mrin"; //! Not allowed

//? Rule 2 : CanNot redeclare blockscope variables (let & const)
let val = "halwa";
val = "puri"; //* overriding value of let in same scope is allowed
// let val = "puri" //! Not allowed (same name)
// const val = "samosa"; //! Not allowed (same name)

//? Re assign values in diffrent scope
let karma = "karma";
{
  karma = "new value"; //* allowed because orignal val is present in outer global scope which is accessible to internal scope
}
