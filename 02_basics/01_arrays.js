/* 
-Array should be resizable in javascript.
-It may store combination of elements of different  datatypes.
-In Javascript,when we do copy operations on array it will create shallow copies(shares the same references).
-SHALLOW COPY:-When you change either the source or the copy,changes is reflected in both.
-DEEP COPY:-Changes reflected only in the changed ones.
*/


let myArr=[1,2,3,4,5]
console.log(myArr)//-> it gives [ 1, 2, 3, 4, 5 ] output

const newArr=new Array(1,2,3,4)
console.log(newArr)//->it gives [ 1, 2, 3, 4 ] output

//Array Methods
newArr.push(5)//->it will push 5 at last index in array
console.log(newArr)//[ 1, 2, 3, 4, 5 ]

newArr.pop()//it with pop last element of array
console.log(newArr)//->[ 1, 2, 3, 4 ]

newArr.unshift(0)//->it will add 0 at first index(time consuming operation for large sized array)
console.log(newArr)//->[ 0, 1, 2, 3, 4 ]

newArr.shift()//->it will remove first element of array(time consuming operation for large sized array)
console.log(newArr)//[ 1, 2, 3, 4 ]

console.log(newArr.includes(5))//false -> it checks whether array contains 5 or not
console.log(newArr.indexOf(1))//-1 ->it gives index of given element,if element is not present it returns -1

console.log(newArr.join())// 1,2,3,4 ->it converts array into string separated by operator(if it is array then the output will be [1,2,3,4])
console.log(typeof newArr)//string
/*slice:-it will works like substring i.e. it gives element from first given position to second given position-1
         and it will not affect the original array*/
let myArr1=[1,2,3,4,5]
let myNewArr1=myArr1.slice(1,4)
console.log(myArr1)// [ 1, 2, 3, 4, 5 ]
console.log(myNewArr1)// [ 2, 3, 4 ]

/*splice:-it gives index from first given position to last given position
          and it will remove extracted elements from original array*/
let myArr2=[1,2,3,4,5]
let myNewArr2=myArr2.splice(1,4)
console.log(myArr2)// [ 1 ]
console.log(myNewArr2)// [ 2, 3, 4, 5 ] 