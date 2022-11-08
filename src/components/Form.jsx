import React from 'react'

function Form(props) {

    const noteCreateHandler = (event) =>{
        event.preventDefault();
        if(props.title){
          const newNote = {
            id: Date.now(),
            title: props.title,
            isComplete: false
          }
          props.setNotes([newNote, ...props.notes]);
          props.setTitle('');
    
        }else{
          alert('Please enter a valid title');
        }
      }

      const updateHandler = (event) =>{
        event.preventDefault();
        if(props.title){
          const newNotesArray = props.notes.map((note)=>{
            if(note.id === props.editableNote.id){
              note.title = props.title;
            }
            return note;
          })
          props.setNotes(newNotesArray);
          props.setEditMode(false);
          props.setEditableNote(null);
          props.setTitle('');
        }else{
          alert('Please enter a valid title');
        }
      }

    return (
        <form onSubmit={(event) => props.editMode ? updateHandler(event) : noteCreateHandler(event)} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <input onChange={(event) => props.setTitle(event.target.value)} type="text" value={props.title} name="" id="" placeholder='Enter your note' />
            <button type="submit">{props.editMode ? 'Update Note' : 'Add Note'}</button>
        </form>
    )
}

export default Form