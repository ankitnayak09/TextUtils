import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';


function App() {

  const [ mode , setMode] = useState('light'); //Whether Dark Mode is Enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message,type) => {
    setAlert({
      message: message,
      type: type
    })

    setTimeout( () => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if(mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode Enabled" , "success")
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Dark mode Disabled" , "success")
    }
  }

  return (
    <>
      <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert} />      
      <div className="container my-3">
      <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>   
      {/* <About/> */}
      </div>
    </>
  );
}

export default App;
