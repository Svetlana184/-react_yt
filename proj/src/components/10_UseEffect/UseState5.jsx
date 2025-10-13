import { useEffect, useState } from 'react'


const UseState5 = () => {
    const [name, setName] = useState(()=> {
        const savedName = localStorage.getItem('name');
        return savedName ? JSON.parse(savedName) : "";
    });
    useEffect(()=> {
        localStorage.setItem('name', JSON.stringify(name))
    }, [name]);

    const handleClear = () => setName("");
    const handleChange = (event) => {
        setName(event.target.value)
    };
    
    return (
    <div>
        <h1>your name: {name}</h1>
        <input type="text" value={name} onChange={handleChange} placeholder='enter your name'/>
        <button onClick={handleClear}>clear</button>
    </div>
  )
}

export default UseState5