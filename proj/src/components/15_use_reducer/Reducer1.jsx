import { useReducer } from 'react'

const initialState = {count:0};
const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return {...state, count: state.count  + 1};
        case 'decrement':
            return {...state, count: state.count  - 1};
        case 'reset':
            return {...state, count: 0};
        default:
            return state;
    }
}

const Reducer1 = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
        <h1>count: {state.count}</h1>
        <button onClick={()=>dispatch({type:'increment'})}>+</button>
        <button onClick={()=>dispatch({type:'decrement'})}>-</button>
        <button onClick={()=>dispatch({type:'reset'})}>reset</button>
    </div>
  )
}

export default Reducer1