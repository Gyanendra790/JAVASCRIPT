//map will also take callback fxn as parameters which includes condition/updation
//it will automatically return values

const myNummbers=[1,2,3,4,5,6,7,8,9,10]
// const newNums=myNummbers.map((num)=>num+10)
// console.log(newNums);//->[ 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 ]

//chaining
const newNums = myNummbers
                          .map( (num)=> num*10)
                          .map( (num)=>num+1)
                          .filter( (num)=> num>30)
console.log(newNums)  //->[31, 41, 51,  61,71, 81, 91, 101]   
//filter return true or false
//map return anything like expression,values etc

