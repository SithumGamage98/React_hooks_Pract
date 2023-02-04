import React, { useState } from "react";

export default function Hooks_functionC_UseState() {

    const [count,setCount] = useState(0);

    function addCount () {

        setCount(count+2)



    }
  return (
    <div><h2>Hooks_functionC_UseState</h2> <br></br>

    {/*Method 01 */}
    {/*<button onClick={()=> setCount(count+1)}>Count {count}</button></div>*/}
    
    {/*Method 02 */}
    <button onClick={()=> addCount()}>Count {count}</button></div>
   
   
  )
} 
