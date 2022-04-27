// import ClassComp from "./FunctionComp/ClassComp"
import UseStateTest from './Lifecycle/UseStateTest'
// import { useState } from 'react'
// import UseEffectTest from './Lifecycle/UseEffectTest'
const App= () =>{

   // const[showComp,setShow]=useState(true);
     return(
        <div>
           {/* <ClassComp/> */}
           <UseStateTest/>
           {/* <UseEffectTest/> */}
           {/* {showComp ? <UseEffectTest/> : null}
           <button onClick={()=>setShow(false)}>unmount useffect comp</button> */}
        </div> 
     )
}

export default App

