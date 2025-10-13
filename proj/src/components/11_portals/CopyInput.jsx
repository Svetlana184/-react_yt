import { useState } from 'react'
import PopupContent from './PopupContent';


const Portal1 = () => {
  const [inputValue, setInputValue] = useState('');
  const [copied, setCopied] = useState(false);

  const handleCopy = ()=>{
    navigator.clipboard.writeText(inputValue).then(()=>{
        setCopied(true)
        setTimeout(() => setCopied(false), 5000)
    })
  }
    return (
    <div>
        <input type='text' value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
        <button onClick={handleCopy}>copy</button>
        <PopupContent copied={copied}/>
    </div>
  )
}

export default Portal1