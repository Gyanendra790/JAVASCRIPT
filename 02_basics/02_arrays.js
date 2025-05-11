let marvel_heroes=["captain","thor","ironman","blackwidow"]
let indian_heroes=["nagraj","doga","shaktiman"]

// marvel_heroes.push(indian_heroes)
// console.log(marvel_heroes)//['captain', 'thor', 'ironman',  'blackwidow', [ 'nagraj', 'doga', 'shaktiman' ]] ->it push array inside array
// console.log(marvel_heroes[4][2])//->it gives shaktiman as output( at index 4 there is array and inside that array at index 2 is shaktiman)

//let heroes=marvel_heroes.concat(indian_heroes)
//console.log(heroes)//-> [ 'captain', 'thor', 'ironman', 'blackwidow', 'nagraj 'doga','shaktiman' ]
                    //->it will combine both array in a single array and return new array

//push:-it gives result in the pushed array.
//concat:-it gives result in the new array.

//spread operator(...)                    
let heroes=[...marvel_heroes,...indian_heroes]
console.log(heroes)//-> [ 'captain', 'thor', 'ironman', 'blackwidow', 'nagraj 'doga','shaktiman' ]

//flat(depth) :-returns a new array will all sub-array elements concatenated into it recursively upto the specified depth.
let arr=[1,2,3,[4,5,6],[7,8,[9,10]]]
let newArr=arr.flat(Infinity)//-> [1,2,3,4,5,6,7,8,9,10] ->it will convert all arrays into single array using depth
console.log(newArr)

console.log(Array.isArray("Gyanendra"))//->false:- it checks it is array or not.
console.log(Array.from("Gyanendra")) // -> it will convert into array of characters ['G','y','a','n','e','n','d','r','a']
console.log(Array.from({name:"Gyanendra"}))//->[] it will return empty array because it doesn't understand between array of key or array of value

let score1=300
let score2=200
let score3=400
console.log(Array.of(score1,score2,score3))// [ 300, 200, 400-> it will return new array from set of elements