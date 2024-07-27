//DataTypes-Primitive, Referenced(Non-Primitive)

//Primitive=7 ->String,Number,Boolean,BigInt,Symbol,null,undefined
const id=Symbol('123');
const anotherId=Symbol('123');
console.log(id==anotherId);//false because symbol datatype stores unique value

//Referenced-> Array,Object,Function
const arr=["Gyanendra","Molu","Prajjwal"];

const obj={
    name:"Gyanendra",
    age:24,
    edu:"MCA",
}

const fxn=function(){
    console.log("Hello World");
}

console.table([typeof(arr),typeof obj,typeof fxn]);

/*************************STACK AND HEAP MEMORY****************/
//Stack is used in primitive data datatypes ->changes is made on copies not in real one
//Heap is used in referenced data types ->changes is made on original one