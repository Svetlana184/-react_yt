import { useRef, useEffect, useState } from 'react'

const Timer = () => {
    const [count, setCount]= useState(0);
    const timeinterval = useRef(null);

    useEffect(()=>{
        timeinterval.current = setInterval(()=>{
            setCount(prevCount => prevCount+1)
        }, 1000)
        return ()=>{
            clearInterval(timeinterval.current);
        }
    }, [] )
   
  return (
    <div>
        <h1>timer: {count} seconds</h1>
        <button onClick={()=> clearInterval(timeinterval.current)}>stop timer</button>
    </div>
  )
}

export default Timer