import React from 'react'

function Note({ text, initialPos={x:0 , y:0},...props }) {
  console.log(initialPos)
  // console.log(note)

  return (
    <div style={{ position: "absolute", border: "1px solid black", top: `${initialPos.y}px`, left: `${initialPos.x}px`, userSelect: "none", width: "200px", padding: "10px", cursor: "move", backgroundColor: "lightyellow", textAlign:"left" }} {...props}>
      📍{text}
    </div>
  )
}

export default Note