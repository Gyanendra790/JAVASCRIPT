const myObject={
    js:"javascript",
    cpp:"C++",
    rb:"ruby",
    py:"python"
}
for (const k in myObject) {
    console.log(k)//->js(gives key)
                  //cpp
                  //rb
                  // py
    console.log(myObject[k])//->javascript(gives value)
                            //C++
                            //ruby
                            // python
}

//for in loop with array
const arr=['Ranesh','Shyam','Ram']
for(const k in arr)
{
// console.log(k)//-> 0(gives index)
                //    1
                //    2
    console.log(arr[k])//->Ranesh(gives value)
                         //Shyam
                         //Ram
}
//for in loop is not used in map because map is not iterable
