//object literals

let myObj={
    "name":"Gyanendra",
    "full name":"Gyanendra Pratap Shukla",
    "age":24,
    "course":"MCA"  
}

//elements of object can be accessed in two ways
console.log(myObj["full name"])//->it cannot be accessed with dot operator because key contains space
console.log(myObj.course)

//update object values
myObj.name="Molu"
console.log(myObj["name"])

// //freeze object values
// Object.freeze(myObj)
// myObj["full name"]="Molu Shukla"//-> values not changed because myObj is freezed
// console.log(myObj["full name"])

myObj.greeting=function()
{
    console.log("Hi, hello everyone")
}
console.log(myObj.greeting)// -> it gives Hi, hello everyone as output
console.log(myObj.greeting())// -> it gives undefined as output