import React ,{useContext} from 'react'
import { addresssConst } from './Component_Head'



export default function Subcomponect_head() {
    //variables for get address valus
    const address = useContext(addresssConst)
  return (
    <div>Subcomponect_head

        <h4>Address is : {address}</h4>

    </div>
  )
}
