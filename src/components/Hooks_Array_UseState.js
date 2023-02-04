import React, { useState } from "react";



export default function Hooks_Array_UseState() {
    //use state for Array 

    const [items , setItem] = useState([]);

    //AddItem Function

    const AddItems = () =>{

       setItem([...items,{

        id : items.length,
        value : /*Math.floor(Math.random() * 10)*/ items.length +1

       }])


    }

  return (
    <div>
        
        <h2>Hooks_Array_UseState</h2>
        <div><button onClick={()=>AddItems()}>Add Items</button></div>
        <ul>

            {items.map(items => (

                <li key={items.id}>{items.value}</li>

            ) )}


        </ul>


    </div>
  )
}
