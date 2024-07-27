console.log(2>1) //true
console.log(2>=1) //true
console.log(2<=1) //false
console.log(2==1) //false
console.log(2!=1) //true

console.log("2">1) //true -> string is converted into number here

console.log(null>0) //false
console.log(null==0) //false
console.log(null>=0) //true
/*comparisons convert null into number i.e. 0 
and == works differently.
The reason is that an equality check == and comparisons ><>=<= work differently
Comparisons convert null to a number,treating it as 0.

*/

console.log(undefined==0) //false
console.log(undefined>0)  //false
console.log(undefined<0)  //false
//undefined results false in all above cases

console.log("2"==2) //true -> == checks values
console.log("2"===2)//false -> === checks datatypes as well as values


