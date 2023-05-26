import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForms from "./components/TextForms";
import Alerts from "./components/Alerts";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// }from "react-router-dom";

function App() {
  const[mode,setMode] = useState('light');
  const[alert,setAlert] = useState(null);

  const showAlert = (message,type) =>{
      setAlert({
        msg:message,
        type:type
      })
      setTimeout(() =>{
       setAlert(null)
      },1500);
  }
  // const removecolor = ()=>{
  //   document.body.classList.remove('bg-primary');
  //   document.body.classList.remove('bg-dark');
  //   document.body.classList.remove('bg-success');
  //   document.body.classList.remove('bg-danger');
  //   document.body.classList.remove('bg-warning');
  //   document.body.classList.remove('bg-white');
  // }
  const toggleMode= (cls)=>{
    // removecolor();
   
    // document.body.classList.add('bg-'+cls);
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Enable Dark Mode","success");

    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Enable Light Mode",'success');
    }
  }

 
  return (
    <>
      {/* // <Router> */}
      <Navbar tittle="TextUtils" about="About" mode={mode} toggleMode={toggleMode}/>
      <Alerts alert={alert}/>
      <div className="container">
      {/* <Routes>
          <Route exact path="/about" element={<About mode={mode}/>}> </Route>
         
          <Route exact path="/" element={ <TextForms showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>}> </Route>
    </Routes> */}
      <TextForms showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
