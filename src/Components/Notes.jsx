import React, { useEffect } from 'react'
import Note from './Note'

function Notes({ notes, setnotes }) {

    useEffect(() => {

        let savedNotes = [] ;

        let updatedNotes = notes.map((note)=> {
            let savedNote = null ;
            if(savedNote)
            {
                return{}
            }
            else
            {
                const position = determinePosition();
                return {...note, position}
            }

        })

        setnotes(updatedNotes)
     
    }, [notes.length])

    function determinePosition()
    {
        let maxX = window.innerWidth - 250 ;
        let maxY = window.innerHeight - 250 ;

        return {
            x: Math.floor(Math.random() * maxX),
            y: Math.floor(Math.random() * maxY)
        }
    }
    
    return (
        <div >
            {
                notes.map((note) => <Note key={note.id} initialPos={note.position} text={note.data}/>)
            }

        </div>
    )
}

export default Notes