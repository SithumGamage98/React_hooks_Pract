import React, { useReducer , useEffect } from 'react'
import axios from 'axios'

const initialState = {

    loading : true,
    error : '',
    post : {}

}

const reducer = (state , action )=>{

        switch(action.type){

            case 'FETCH_SUCCESS'  : return {

                loading : false,
                post : action.payload,
                error : ''

            }

            case 'FETCH_ERROR': return {

                loading : false,
                post : {},
                error : "Some thing went wrong!"

            }

            default : return state


        }



}

export default function Fetchdata_02() {
    //Decleare useReduce function
    const [state , dispatch] = useReducer(reducer,initialState)

    useEffect(()=>{

        axios.get('https://jsonplaceholder.typicode.com/posts/1')

        //When data fetched successfull
        .then(response=>{

           dispatch ({type : 'FETCH_SUCCESS' , payload : response.data})
        
        //When data fetched has a error
        }).catch(error=>{

           dispatch({type : 'FETCH_ERROR'}) 
        })

    },[])

  return (
    <div>Fetchdata_02

    {state.loading ? 'Loading' : state.post.title}
    {state.error ? state.error : null}

</div>
  )
}
