import React, { useState } from "react";


export default function Hooks_function2_counter() {

    const initialValue =0
    const [counter , setCounter] = useState(initialValue)

    const increseBy5 = ()=>{

        for(let i=0; i<5; i ++){

            setCounter(prevCounter => prevCounter+1)

        }

    } 

  return (
    <div><h1>Hooks_function2_counter</h1>
    <h1>Counter : {counter}</h1>
    <button onClick={()=>setCounter(initialValue)}>Rest</button><br></br>
    <button onClick={()=>setCounter(prevCounter => prevCounter+1)}>Increase</button><br></br>
    <button onClick={()=>setCounter(prevCounter => prevCounter -1)}>Decrease</button>
    <button onClick={()=>increseBy5()}>Increase by 5</button>
    {/*<button onClick={()=>setCounter(counter+5)}>Increase by 5</button>*/}
    
    
    </div>
  )
}
