import { Data, Data1 } from './ComponentA'

import { useContext } from 'react'

const ComponentD = () => {
    const userName = useContext(Data)
    const userAge = useContext(Data1)
  return (
    <div>
        <Data.Consumer>
            {(name) => {
                // return <h1>{name}</h1>
                return(
                    <Data1.Consumer>
                        {(age)=>{
                            return <h1>my name is {name} my age {age}</h1>
                        }}
                    </Data1.Consumer>
                )
            }}
        </Data.Consumer>
        <div>
            <h2>{userName}</h2>
            <h2>{userAge}</h2>
        </div>
    </div>
  )
}

export default ComponentD