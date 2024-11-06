import { useState, createContext } from "react";

const UserContext = createContext();
export function UserContextProvider({children}){
    const[username, setUsername] = useState("");
    const[loggedin, setLoggedin] = useState(false);
    return <UserContext.Provider value={{username, setUsername,loggedin,setLoggedin}} >
        {children}
    </UserContext.Provider>
}

export default UserContext;