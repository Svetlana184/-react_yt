import { useState, useEffect } from 'react'

const UseEffect1 = () => {
  const [value, setValue] = useState(0);
  const [something, setSomething] = useState(0);

  useEffect(()=>{
    if (value>0){
    console.log("call useEffect");
    document.title = `increment ${value}`;
    }
   
  }, [value])
    return (
    <div>
        <h2>{value}</h2>
        <button onClick={()=> setValue(value +1)}>click me with use effect</button>
        <br />
        <h2>{something}</h2>
        <button onClick={()=> setSomething(something +1)}>click on something</button>
    </div>
  )
}

export default UseEffect1