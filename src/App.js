import { useState } from "react";
import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForms from "./components/TextForms";

function App() {
  const[mode,setMode] = useState('light');
  const toggleMode= ()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
    }
  }
  return (
    <>
      <Navbar tittle="TextUtils" about="About Us" mode={mode} toggleMode={toggleMode}/>
      <div className="container">
        <TextForms heading="Add text to analyze.."  mode={mode}/>
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
