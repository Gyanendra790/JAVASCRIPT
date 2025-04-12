//for each loop
const coding=["js","ruby","java","python"]
//callback fxn is passed inside for each loop
//callback fxn is an anonymous fxn
coding.forEach( function (item) {
  //console.log(item)//-> js
                    // ruby
                    // java
                    // python
})

//'or' using arrow fxn
coding.forEach( (item)=> {
   // console.log(item)
})
//'or'
function printMe(item){
    console.log(item)
}
//coding.forEach(printMe)

coding.forEach( (val,idx,arr) =>{
  //  console.log(val,idx,arr)//->js 0 [ 'js', 'ruby', 'java', 'python' ]
                               //ruby 1 [ 'js', 'ruby', 'java', 'python' ]
                               //java 2 [ 'js', 'ruby', 'java', 'python' ]
                               //python 3 [ 'js', 'ruby', 'java', 'python' ]
} )


const myCoding=[
    {
        languageName: "javascript",
        languageFileName:"js"
    },
    {
        languageName: "java",
        languageFileName:"java"
    },
    {
        languageName: "python",
        languageFileName:"py"
    },
]
myCoding.forEach( (item)=>{
 console.log(item.languageName)//->javascript
                                 //java
                                 // python
})

//forEach loop does not return any value.It print undefined
//Example:const values=coding.forEach( (item) => {
 //   return item
//})
//console.log(values)=>undefined