import React,{useContext} from 'react'
import { userContect } from '../App'

export default function ComponentA() {

  const user = useContext(userContect);

  return (
    <div>ComponentA

    
    <h2>user Nmae is : {user}</h2>



    </div>
  )
}
