import { useContext } from 'react';
import { UserContext } from './UserContext';


const UserProfile = () => {

   const {user} = useContext(UserContext)
  return (
    <div><h1> username: {user.name}</h1></div>
  )
}

export default UserProfile