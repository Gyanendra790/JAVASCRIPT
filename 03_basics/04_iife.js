//Immediately Invoked Function Expression (IIFE)-After definition immediate execution

function chai(){
  console.log(`DB IS CONNECTED..`)
}
chai()//->gives DB IS CONNECTED.. as output


//Above code's IIFE version
  //named IIFE
(function chai(){
    console.log(`DB IS CONNECTED..`)
})();//-> gives DB IS CONNECTED.. as output,semicolon is mandatory here if we want to execute another iife
          //otherwise it gives error because we have to tell explicitly where to stop iife context.
//first () shows function definition
//second () shows  execution

//iife is used to avoid global scope pollution
  //simple IIFE
((name)=>{
    console.log(`DB2 IS CONNECTED ${name}`)
})("Gyanendra")//gives DB2 IS CONNECTED Gyanendra as output