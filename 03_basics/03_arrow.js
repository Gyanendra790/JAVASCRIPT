//this keyword is used to refer current context
const user = {
    username:"Gyanendra",
    price: 999,
    welcomeMessage: function(){
console.log(`${this.username}, welcome to website`);
console.log(this)
    }
}

user.welcomeMessage()//->Gyanendra, welcome to website
user.username="Sam"
user.welcomeMessage()//->Sam, welcome to website
          
 //console.log(this)// gives {} as output in node but in browser it gives window as output

function chai()
{
    const username = "Prabhakar";
    console.log(this.username)//undefined:- 'this' works correctly in object only
}
// Arrow fxn syntax of above fxn
const chai = () =>
{
    const username = "Prabhakar";
    console.log(this.username)//undefined:- 'this' works correctly in object only
}

//When you print 'this' inside any function trhen it will print global values.
//When you print 'this' outside fxn it will print {}.

//ARROW FXN
   //first way -explicit return
//  const addTwo = (num1,num2) => {
//     return num1+num2
//  }
   // 'or' as implicit return
   const addTwo = (num1,num2) => (num1+num2)//the value that has to be return  is written inside () after arrow without using 'return' keyword

   //if curly braces is used then return keyword must be written
   //if parenthesis is used then return keyword is not used

 console.log(addTwo(45,56))//101 as output
