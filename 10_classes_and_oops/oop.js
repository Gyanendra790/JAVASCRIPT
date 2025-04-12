//object literal:-collection of properties and methods
const user={
    username:"Gyanendra",
    loginCount:8,
    signedIn:"true",

    getUserDetails:function(){
        console.log("Got user details from database");
        //console.log(`Username : ${username}`);//->username not defined error comes
                                              //because inside fxn scope there is no username
                                              //there we need to give their current context
        console.log(`Username : ${this.username}`)//->Gyanendra(it will take value from current context)
                                                  //this give current context
        console.log(this)//->  {
                         //      username: 'Gyanendra',
                         //      loginCount: 8,
                         //      signedIn: 'true',
                         //      getUserDetails: [Function: getUserDetails]
                         //      }                                                                    
    }
}
console.log(user.getUserDetails());
console.log(this)//->{} - empty object because it has empty global context




//constructor fxn i.e. new keyword
//new keyword allows to create multiple instances from one object literal
function User(username,logincount,isLoggedIn){
    this.username=username     //LHS is variable and RHS is value passed inside variable
    this.logincount=logincount
    this.isLoggedIn=isLoggedIn

    this.greeting=function(){
        console.log(`Welcome ${this.username}`);
    }

    return this //now object is passed on(it is implicitly returned ,we need not to return this explicitly)
}

//const userOne= User("Gyanendra",12,true)
//console.log(userOne);//if there are only one user then we can access all
//const userTwo=User("Molu",87,false)
//console.log(userOne)//Now all its value will override  with userTwo

//constructor function will always give new instance or copy(it will not affect the previous one)
//Therefore above four lines are written as
const userOne=new User("Gyanendra",12,true);
const userTwo=new User("Molu",87,false);
console.log(userOne)//no overridden is done
console.log(userTwo)

console.log(userOne.constructor)//->it will give reference of userOne


//Few lines about new keyword
//->When we use new keyword,first empty object is created-{}
//->Then construction function is called
//->arguments are injected into this keyword
//->Now we get all values inside object