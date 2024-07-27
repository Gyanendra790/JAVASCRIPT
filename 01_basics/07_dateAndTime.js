let date=new Date();
console.log(date)//->2024-02-25T17:13:14.195Z
console.log(date.toString())//->Sun Feb 25 2024 22:43:14 GMT+0530 (India Standard Time)
console.log(date.toDateString())//->Sun Feb 25 2024
console.log(date.toLocaleString())//->25/2/2024, 10:43:14 pm
console.log(typeof date)//->object

let myCreatedDate=new Date("2024-12-23")
console.log(myCreatedDate.toDateString())//->Mon Dec 23 2024
