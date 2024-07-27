const accountId=790
var accountName="Personal"
let accountPassword="Bcrypt"
accountCity="AmbedkarNagar"//not recommended to use without using const or let
let accountState;//it results undefined on console
//accountId=800 ->constant cannot be changed

console.log(accountId);
console.table([accountId,accountName,accountPassword,accountCity,accountState])//console.table is used to display multiple data
/*
var is not recommended to use because it has issue in block scope and functional scope
Always use let and const
*/