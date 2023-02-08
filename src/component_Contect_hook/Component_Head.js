import React,{useContext} from 'react'
import { mailContext,cityContect } from '../App'
import Subcomponect_head from './Subcomponect_head'

//create context for pass address value to the Sub Component

export const addresssConst = React.createContext()

export default function Component_Head() {
    



    //Create variables for get Contexts values
    const email = useContext(mailContext)
    const city = useContext(cityContect)
  return (
    <div>Consume data passed from the App.js
        <h2>My emial is : "{email}" & my city is : "{city}"</h2>


        <div>
        {/*This for pass Address to the Sub componet*/}

            <addresssConst.Provider value="222/75, Abawatta">
                <Subcomponect_head/>
            </addresssConst.Provider>


        </div>

    </div>

    

  )
}
