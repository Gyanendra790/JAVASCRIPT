//DataTypes-Primitive, Referenced(Non-Primitive)

//Primitive=7 ->String,Number,Boolean,BigInt,Symbol,null,undefined
const id=Symbol('123');
const anotherId=Symbol('123');
console.log(id)//output->Symbol(123)
console.log(anotherId)//output->Symbol(123)
console.log(id==anotherId);//false because symbol datatype stores unique value

//Referenced-> Array,Object,Function
const arr=["Gyanendra","Molu","Golu"];

const obj={
    name:"Gyanendra",
    age:24,
    edu:"MCA",
}

const fxn=function(){
    console.log("Hello World");
}

console.table([typeof(arr),typeof obj,typeof fxn]);//output->object,object,function

/*************************STACK AND HEAP MEMORY****************/
//In primitive types we get copy of every declared variable.
//In referenced types we get reference of every declared variable.
//Stack is used in primitive data datatypes ->changes is made on copies not in real one
//Heap is used in referenced data types ->changes is made on original one

//PRIMITIVE TYPES(STACK)
let myName="Gyanendra"

let anotherName=myName//here copy of myName comes

anotherName="Molu"

console.log(myName)//output->Gyanendra
console.log(anotherName)//output->Molu
/**
 Here in stack we change the copies not the actual value
 Therefore both values are not same
 */

//REFERENCED TYPES(HEAP)
let user1={
    email:'shukla@gmail.com',
    upi:"user1@upi"
}

let user2=user1//here reference of user1 comes

user2.email='gps@gmail.com',
user2.upi="otherUser@upi"

console.log(user1)//output->{ email: 'gps@gmail.com', upi: 'otherUser@upi' }
console.log(user2)//output->{ email: 'gps@gmail.com', upi: 'otherUser@upi' }

/**
 Here in heap we change the  the actual value
 Therefore both values are same
 */
