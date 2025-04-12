function SetUserName(username){
    //complex DB callls
    this.username=username
    console.log("called")
}

function createUser(username,email,password){
    SetUserName.call(this,username)//we need to explicit call SetUserName using .call
                              //pass this parameter
    this.email=email;
    this.password=password;
}
const chai=new createUser("chai","chai@fb.com","123")
console.log(chai);//->{ email: 'chai@fb.com', password: '123' }
                 //SetUserName is called but  not set