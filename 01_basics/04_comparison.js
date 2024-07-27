console.log(2>1) //true
console.log(2>=1) //true
console.log(2<=1) //false
console.log(2==1) //false
console.log(2!=1) //true

console.log("2">1) //true -> 2 is converted into number

console.log(null>0) //false
console.log(null==0) //false
console.log(null>=0) //true
//comparisons convert null into number i.e. 0 and == works differently

console.log(undefined==0) //false
console.log(undefined>0)  //false
console.log(undefined<0)  //false
//undefined results false in all above cases

console.log("2"==2) //true -> == checks values
console.log("2"===2)//false -> === checks datatypes as well as values


