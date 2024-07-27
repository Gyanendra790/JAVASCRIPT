let score=33

console.log(typeof score) //results number
console.log(typeof(score)) //results number
//above two lines are same

//*************************** CONVERSION ****************************** */

//string conversion
let stringScore=String(score)
console.log(typeof(stringScore)) //results string

//number conversion
let num1=Number("123")
let num2=Number("abc123")
let num3=Number(null)
let num4=Number(undefined)
let num5=Number(true)
console.table([typeof(num1),typeof(num2),typeof(num3),typeof(num4),typeof(num5)])//results all numbers
console.table([num1,num2,num3,num4,num5])//num1=123, num2=NaN, num3=0, num4=NaN, num5=1

//boolean conversion
//0->false,1->true
//""->false,"Gyanendra"->true

//************************* OPERATIONS ********************************** */

