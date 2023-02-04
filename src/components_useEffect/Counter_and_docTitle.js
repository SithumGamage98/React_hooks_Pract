import React, { useEffect, useState } from 'react'

export default function Counter_and_docTitle() {

    //useState for count value
    const [count,setCount] = useState(0)

    //useEffect for changeing the doc tiltle

    useEffect(()=>{

        console.log('Clicked useEffect')
        document.title = `You clicked ${count}` 



    })

  return (
    <div>

    <button onClick={()=>setCount(count+1)}>Count : {count}</button>

    </div>
  )
}

