import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props)=>{
  const host = "http://localhost:5000"
    const notesInitial = []
        
    const [notes, setNotes] = useState(notesInitial)

    const get_notes = async ()=>{

      const response = await fetch(`${host}/api/notes/fetchallnotes`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token")
        },
      });
      const json = await response.json()
      console.log(json)
      setNotes(json)
    }

    
    // For adding a note
    const add_note = async (title,description,tag)=>{

      const response = await fetch(`${host}/api/notes/addnote`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token")
        },
        body: JSON.stringify({title,description,tag})
      });
      const note = await response.json()
      setNotes(notes.concat(note))
    }

    
    // For deleting the note
    const delete_note = async (id)=>{

      const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token")
        },
      });
      const json = response.json()
      console.log(json)

      console.log("Note is sucessfully deleted"+id)
      const New_Note = notes.filter((note)=>{
        return note._id !== id
      })
      setNotes(New_Note)
    }

    // For editing the note
    const edit_note = async (id,title,description,tag)=>{

      const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token")
        },
        body: JSON.stringify({title,description,tag}  )
      });

      const json = await response.json()

      const new_notes = JSON.parse(JSON.stringify(notes))

      for (let index = 0; index < new_notes.length; index++) {
        const element = new_notes[index];
        if(element.id == id){
          new_notes[element].title = title
          new_notes[element].description = description
          new_notes[element].tag = tag
          break;
        }
      }
      setNotes(new_notes)
    }
    return(
    
        <NoteContext.Provider value={{notes,add_note,delete_note,edit_note,get_notes}}>
        {props.children}
        </NoteContext.Provider>
    
    )
}

export default NoteState;