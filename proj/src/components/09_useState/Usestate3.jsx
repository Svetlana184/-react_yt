import { useState } from 'react'


const Usestate3 = () => {
   const [count, setCount] = useState(()=> {
    const initialCount = 10;
    return initialCount
   });
   const increment = () => {
    setCount((prevCount) => prevCount + 1)
   }
    return (
    <div>
        <p>{count}</p>
        <button onClick={increment}></button>
    </div>
  )
}

export default Usestate3