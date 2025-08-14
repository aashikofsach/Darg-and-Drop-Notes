import React, { forwardRef } from 'react'

const Note = forwardRef(({ text, initialPos = { x: 0, y: 0 }, ...props }, ref) =>{
  console.log(initialPos)
  // console.log(note)

  return (
    <div ref={ref} style={{ position: "absolute", border: "1px solid black", top: `${initialPos.y}px`, left: `${initialPos.x}px`, userSelect: "none", width: "200px", padding: "10px", cursor: "move", backgroundColor: "lightyellow", textAlign: "left" }} {...props}>
      📍{text}
    </div>
  )
})

export default Note