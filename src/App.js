import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  
  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    }, 1000)
  }
  const toggleMode = ()=>{
    if(mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#00001f';
      showAlert("Dark mode has been enabled", "success");
      document.title = "React Practice - Dark Mode";
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = "React Practice - Light Mode";
    }
  }

  return (
    <>
    <Navbar title="React Practice" aboutText="About" mode={mode} toggleMode={toggleMode} />    
    <Alert alert={alert}/>
    <TextForm showAlert={showAlert} heading="Enter Text to analize" mode={mode}/>
    <About/>
    </>
  );
}

export default App;
