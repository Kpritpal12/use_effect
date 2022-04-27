import React, { useEffect } from 'react'

function Counter1({num}) {
    useEffect(()=>{
        console.log("func compo mounting-updated");
        return()=>{
            console.log("func comp remove");
        }
    },[num])
  return (
    <div>
        <h1>
            {num}
        </h1>
    </div>
  )
}

export default Counter1