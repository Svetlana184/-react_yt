import { useId } from 'react'

const Example = () => {
   const userId =  useId()
  return (
    <div>
        <label htmlFor={`${userId}-email`}>email</label>
        <input type="email" id={`${userId}-email`} />

        <br />

        <label htmlFor={`${userId}-password`}>password</label>
        <input type="password" id={`${userId}-password`} />
    </div>
    
  )
}

export default Example