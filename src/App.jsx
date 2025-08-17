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

  const [input , setInput] = useState("");

  function addNote()
  {
    let newId = notes.length+1 ;
    setNotes(prev=> {
      return [...prev , {id : newId, data : input}]
    })
  }


  return (
    <div >
     <div>
       <input type="text" onChange={(e)=>setInput(e.target.value)} value={input}/>
       <button onClick={() => addNote()}>Add</button>
     </div>
      <Notes notes={notes} setnotes={setNotes}/>

    </div>
  )
}

export default App
