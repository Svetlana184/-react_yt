import { useState } from 'react'


const UseState4 = () => {
  const [randomNumber, setRandomNumber] = useState(()=> Math.floor(Math.random() * 100));
  const generate = () => {
    const newNumber = Math.floor(Math.random() * 100)
    setRandomNumber(newNumber)
  }
    return (
    <div>
        <h2>Random number: {randomNumber}</h2>
        <button onClick={generate}>generate random number</button>
    </div>
  )
}

export default UseState4