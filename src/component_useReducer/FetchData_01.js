import React,{useState,useEffect} from 'react'
import axios from 'axios'

export default function FetchData_01() {

    //create state for loading
    const [loading,setloading] = useState(false)

    //creata state for error
    const [error,setError] = useState('')

    //create state for posts
    const [post ,setPost] = useState({})

    useEffect(()=>{

        axios.get('https://jsonplaceholder.typicode.com/posts/1')

        //When data fetched successfull
        .then(response=>{

            setloading(false)
            setPost(response.data)
            setError('')
        
        //When data fetched has a error
        }).catch(error=>{

            setloading(false)
            setPost({})
            setError('Something went wrong!')

        })

    },[])

  return (
    <div>

    {loading ? 'Loading' : post.title  }
    {error ? error : null}

    </div>
  )
}
