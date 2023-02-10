//Multiple useReducer -> When the action is same, but we need more same type of trnasactions, we can use this multiple useReduce concept

import React,{useReducer} from 'react'

const initialState = 0;

const reducer = (state,action) =>{

    switch(action){

        case 'increment' : return state +1
        
        case 'decrement' : return state -1
        
        case 'reset' : return initialState

        default : return state;

    }
}

export default function Counter_03() {

    //decleare useReducer
   const [count , dispatch] = useReducer(reducer,initialState)
   //Create another useReducer for another same transaction
   const [countTwo , dispatchTwo] = useReducer(reducer, initialState)

  return (
    <div>
    <div>
        
       <h2> Count - {count}</h2><br></br>
        <button  onClick={() => dispatch('increment')}>Increment</button>
        <button  onClick={() => dispatch('decrement')}>Decrement</button>
        <button  onClick={() => dispatch('reset')}>Reset</button>

    </div>

    <div>
    <h2> Count - {countTwo}</h2><br></br>
        <button  onClick={() => dispatchTwo('increment')}>Increment</button>
        <button  onClick={() => dispatchTwo('decrement')}>Decrement</button>
        <button  onClick={() => dispatchTwo('reset')}>Reset</button>
        
    </div></div>
  )
}
