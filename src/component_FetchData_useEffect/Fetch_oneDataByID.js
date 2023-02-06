import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Fetch_oneDataByID() {

    //useState for a Post
   const [post,setPost] = useState({})
   
   //useEffect forid
   const [id,setID] = useState(1)

   useEffect(()=>{

    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(res=>{

        console.log(res)
        setPost(res.data)
    
   }).catch(err=>{
    console.log(err);
   })
},[id])

  return (
    <div>Only One
     <input type="text" value={id} onChange={e=>setID(e.target.value)}></input>
     <h2>{post.title}</h2>
    
   {/* <ul>
    {posts.map(post=>{

        <li key={post.id}>{post.title}</li> 

    })}
    </ul> */}
    </div>
  )
}
