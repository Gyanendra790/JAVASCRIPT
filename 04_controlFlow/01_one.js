//if
  //   if(condition)
  //   {
  //     statement
  //   }
//switch
  //   switch(key)
  //   {
  //     case value:
  //         break;
  //     default:
  //         break;
  //   }

  //false values->0,-0,false,"",BigInt 0n,null,undefined,NaN
  //true values->"0",'false'," ",[],{},function(){}<-empty fxn

  //nullish coalescing operator(??):undefined,null->it return first non-null or non-undefined value
  console.log(null??10)//10 as output
  console.log(12??3949)//12
  console.log(null??undefined)//undefined


  //ternary operator->if condition is true it return first otherwise second
  //condition?first:second
  const val=8
  console.log(val>5?"true":"false")