
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React,{useState} from 'react';
// import Alert from './components/Alert';




function App() {
  const [mode, setMode] = useState('light');
  // const [alert, setAlert] = useState(null);


  // const showAlert = (message,type)=>{
  //   setAlert({
  //     msg:message,
  //     type:type
  //   })

  // }
  

  const toggleMode = ()=>{

    if(mode === 'light'){
      setMode ('dark');
      // document.body.style.backgroundColor = '#042743';
    }
    else{
      setMode ('ligth');
      // document.body.style.backgroundColor = 'white';
    }

  }


  return (

    <>
  
    {/* <Navbar title="TextUtils" aboutText="About " /> */}
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
    {/* <Navbar/> */} 
    {/* <Alert alert={alert}/> */}



    <div className="container my-3">
      <TextForm heading = "Enter the text to analyze below "/>
    </div>
    
      {/* <About/> */}
    
   
    </>
    
  );
}

export default App;
