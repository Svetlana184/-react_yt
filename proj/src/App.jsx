// import Props from './components/04_props/Props';

import UpdateUser from './components/14_use_context/UpdateUser';
import { UserProvider } from './components/14_use_context/UserContext';
import UserProfile from './components/14_use_context/UserProfile';

const App = () => {
  return (
    <>
      {/* <Props name="Alex" age={22}>
        <h1>Text</h1>
      </Props> */}

      
      <UserProvider>
          <UserProfile/>
          <UpdateUser/>
      </UserProvider>

    </>
  )
}
export default App;