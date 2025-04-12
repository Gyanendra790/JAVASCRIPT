function sayMyName(){
    console.log("G")
    console.log("Y")
    console.log("A")
    console.log("N")
    console.log("E")
    console.log("N")
    console.log("D")
    console.log("R")
    console.log("A")
}
sayMyName//<-This is reference
sayMyName()//<-This is execution

//function for adding two numbers
// function addTwoNumbers(number1,number2)//at the time of definition parameters is passed
// {
//  console.log(number1 + number2) 
// }
// const result=addTwoNumbers(5,9)// at the time of calling a function arguments is passed
// console.log("Result:"+result)//gives undefined as output because function is not returning anything

function addTwoNumbers(number1,number2)
{
   return number1+number2
}
const result=addTwoNumbers(5,10)
console.log("Result:"+result)//Result:15

//other function
function loginUserMessage(username){//default value of username is written here if required e.g. username="none"
    if(username===undefined){
        return "Please enter username..."
    }
    return `${username} just logged in..`
}
const message1=loginUserMessage()
console.log(message1)//Please enter username...

const message=loginUserMessage("Gyanendra")
console.log(message)//Gyanendra just logged in..

//if more than one value is passed at the time of calling a function
//then we use rest operator(spread operator before parameters)->...
function calculateCarPrice(...num1){
    return num1
}

console.log(calculateCarPrice(200,400,500))//[ 200, 400, 500 ]

//objects in fxn
const user={
    username:"Gyanendra",
    price:"199"
}
function handleObject(anyObject){
console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`)
}
handleObject(user)//Username is Gyanendra and price is 199
//other way of passing arguments
handleObject({
             username:"Molu",
             price:"100"
})//Username is Molu and price is 100

//array in fxn
const myNewArray = [200,400,100,600]
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray))//400
//or
console.log(returnSecondValue([200,400,100,600]))//400