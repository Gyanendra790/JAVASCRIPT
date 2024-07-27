//for loop
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
// }

//for of
const arr=[1,2,3,4,5]
for (const num of arr) {
   // console.log(num)
}
const greetings = "Hello World"
for (const greet of greetings) {
    //console.log(`Each character is ${greet}`)
    
}

//maps:-stores unique value in the form of key-value pair
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
 //                   }

 for(const [key,value] of map)
 {
  //  console.log(key,':-',value)//->IN :- India
                               // USA :- United States Of America
                               //  FR :- France
 }

 const myObject={
    game1:"cricket",
    game2:"football",
    game3:"badminton"
 }
 for (const value of myObject) {
    console.log(value)//->myObject is not iterable
 }


 

