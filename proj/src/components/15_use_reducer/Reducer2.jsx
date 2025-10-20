import { useReducer, useState } from 'react'

const initialState = {count:0};

const reducer = (state, action) => {
    switch (action.type) {
        case "plus":
           return {...state, count: state.count + action.count};
        case "minus":
           return {...state, count: state.count - action.count};
        case "reset":
           return {...state, count: 0}
        default:
            return state;
    }
}

const Reducer2 = () => {
const [state, dispatch] = useReducer(reducer, initialState);

const [countPlus1, setCountPlus1] = useState(0);
  return (
    <div>
        <h2>count 2 : {state.count}</h2>
        <input onChange={(e)=>setCountPlus1(e.target.value)} type="text" placeholder='введите число'
        value={countPlus1}/>
        <button onClick={()=>dispatch({type:"reset"})}>reset</button>
        <button onClick={()=> dispatch({type : "plus", count:+(countPlus1)})}>+</button>
        <button onClick={()=> dispatch({type : "minus", count:+(countPlus1)})}>-</button>
       
    </div>
  )
}

export default Reducer2