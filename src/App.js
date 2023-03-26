import './App.css';
import Navbar from "./components/Navbar"
import Home from './components/Home';
import About from './components/About'
import Whyus from './components/Whyus'
import Plan from './components/Plan'
import Footer from './components/Footer'
import { 
  BrowserRouter as Router, 
  Routes, 
  Route 
}from "react-router-dom";
import User from './components/User';
import NoteState from './context/notes/NoteState';
import Addnew from './components/Addnew';
import Login from './components/Login';
import Signup from './components/Signup';
import Alert from './components/Alert';
import React,{useState} from 'react';

function App() {
  const [alert, setalert] = useState({message:null,color:null,state:"hidden"})
  const showAlert = (message,color)=>{
    setalert({
      message : message,
      color : color,
      state : ""
    })
  }
  setTimeout(() => {
    setalert({message:null,color:null,state:"hidden"})
  }, 8000);

  return (
    <NoteState>
      <Router>
        <Navbar/>
        <Alert alert={alert}/>
        <Routes>
          <Route exact path="/" element={<Home/>}></Route>
          <Route exact path="/User" element={<User showAlert={showAlert}/>}></Route>
          <Route exact path="/Plan" element={<Plan/>}></Route>
          <Route exact path="/Login" element={<Login showAlert={showAlert}/>}></Route>
          <Route exact path="/Signup" element={<Signup showAlert={showAlert}/>}></Route>
          {/* <Route exact path="/User/Addnew" element={<User/>}></Route> */}
          {/* <Route exact path="/User/Addnew" element={[<User/>,<Addnew/>]}></Route> */}
          {/* <Route exact path="/About" element={<About/>}></Route>
          <Route exact path="/Whyus" element={<Whyus/>}></Route>
        <Route exact path="/Plan" element={<Plan/>}></Route> */}
        </Routes>
        <Footer/>
      </Router>
    </NoteState>
  );
}

export default App;
