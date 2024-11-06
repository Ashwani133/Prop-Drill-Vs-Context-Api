import { useContext } from "react"
import { Login } from "./Login"
import UserContext from "./UserContextProvider"
import { LoginCApi } from "./LoginCApi"


export function AppBarCApi(){
    const {username, setUsername, loggedin, setLoggedin} = useContext(UserContext)
    function Logout(){
      setUsername("")
      setLoggedin(!loggedin)
    }
    return <div style={{padding:"1em", backgroundColor:"#4098b5", color:"#fff", border:"2px solid black", display:"flex", justifyContent:"space-between", alignItems:"center"}}>
      <div><h1>Auth System Demo</h1></div>
      {loggedin ===false ?<LoginCApi />:   
      <div>
        <span style={{fontWeight:"600", fontSize:"1.2em", marginRight:"1em"}}>Welcome, {username}</span>
        <span><button onClick={Logout} style={{padding:"0.5em", fontWeight:"600", borderRadius:"5px"}}>Logout</button></span>
        </div>}
    </div>
}