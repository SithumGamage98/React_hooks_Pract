import React,{useReducer} from 'react'

//Create initial state a a OBJECT
const initialState = {
    firstCounter : 0,
    secondCounter :10
};

const reducer = (state,action) =>{

    switch(action.type){

        case 'increment' : return {...state , firstCounter : state.firstCounter + action.value}
        
        case 'decrement' : return {...state , firstCounter : state.firstCounter - action.value}

        case 'increment2' : return {...state , secondCounter : state.secondCounter + action.value}
        
        case 'decrement2' : return {...state , secondCounter : state.secondCounter - action.value}
        
        case 'reset' : return initialState

        default : return state;

    }
}

export default function Counter_02() {

    //decleare useReducer
   const [count , dispatch] = useReducer(reducer,initialState)

  return (
    <div>
       <h2>1st Count - {count.firstCounter}</h2><br></br>
       <h2>2nd Count - {count.secondCounter}</h2><br></br>
        <button  onClick={() => dispatch({type :'increment' , value : 1})}>Increment</button>
        <button  onClick={() => dispatch({type :'decrement' , value : 1})}>Decrement</button>
        <button  onClick={() => dispatch({type :'increment' , value : 5})}>Increment by 5</button>
        <button  onClick={() => dispatch({type :'decrement' , value: 5})}>Decrement by 5</button><br></br>
        <button  onClick={() => dispatch({type :'increment2' , value: 1})}>Increment counter 2</button>
        <button  onClick={() => dispatch({type :'decrement2' , value: 1})}>Decrement Counter 2</button><br></br>
        <button  onClick={() => dispatch({type :'reset'})}>Reset</button>

    </div>
  )
}
