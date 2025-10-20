import { useRef } from 'react'

const Ref1 = () => {
    const inputElement = useRef(null);
    console.log(inputElement);
    const focusInput = () =>{
        inputElement.current.focus();
        inputElement.current.value = "hhhh";
    }
    return (
        <div>
            <input type="text" ref={inputElement}/>
            <button onClick={()=> focusInput()}>focus & write</button>
        </div>
    )
}

export default Ref1