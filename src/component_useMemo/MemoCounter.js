import React,{useState , useEffect} from 'react'

export default function MemoCounter() {

    //useState for counteer 01
    const [countOne, setCountOne] = useState(0)
    //useState for Counter 02
    const [CountTwo ,setCountTwo] = useState(0)

    

    //IncrementOne function
    const incrementOne = () =>{
        setCountOne(countOne+1)
    }

    //Increment by two
    const inctrmentTwo =()=>{

        setCountTwo(CountTwo+1)

    }

  return (
    <div>MemoCounter

        <div><button onClick={()=>incrementOne()}>Increment by One : {countOne}</button></div>
        <diV><button onClick={()=>inctrmentTwo()}>Increment by Two : {CountTwo}</button></diV>


    </div>
  )
}
