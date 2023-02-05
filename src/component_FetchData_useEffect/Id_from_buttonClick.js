import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Id_from_buttonClick() {

    //useState for a post
    const [post,setPost] = useState({})

    //useState for id
    const [id,setId] = useState(1)

    //useState for ID Button
    const [idFromButton,setIdFromButton] = useState(1)

    //clickButton fiunction

    const chickButton =()=>{

        setIdFromButton(id);


    }
    
    //useEffect for a fetch a post
    useEffect(()=>{

        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButton}`).then(res=>{

            console.log(res)
            setPost(res.data)

        }).catch(err=>{

            console.log(err)

        })


    },[idFromButton])

  return (
    <div>Enter any ID :
    
    <input type="text" value={id} onChange={e=>setId(e.target.value)}></input>
    <button onClick={()=>chickButton()}>Fetch ID</button>
    <h2>Title : {post.title}</h2>

    </div>
  )
}
