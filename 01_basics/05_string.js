const name="Gyanendra"
const repoCount=9

//console.log(name+repoCount+"Hello") //output->Gyanendra9Hello(not recommended)

//use string interpolation
console.log(`My name is ${name} and i have ${repoCount} repositories`)

//other way to declare string
const otherName=new String("Gyanendra")//using object
console.log(otherName[0]);//->G
console.log(otherName.toUpperCase());//->GYANENDRA
console.log(otherName.charAt(0)); //->G
console.log(otherName.__proto__);//-->it returns empty object but it is not empty in real,you can see it inside browser

console.log(otherName.length)

//some methods of proto
console.log(otherName.toLowerCase())
console.log(otherName.toUpperCase())
console.log(otherName.indexOf('a'))//gives first index
console.log(otherName.lastIndexOf('a'))//gives last index
console.log(otherName.substring(1,4))//output->yan (from starting index to last index-1),if you give -ve index ,then substring consider -ve value as 0
console.log(otherName.slice(1,4))//output->yan (it is same as substring but it also takes -ve index to take reverse of string)
console.log(otherName.replace('G','g'))//output->gyanendra

let newStr="     Gyanendra    "
console.log(newStr.trim())//output->Gyanendra(it will remove starting space and ending space of the string)

let str="my-name-is-Gyanendra"
console.log(str.split('-'))//output->['my','name','is','Gyanendra'] (it will split the string from -)

