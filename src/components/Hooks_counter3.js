
import React, { useState } from 'react'

export default function Hooks_counter3() {   
    
    //Create use state for changeing values in Objects
    const [name,setName] = useState({firstName : "" ,lastName:""} )

  return (


    <div><h2>Enter First and last Names</h2>
    
    <form>
    <input type="text" value={name.firstName} onChange={ (e) => setName({...name,firstName: e.target.value})}></input>
    <input type="text" value={name.lastName} onChange={(e)=>setName({...name,lastName:e.target.value})}></input>
    </form>

    <h2>First Name : {name.firstName}</h2>
    <h2>Last Name : {name.lastName}</h2>
    
    </div> 



  )
}

/* UseState Hooks not Automatically mergr oblects --- We need to manuallly merge objects..

For that we use SPRED OPERATOR---> ...name */