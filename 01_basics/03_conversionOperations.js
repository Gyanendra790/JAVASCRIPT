let score=33

console.log(33)           //results number
console.log(typeof score) //results number
console.log(typeof(score)) //results number
//above two lines are same

//*************************** CONVERSION ****************************** */

//string conversion
let stringScore=String(score)
console.log(stringScore)
console.log(typeof(stringScore)) //results string

//number conversion
let num1=Number("123")  //output->123
let num2=Number("abc123")//output->NaN
let num3=Number(null)//output->0
let num4=Number(undefined)//output->NaN
let num5=Number(true)//output->1
console.table([typeof(num1),typeof(num2),typeof(num3),typeof(num4),typeof(num5)])//results all number
console.table([num1,num2,num3,num4,num5])//num1=123, num2=NaN, num3=0, num4=NaN, num5=1
console.log(String(-1.3))//output->-1.3

//boolean conversion
let isLoggedIn=1
let booleanIsLoggedIn=Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)//output->true
console.log(Boolean(null))//output->false
console.log(Boolean(undefined))//output->false
console.log(Boolean(1.23))//output->true
console.log(Boolean(0.23))//output->true
console.log(Boolean(-0.78))//true
//0->false,1->true
//""->false,"Gyanendra"->true


//************************* OPERATIONS ********************************** */
 let value=3
 let negValue=-value
 console.log(negValue);//output -> -3

 console.log(2+4)//output->6
 console.log(2-4)//output->-2
 console.log(2*4)//output->8
 console.log(2**4)//output->16(2 raise to the power 4)
 console.log(4/2)//output->2

 let str1="Gyanendra"
 let str2=" Pratap"
 let str3=str1+str2
 console.log(str3)//output->Gyanendra Pratap

 console.log("1"+2)//output->12(if there is any string then whole converted into string)
 console.log(1+"2")//output->12
 console.log("1"+2+2)//output->122
 console.log(1+2+"2")//output->32(when string comes whole become string but first it treat as numbers)
 console.log(1+2+"3"+"4"+5+5)//output->33455
 console.log(true)//output ->true
 console.log(+true)//output->1
 //console.log(true+)//invalid syntax
 console.log(+"")//output->0
 console.log(+null)//output->0
 console.log(+undefined)//output->NaN

 let n1,n2,n3
 n1=n2=n3=2+2//all has value 4

 let gameCounter=100
 gameCounter++//read from mdn
 console.log(gameCounter)//output->101
 ++gameCounter//read from mdn
 console.log(gameCounter)//output ->101

 //Prefix and Postfix MDN

