import ComponentB from './ComponentB'
import { createContext } from 'react'

export const Data = createContext()
export const Data1 = createContext()
    
const ComponentA = () => {
  const name = "bob"
  const age = 22
  return (
    <div>
        <Data.Provider value={name}>
            <Data1.Provider value={age}>
                <ComponentB/>
            </Data1.Provider>
        </Data.Provider>
    </div>
   
  )
}

export default ComponentA