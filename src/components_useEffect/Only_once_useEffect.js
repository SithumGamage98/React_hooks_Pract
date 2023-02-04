import React, { useEffect, useState } from 'react'

export default function Only_once_useEffect() {

     //useState for X
     const [x,setX]=useState(0);
     //useState for Y
     const [y,setY]=useState(0);

     //logMounsePosition function

     const logMounsePosition = e =>{

        console.log('Log mouse position');
        setX(e.clientX);
        setY(e.clientY);


     }

    //useEffectv for changing the mouse position
     useEffect(()=>{

        console.log("useEffect Called")
        window.addEventListener('mousemove',logMounsePosition);


     },[]) //Using this [] as second parameter we can run useEffect only one time

  return (
    <div><h2>Only_once_useEffect</h2>

    Hooks : x- {x} y- {y}
   
    
    </div>
  )
}
