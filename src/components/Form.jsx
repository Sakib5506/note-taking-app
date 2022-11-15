import React from 'react'
import {useContext} from 'react'
import {NoteContext} from '../contexts/Note'

function Form() {
    const noteCtx = useContext(NoteContext)
    const noteCreateHandler = (event) =>{
        event.preventDefault();
        if(noteCtx.title){
          const newNote = {
            id: Date.now(),
            title: noteCtx.title,
            isComplete: false
          }
          noteCtx.setNotes([newNote, ...noteCtx.notes]);
          noteCtx.setTitle('');
    
        }else{
          alert('Please enter a valid title');
        }
      }

      const updateHandler = (event) =>{
        event.preventDefault();
        if(noteCtx.title){
          const newNotesArray = noteCtx.notes.map((note)=>{
            if(note.id === noteCtx.editableNote.id){
              note.title = noteCtx.title;
            }
            return note;
          })
          noteCtx.setNotes(newNotesArray);
          noteCtx.setEditMode(false);
          noteCtx.setEditableNote(null);
          noteCtx.setTitle('');
        }else{
          alert('Please enter a valid title');
        }
      }

    return (
        <form onSubmit={(event) => noteCtx.editMode ? updateHandler(event) : noteCreateHandler(event)} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <input onChange={(event) => noteCtx.setTitle(event.target.value)} type="text" value={noteCtx.title} name="" id="" placeholder='Enter your note' />
            <button type="submit">{noteCtx.editMode ? 'Update Note' : 'Add Note'}</button>
        </form>
    )
}

export default Form