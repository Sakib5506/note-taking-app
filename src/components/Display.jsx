import React from 'react'
import {useContext} from 'react'
import {NoteContext} from '../contexts/Note'

function Display() {
    const noteCtx = useContext(NoteContext);
    const noteDeleteHandler = (noteId) =>{
        noteCtx.setNotes(noteCtx.notes.filter((note) => note.id !== noteId))
      }
      const editHandler = (noteId) =>{
        const tobeEdited = noteCtx.notes.find((note) =>note.id === noteId);
        noteCtx.setEditMode(true);
        noteCtx.setEditableNote(tobeEdited);
        noteCtx.setTitle(tobeEdited.title);//check
      }

      const handleClick = (is) =>{
        noteCtx.setNotes(noteCtx.notes.map((item) =>{
          if(item.id === is){
            item.isComplete = !item.isComplete;
          }
          return item;
        }))
          
      }

  return (
    <ul className='list-area' style={{textAlign: 'center', paddingRight: '350px', paddingLeft:'350px'}}>
        {noteCtx.notes.map((note) =>( 
          <div id='div-toggler' onClick={() =>handleClick(note.id)} style={{border: '1px solid black', height: '50px', margin: '10px', backgroundColor: note.isComplete? 'red' : 'blue',color: 'whitesmoke'}}>   
          <li>
            <span>{note.title}</span><br />
            <button onClick = {(e) => {
              e.stopPropagation();
              editHandler(note.id)}}>Edit</button>
            <button onClick={(e) => {
              e.stopPropagation();
              noteDeleteHandler(note.id)}}>Delete</button>
          </li>   
          </div>       
        ))}
      </ul>
  )
}

export default Display