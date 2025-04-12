//first way to create promise
const promiseOne=new Promise(function(resolve,reject){//->it will take callback fxn
                                                      //it will resolve or reject
//Do an async task
//DB calls,cryptography,network
setTimeout(function(){
    console.log('Async task1 is completed');
    resolve()//this line connects resolve with .then
},1000)
})

//promise is created,now consume
promiseOne.then(function(){//-> .then is directly connected to resolve
    console.log("Promise1 consumed");
})





//second way to create promise
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Async task2 is completed');
        resolve()
    },1000)
    }).then(function(){
        console.log("Promise2 consumed");
})




//third  promise
const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"Gyanendra",email:"gs@gmail.com"})//some data is passed inside resolve
    },1000)
    })
    
    promiseThree.then(function(user){//-> data that is passed inside resolve will receive here
        console.log(user);//output->{ username: 'Gyanendra', email: 'gs@gmail.com' }
})




//fourth  promise
const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true;
        if(!error){
        resolve({username:"Gyanendra",password:"123"})
        }else{
            reject('ERROR:Something went wrong')
        }
    },1000)
    })
    
    //.then is directly connected to resolve 
    //.catch is directly connected to reject
    //.finally is run on both cases(resolve or reject)
    promiseFour.then((user) => {
        console.log(user);//output->{ username: 'Gyanendra', password: '123' }
        return user.username
    }).then((myusername)=>{//here chaining is done
          console.log(myusername)//Gyanendra(if error is false)
    }).catch(function(error){
        console.log(error)//Something went wrong(if error is true)
    }).finally(function(){
        console.log("The promise is either resolved or rejected");
    })






//fifth  promise
const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true;
        if(!error){
        resolve({username:"javascript",password:"123"})
        }else{
            reject('ERROR:JS went wrong')
        }
    },1000)
    })

    //Now we use alternative of .then.catch i.e. async await
    //async await will wait for some time to complete task after that it will give error
    //In asyn await error is handled using try catch block
    async function consumePromiseFive(){
        try{
        const response= await promiseFive
        console.log(response);//{ username: 'javascript', password: '123' }(if error is false)
        }catch(error){
            console.log(error);//ERROR:JS went wrong(if error is true)
        }
    }
    consumePromiseFive();


//using asyn await
 async function getAllUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')

        const data = await response.json()//it will also take time that's why we use await here also
        console.log(data);
    } catch (error) {
        console.log("E: ", error);
    }
}

getAllUsers()


//.then.catch format for above code
fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {//we use another then to fetch data from response json
    console.log(data);
})
.catch((error) => console.log(error))

// promise.all
// yes this is also available, kuch reading aap b kro.