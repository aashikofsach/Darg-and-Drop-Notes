import { useState } from 'react'
import './App.css'
import Notes from './Components/Notes';

function App() {
  const [notes, setNotes] = useState([
    {
      id: 1,
      data: "Description 1 "
    },
    {
      id: 2,
      data: "Description 2"
    }
  ]);

  return (
    <div >
      <Notes notes={notes} setnotes={setNotes}/>

    </div>
  )
}

export default App
