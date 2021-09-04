import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';

// Router 
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

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
    <Router>
      <Navbar title="TextUtils"  mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert} />      
      <div className="container my-3">
      <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
            <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>   
          </Route>
      </Switch>
      </div>
      </Router>
      {/* <About/> */}
    </>
  );
}

export default App;
