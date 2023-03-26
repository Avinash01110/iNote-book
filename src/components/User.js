import React, {useContext} from 'react'
import noteContext from '../context/notes/noteContext'
import Addnew from './Addnew';
import Sidebar from './Sidebar'
import { 
  BrowserRouter as Router, 
  Routes, 
  Route 
}from "react-router-dom";

export default function User(props) {

  const {note, setNote} = useContext(noteContext);
  return (
    <>
      <Sidebar showAlert={props.showAlert}/>
      </>
  )
}
