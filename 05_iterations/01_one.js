//for loop
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
// }

//ctrl + D = to find all duplicates

//BELOW ARE ARRAY/STRING SPECIFIC LOOPS:-
//for of
const arr=[1,2,3,4,5]
for (const num of arr) {
    console.log(num)//-> 1 2 3 4 5
}
const greetings = "Hello World"
for (const greet of greetings) {
    console.log(`Each character is ${greet}`)//->it will print all characters of greetings
    
}

//maps:-stores unique value in the form of key-value  by maintaining the order of insertion.
const map=new Map()
map.set('IN',"India")
map.set('USA',"United States Of America")
map.set('FR',"France")
//console.log(map);//Map(3) {
                 //  'IN' => 'India',
                 // 'USA' => 'United States Of America',
                 //  'FR' => 'France'
                 // }
//for (const key of map) {
   // console.log(key)//->[ 'IN', 'India' ]
                       // [ 'USA', 'United States Of America' ]
                       // [ 'FR', 'France' ]
 //                   } -> it prints individual key-value pair if we apply for of loop on map.

 for(const [key,value] of map) //here we destructure each entry to separate key and value.
 {
  //  console.log(key,':-',value)//->IN :- India
                                 //  USA :- United States Of America
                                 //  FR :- France
 }

 const myObject={
    game1:"cricket",
    game2:"football",
    game3:"badminton"
 }
 for (const value of myObject) {
    console.log(value)//->myObject is not iterable error comes in case of for of loop
 }


 

