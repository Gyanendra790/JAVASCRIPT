/**
 Date will counted from 1st January 1970 in JavaScript
 */

let date=new Date();
console.log(date)//->2024-02-25T17:13:14.195Z
console.log(date.toString())//->Sun Feb 25 2024 22:43:14 GMT+0530 (India Standard Time)
console.log(date.toDateString())//->Sun Feb 25 2024
console.log(date.toLocaleString())//->25/2/2024, 10:43:14 pm
console.log(typeof date)//->object

let newDate=new Date(2024,0,23,22,55)
console.log(newDate.toLocaleString())//->23/1/2024, 10:55:00 pm (month in js starting from 0)

let myCreatedDate=new Date("2024-12-23")
console.log(myCreatedDate.toDateString())//->Mon Dec 23 2024
console.log(myCreatedDate.getMonth())//output->11 (because month is starting from 0 in js)
console.log(myCreatedDate.getDay())
console.log(myCreatedDate.getYear())

let myTimeStamp=Date.now()
console.log(myTimeStamp)//->it will give value in millisecond from 1 jan 1970
console.log(Math.floor(myTimeStamp/1000))//->in seconds