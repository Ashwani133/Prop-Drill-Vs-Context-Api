
export function Home({usecontextApi, setUsecontextApi}){

    function handleCheckbox(){
        setUsecontextApi((prevValue)=>!prevValue)
        console.log("Using context Api");
    }
    return <div>
        <div style={{display:"flex", fontSize:"1.3em", justifyContent:"flex-end", backgroundColor:"silver"}}>
            <p>Use ContextApi:</p>
            <input type="checkbox" onChange={handleCheckbox} style={{marginRight:"1.5em"}}/>
        </div>
      <h1>Welcome to the Auth System Demo</h1>
      <p>This demo showcases two approaches to managing authentication state in React:</p>
      <ul>
        <li>State Lifting</li>
        <li>Context Api</li>
        </ul>
      <p>Use the toggle above to switch  between the two approaches.</p>
    </div>
  }
  