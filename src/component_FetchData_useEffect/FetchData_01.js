import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function FetchData_01() {

    //useState for changing posts
    const [posts,setPosts] = useState([])

    //useEffect for fech data with Axios
    useEffect(()=>{

        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
            console.log(res)
            setPosts(res.data)

        }).catch(err=>{
            console.log(err);

        })
    },[])



  return (
    <div>
                    
    <ul>
        
     {posts.map(post=>(

        <li key={post.id}>{post.title}</li>

     )

     )}

    </ul>
    </div>
  )
}
