import React, { useEffect, useState } from 'react'

export default function Conditionally_run() {
   //useState for count
   const [count,setCount] = useState(0);

   //useState for name 
   const [name,setName] = useState('');

   useEffect(()=>{

    console.log('Entered useEffect');
    document.title=`useEffect updated titile ${count}`

   },[count])
   
  return (
    <div><h2>Conditionally_run</h2>
    
    <button onClick={()=>setCount(count+1)}>Count : {count}</button>

    {/*Get user name */}
    <input type="text" value={name} onChange={e=>setName(e.target.value)}></input>

    </div>
    
  )
}
