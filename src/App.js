// import logo from './logo.svg';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Alert from './components/Alert';
import About from './components/About';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";


function App() {
  const [mode, setmode] = useState('warning')
  const [alert, setalert] = useState(null)

  const toggleMode = () => {
    if (mode === 'dark') {
      setmode('warning');
      document.body.style.backgroundColor = 'white'
      showAlert('Light Mode has been enabled', "success")
      document.title = "Text Home-Light Mode Enabled"
    }
    else {
      setmode('dark');
      document.body.style.backgroundColor = '#203559'
      showAlert('DarkMode has been enabled', "success")
      document.title = "Text Home-Dark Mode Enabled"
    }
  }

  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null)
    }, 3000);
  }
  return (
    <>
      {/* <Navbar title='TextUtils' abtext="About Us" /> */}
      {/* <Router> */}
      <Navbar title='TextUtils' mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
        <div className="container my-3">
          {/* <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/"> */}
              <TextForm showAlert={showAlert} heading="Enter texts to analyse below Analyse" mode={mode} />
            {/* </Route>
          </Switch> */}
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;

