//Two ways to create object:-using literal and using constructor
// When we create object from literals(const JsUser = {}) then it is not singleton.
//When we create object from constructor(Object.create) then it is singleton

//object literals

const mySym = Symbol("key1")

let myObj={
    "name":"Gyanendra",
    "full name":"Gyanendra Pratap Shukla",
    [mySym] : "Mykey1",//syntax to take symbol as a key
    "age":24,
    "course":"MCA"  
}

//elements of object can be accessed in two ways
console.log(myObj["full name"])//->it cannot be accessed with dot operator because key contains space
console.log(myObj.course)
console.log(myObj.mySym);

//update object values
myObj.name="Molu"
//console.log(myObj["name"])//Molu(changes original obj)

//freeze object values
// Object.freeze(myObj)
// myObj["full name"]="Molu Shukla"//-> values not changed because myObj is freezed
// console.log(myObj["full name"])

myObj.greeting=function()
{
    console.log(`Hi, everyone I am ${this["full name"]}`)//use string interpolation to fetch dynamic value
}
//console.log(myObj.greeting)// -> it gives function (anonymous) as output
console.log(myObj.greeting())// -> it gives Hi, hello everyone as output