
import {useState} from "react"
import Navbar from "./components/navbar"
import Footer from "./components/footer"
import Home from "./pages/Home"

function App() {

  const [matn, setMatn] = useState("") 
  const [text, setText] = useState([]) 

  const handleSave = () => {
    let a = text
    a.push(matn)
    setText(a)
    setMatn("")
  }

  const ddd = (e) => {
    setMatn(e.target.value)
  }

  return (
    <>
      <Navbar/>
      <Home/>
      <Footer/>
    </>
  );
}

export default App;