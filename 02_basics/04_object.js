//Below two lines are same, both will print {}
//const tinderUser = new Object() //singleton object
const tinderUser={} //non-singleton object
tinderUser.id="123abc"
tinderUser.name="Gyanendra"
tinderUser.loggedIn=false

const regularUser={
    email:"prinshuagarwal@gmail.com",
    fullName:{
        userFullName:{
            firstName:"Prinshu",
            lastName:"Agarwal"
        }

    }
}
console.log(regularUser.fullName.userFullName.firstName)//->Prinshu as output

const obj1={ 1:"Prajjwal", 2:"Shailesh", 3:"Gyanendra"}
const obj2={ 23:"235", 45:"90"}
//not a good way
const obj3={obj1,obj2}
console.log(obj3) // ->{
                 //   obj1: { '1': 'Prajjwal', '2': 'Shailesh', '3': 'Gyanendra' },
                 //   obj2: { '23': '235', '45': '90' }
                 //   }
//better way
const obj4=Object.assign({},obj1,obj2)
console.log(obj4) //->{
                     // '1': 'Prajjwal',
                     // '2': 'Shailesh',
                     // '3': 'Gyanendra',
                     // '23: '235',
                     // '45: '90'
                     //  }         
//best way, using spread operator
const obj5={...obj1,...obj2} 
console.log(obj5)//->{
                 // '1': 'Prajjwal',
                 // '2': 'Shailesh',
                 // '3': 'Gyanendra',
                 // '23: '235',
                 // '45: '90'
                 //  }      
 //data coming from database in the form of array of objects:
 const users=[
    {
        1:"hello",
        2:"green"
    },
    {
        1:"hi",
        2:"yellow"
    },
    {
        1:"bye",
        2:"blue"
    }

 ]      
 console.log(users[0][2])//->green as output
 console.log(users.length)//->3
 //acess keys
 console.log(Object.keys(tinderUser))//->[ 'id', 'name', 'loggedIn' ]
 //access values
 console.log(Object.values(tinderUser))//->[ '123abc', 'Gyanendra', false ]
 //access entries->array of arrays
 console.log(Object.entries(tinderUser))//->[ [ 'id', '123abc' ], [ 'name', 'Gyanendra' ], [ 'loggedIn', false ] ]

 //check any property exists or not
 console.log(tinderUser.hasOwnProperty('loggedIn'))//->true
 console.log(tinderUser.hasOwnProperty('loggedOut'))//->false


 const course={
    courseName:"MCA",
    courseInstructor:"Gyanendra",
    courseDuration:"2"
 }
 //new way to access elements of object->destructuring of object
 const {courseInstructor: instructor}=course
 console.log(instructor)//->Gyanendra

 //below code is in json format not a object, therefore keys and values are quoted
//  {
//     "name" : "Gyanendra",
//     "courseName" : "JavaScript",
//    "price" : "free"
//  }

//data from api comes in json format
[
    {},
    {},
    {}
]
    


