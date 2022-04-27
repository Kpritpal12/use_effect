import React from 'react';//default export
import {useState} from 'react';//nameexpoert
function UseStateTest(){
     
     const[name,setName]=useState("hello");
     const[user,setUser]=useState({name:"kabir",age:" 27"})
     const[count,setCount]=useState(0);
   //named function:variable whose value is equal to a function
     const updateState=()=>{
         setName("kabir");
     }
     const updateObjectState=()=>{
       setUser((prevState)=>({
           ...prevState,
           age:40
       
       }))
     }
    return(
        <>
            <h1>use state</h1>
            <p>value:{name}</p>
            <button onClick={updateState}>click to update</button>
            <button onClick={()=>setName("hii")}>click to test using arrow function</button>
            <p>state count va {count}</p>
            <button onClick={()=>setCount(prevState=>prevState+1)}>update state count variable</button>
            <p>state as an object:{user.name}</p>
            <p>state as an object. {user.age}</p>
            <button onClick={updateObjectState}>click to update object state</button>
        </>
    )
    
}
export default UseStateTest

 // useState
// definition, structure
// how to use the state variable in dom
// update the state variable -> by creating a separate function or by writing in the same line

//prev state- this comes when u eant to update state variablw which is an object
//this prevstate is required when you want touse the initial value or the last value or tha last value of the state when u update the new state variable