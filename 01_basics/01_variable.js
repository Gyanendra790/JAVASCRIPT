/**
 * let,const aur var KI KAHANI
 */

//Read about lowercase,UPPERCASE,UPPER_SNAKE_CASE,kebab-case/list-case/spinal-case
// PascalCase(UpperCamelCase),snake_case,camelCase

//always use camelCase for variable declaration
const accountId=790
var accountName="Personal"
let accountPassword="Bcrypt"
accountCity="AmbedkarNagar"//it is also correct but not recommended to use without using const or let
let accountState;//it results undefined on console without initialization
var accountInfo;//it results undefined on console without initialization
const accountNominee="friend";//--->const variable must be initialized at the time of declaration
hello=9;//------------------>it also must be initialized at the time of declaration
//accountId=800 ->constant cannot be changed

console.log(accountId);
console.table([accountId,accountName,accountPassword,accountCity,accountState])//console.table is used to display multiple data
console.table([accountState,accountInfo,accountNominee,hello])
/*
var is not recommended to use 
because it has issue in block scope and functional scope
Always use let and const
*/