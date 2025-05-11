var c=300
let a=400
if(true)
{
    let a=10//value of 'a' become 10 in this block scope not outside this scope
    const b=20
    var c=30//Now value of 'c' become 30 either we use locally or globally.
}
//console.log(a)//400
//console.log(b)// b is not defined
console.log(c)//30->the value which is defined globally is affected by local value in var
              //but in case of let and const it will only affect locally not globally

//nested scoping-closures:-insiders access outsiders
function one(){
    const username = "Gyanendra"

    function two(){
        const website = "Youtube" 
        console.log(username)
    }
   // console.log(website);//not accessed here because of local scope
    console.log("2nd function")
    two()
}
//console.log("1st function")
//one()

/*******************INTERESTING********************* */
//TWO WAYS TO DECLARE FXNS
console.log(addone(5))//it gives output as 6->it can be access before initialization
function addone(num){
    return num +1
}

console.log(addTwo(5))// Cannot access 'addTwo' before initialization
const addTwo = function(num){
    return num + 2
}
