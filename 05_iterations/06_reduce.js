const myNums=[1,2,3]
// const myTotal=myNums.reduce( function (acc,currval){
// console.log(`acc:${acc},currval:${currval}`)
//  return acc+currval},0) 
// console.log(`Total:${myTotal}`)//->acc:0,currval:1
                               //acc:1,currval:2
                               //acc:3,currval:3
                               //Total:6

//using arrow fxn
// const myTotal=myNums.reduce( (acc,currval)=> acc+currval,0)
// console.log(myTotal)

const shoppingCart=[
    {
        itemName:"js course",
        price:2999
    },
    {
        itemName:"mobile course",
        price:5999
    },
    {
        itemName:"python course",
        price:8999
    },
    {
        itemName:"java course",
        price:12999
    }
]
const total=shoppingCart.reduce( (acc,item)=>acc+item.price,0)
console.log(total)//30996