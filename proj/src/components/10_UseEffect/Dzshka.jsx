import { useEffect, useState } from 'react'


const Dzshka = () => {
    useEffect(()=>console.log("message"), [ ]);
    const [data, setData] = useState([])
    useEffect(()=>{
        async function getData() {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts")
            const data = await response.json()
            if (data && data.length) setData(data)
        }
        getData()
    }, []);
    const [counter, setCounter] = useState(0);
    useEffect(()=> 
        {
            document.title = `count: ${counter}`
        },  [counter])
    return (
    <section>
        <h2>{counter}</h2>
        <button onClick={()=>setCounter(counter+1)}>Add</button>
        <div>
            {data.length > 0 ? <p>{data[0].title}</p> : <p>loading...</p>}
        </div>
    </section>
  )
}

export default Dzshka