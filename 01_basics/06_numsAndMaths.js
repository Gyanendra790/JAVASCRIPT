/****************NUMBER*********** */
const num=400
console.log(num)//->it results 400

const score=new Number(400)
console.log(score)//-> it results [Number:400] & it comes with many properties
console.log(score.toString().length)
console.log(score.toFixed(2))//output->400.00(it will results value with two decimal places)

const otherNumber=123.8966

console.log(otherNumber.toPrecision(4))//output->123.9
console.log(otherNumber.toPrecision(3))//output->124
console.log(otherNumber.toPrecision(1))//output->1e+2

const hundreds=100000
console.log(hundreds.toLocaleString())//output->10,00,000 (US standard values with comma)
console.log(hundreds.toLocaleString('en-IN'))//indian standards

/***************MATH******************* */
console.log(Math.abs(-78))//->78
console.log(Math.PI)//->3.141592653589793
console.log(Math.random())//-> it gives output between 0 and 1
console.log((Math.random()*10)+1)//-> it gives output between 1 and 10

const min=10
const max=20
console.log(Math.floor((Math.random()*(max-min+1)) + min))//-> it gives output between min and max

console.log(Math.min(1,3,5,2,6))//output->1
console.log(Math.max(1,3,5,2,6))//output->6