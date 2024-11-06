export function Login({setUsername, username, loggedin, setLoggedin}){
    function handleChange(e){
      setUsername(()=>e.target.value)
    }
  
    function handleLogin(){
      if(username !== ""){
        setLoggedin(!loggedin)
      }
    }
    
    return <div>
      <input onChange={handleChange} value={username} type="text" placeholder='Enter Username' style={{height:"1.8em", marginRight:"1em", borderRadius:"5px"}}/>
      <button onClick={handleLogin}  style={{padding:"0.5em", fontWeight:"600", borderRadius:"5px"}}>Login</button>
    </div>
  }