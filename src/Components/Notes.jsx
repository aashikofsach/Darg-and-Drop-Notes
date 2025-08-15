import React, { createRef, useEffect, useRef } from "react";
import Note from "./Note";

function Notes({ notes, setnotes }) {
  useEffect(() => {
    let savedNotes = JSON.parse(localStorage.getItem("data")) || [];

    let updatedNotes = notes.map((note) => {
      let savedNote = savedNotes.find((n) => n.id === note.id)
      console.log(savedNote)
      //  savedNote = null
      if (savedNote) {
        return {
          ...note, position: savedNote.position
        };
      }
      else {
        const position = determinePosition();
        return { ...note, position };
      }
    });

    setnotes(updatedNotes);
    localStorage.setItem("data", JSON.stringify(updatedNotes))
  }, [notes.length]);

  const noteRefs = useRef([]);
  console.log(noteRefs)

  function determinePosition() {
    console.log("jai mahakal")
    let maxX = window.innerWidth - 250;
    let maxY = window.innerHeight - 250;

    return {
      x: Math.floor(Math.random() * maxX),
      y: Math.floor(Math.random() * maxY),
    };
  }

  function handleDragStart(note, e) {
    const { id } = note;
    console.log('jai mahakal doobara ')
    const noteRef = noteRefs.current[id].current;
    const rect = noteRef.getBoundingClientRect();
    // console.log(e.clientX )
    // console.log(e.clientY)
    // console.log(rect)
    // console.log(e.clientX -rect.left)
    let offsetX = e.clientX - rect.left;
    let offsetY = e.clientY - rect.top;
    // console.log(offsetX, offsetY)
    console.log(note)
    console.log(e.clientX)

    const handleMouseMove = (e) => {
      console.log("mouseMOve ")
      const newX = e.clientX - offsetX;
      const newY = e.clientY - offsetY;
      console.log(newX, newY)

      noteRef.style.left = `${newX}px`
      noteRef.style.top = `${newY}px`
    } ;

    const handleMouseUp = () =>{
      console.log("mouse up ")
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup',handleMouseUp)

    }

    document.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseup", handleMouseUp)
  }

  return (
    <div>
      {notes.map((note) => (
        <Note
          ref={noteRefs.current[note.id] ? noteRefs.current[note.id] : noteRefs.current[note.id] = createRef()}
          onMouseDown={(e) => handleDragStart(note, e)}
          key={note.id}
          initialPos={note.position}
          text={note.data} />
      ))}
    </div>
  );
}

export default Notes;
