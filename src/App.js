
import {useState} from "react"

function App() {

  const [matn, setMatn] = useState("") 
  const [text, setText] = useState([]) 

  const handleSave = () => {
    let a = text
    a.push(matn)
    setText(a)
    setMatn("")
  }

  const bbb = (e) => {
    setMatn(e.target.value)
  }

  return (
    <>
      <input type="text" value={matn} onChange={bbb} placeholder="..."/>
      <button onClick={handleSave}>OK</button>    
      <h1>
        {text.map(v=>{
          return (
            <h4>{v}</h4>
          )
        })}
      </h1>  
    </>
  );
}

export default App;