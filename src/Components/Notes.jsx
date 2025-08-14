import React, { useEffect } from "react";
import Note from "./Note";

function Notes({ notes, setnotes }) {
  useEffect(() => {
    let savedNotes = JSON.parse(localStorage.getItem("data"))||[];

    let updatedNotes = notes.map((note) => {
      let savedNote = savedNotes.find((n)=>n.id === note.id )
      console.log(savedNote)
      //  savedNote = null
      if (savedNote) {  
        return {
          ...note , position : savedNote.position
        };
      } 
      else {
        const position = determinePosition();
        return { ...note, position };
      }
    }); 

    setnotes(updatedNotes);
    localStorage.setItem("data",JSON.stringify(updatedNotes))
  }, [notes.length]);

  function determinePosition() {
    console.log("jai mahakal")
    let maxX = window.innerWidth - 250;
    let maxY = window.innerHeight - 250;

    return {
      x: Math.floor(Math.random() * maxX),
      y: Math.floor(Math.random() * maxY),
    };
  }

  return (
    <div>
      {notes.map((note) => (
        <Note key={note.id} initialPos={note.position} text={note.data} />
      ))}
    </div>
  );
}

export default Notes;
