import React from 'react'
import Note from './Note'

function Notes({ notes, setnotes }) {
    return (
        <div>
            {
                notes.map((note) => <Note key={note.id} text={note.data}/>)
            }

        </div>
    )
}

export default Notes