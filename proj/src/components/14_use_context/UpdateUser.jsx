import { useContext, useState } from 'react';
import { UserContext } from './UserContext';


const UpdateUser = () => {
  const {updateUser} = useContext(UserContext)
  const [newName, setName] = useState('')
  const handleSubmit = e => {
    e.preventDefault()

    if(newName.trim()){
        updateUser(newName)
        setName("")
    }

  }
return (
    <div>
        <h2>update user name</h2>
        <form onSubmit={handleSubmit}>
            <input type="text" value={newName} onChange={e=>setName(e.target.value)} />
            <button type='submit'></button>
        </form>
    </div>
  )
}

export default UpdateUser