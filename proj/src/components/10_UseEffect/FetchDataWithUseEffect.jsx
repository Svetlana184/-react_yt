import { useState, useEffect } from 'react'

const FetchDataWithUseEffect = () => {
  const [data, setData] = useState([])
  useEffect(()=>{
    async function  getData() {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos")
        const data = await response.json()
        if (data && data.length) setData(data)
    }
    getData();
  }, []);


    return (
    <div>
        <ul>
            {data.map((item) => <li key={item.id}>
                {item.title}
            </li>)}
        </ul>
    </div>
  )
}

export default FetchDataWithUseEffect