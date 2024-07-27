/****************NUMBER*********** */
const num=400
console.log(num)//->it results 400

const score=new Number(400)
console.log(score)//-> it results [Number:400] & it comes with many properties
console.log(score.toString().length)

/***************MATH******************* */
console.log(Math.abs(-78))//->78
console.log(Math.PI)//->3.141592653589793
console.log(Math.random())//-> it gives output between 0 and 1
console.log((Math.random()*10)+1)//-> it gives output between 1 and 10

const min=10
const max=20
console.log(Math.floor((Math.random()*(max-min+1)) + min))//-> it gives output between min and max