//this keyword is used to refer current context
const user = {
    username:"Gyanendra",
    price: 999,
    welcomeMessage: function(){
console.log(`${this.username}, welcome to website`);
console.log(this)
    }
}
// user.welcomeMessage()//->Gyanendra, welcome to website
                             //{
                             //username: 'Gyanendra',
                             //price: 999,
                             //welcomeMessage: [Function: welcomeMessage]
                             //}
// user.username="Sam"
// user.welcomeMessage()//->Sam, welcome to website
                       //  {
                       //   username: 'Sam',
                       //   price: 999,
                       //   welcomeMessage: [Function: welcomeMessage]
                       //}

 //console.log(this)// gives {} as output in node but in browser it gives window as output


 //ARROW FXN
   //first way"explicit return
//  const addTwo = (num1,num2) => {
//     return num1+num2
//  }
   // 'or' as implicit return
   const addTwo = (num1,num2) => (num1+num2)//return statement is written inside () after arrow

   //if curly braces is used then return keyword must be written
   //if parenthesis is used then return keyword is not used

 console.log(addTwo(45,56))//101 as output
