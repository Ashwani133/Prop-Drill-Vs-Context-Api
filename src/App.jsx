import { useState } from 'react'
import { AppBar } from './components/AppBar';
import { Home } from './components/Home';
import { UserContextProvider } from './components/UserContextProvider';

import './App.css'
import { AppBarCApi } from './components/AppBarCApi';
import { HomeCApi } from './components/HomeCApi';

function App() {
  const[username, setUsername] = useState("");
  const[loggedin, setLoggedin] = useState(false);
  const [usecontextApi, setUsecontextApi] = useState(false)
  return (
    <div>
      {usecontextApi === false? <div>
      <AppBar username={username} setUsername = {setUsername} loggedin={loggedin} setLoggedin={setLoggedin}/>
      <Home usecontextApi={usecontextApi} setUsecontextApi = {setUsecontextApi}/>
      </div>:
      <div>
        <UserContextProvider>
          <AppBarCApi />
          <HomeCApi setUsecontextApi={setUsecontextApi} usecontextApi={usecontextApi}/>
        </UserContextProvider></div>}
    </div>
  )
}



export default App
