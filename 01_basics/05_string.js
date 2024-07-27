const name="Gyanendra"
const repoCount=9

//console.log(name+repoCount+"Hello") ->not recommended

//use string interpolation
console.log(`My name is ${name} and i have ${repoCount} repositories`)

//other way to declare string
const otherName=new String("Gyanendra")
console.log(otherName[0]);//->G
console.log(otherName.toUpperCase());//->GYANENDRA
console.log(otherName.charAt(0)); //->G
console.log(otherName.__proto__);//-->it returns empty object but it is not empty in real