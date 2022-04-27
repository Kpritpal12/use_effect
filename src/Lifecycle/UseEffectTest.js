import React from 'react'
import {useEffect,useState} from 'react'

function UseStateTest(){
    
    const[a,setA]=useState("JIS");
    const[b,setB]=useState("JUG");

    // useEffect(()=>{
    //     //worked as component did mount and component did update 
    //     console.log("hello auth user");
    // })
   //work only as  componentDidMount when we pass empty array
    // useEffect(()=>{
    //     console.log("hello auth user");
    // }, [])
    //in this case useeefect will work like compdidmount and will work like compdidupdate for specific state variable
    // useEffect(()=>{
    //     console.log("hello auth user");
    // }, [a])

    //compwillmount: cleanup function in useeffect
    useEffect(()=>{
        console.log("inside useeffect hook ");
        return function cleanup(){
            console.log(
                "useeffevt behave like compwill unmnount"
            );
        }
    })
    return(
        <>
                <h1>use effect</h1>
                <p>value of state var={a}</p>
                <p>value of state var={b}</p>
                <button onClick={()=>setA("qwe")}>update a value</button>
                <button onClick={()=>setB("rst")}>update b value</button>

        </>
    )
}
export default UseStateTest

 // useEffect:
// alternative of lifecycle methods.
// when you want to make server calls
// componentDidMount, componentDidUpdate, componentWillUnmount
// hook which accepts first parameter as a callback function, and second parameter is dependency array
// if you do not want that useEffect should run like a componentDidUpate then pass an empty dependency array.
// clean up function: this function gets executed when the component is unmounted from the screen. This is mostly used for memory leaks
 // How the useEffect can be executed like componentDidUpdate only for one state variable: pass the state variable for which you want
 //to execute useEffect in the dependency array.