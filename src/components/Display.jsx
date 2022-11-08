import React from 'react'

function Display(props) {

    const noteDeleteHandler = (noteId) =>{
        props.setNotes(props.notes.filter((note) => note.id !== noteId))
      }
      const editHandler = (noteId) =>{
        const tobeEdited = props.notes.find((note) =>note.id === noteId);
        props.setEditMode(true);
        props.setEditableNote(tobeEdited);
        props.setTitle(tobeEdited.title);//check
      }

      const handleClick = (is) =>{
        props.setNotes(props.notes.map((item) =>{
          if(item.id === is){
            item.isComplete = !item.isComplete;
          }
          return item;
        }))
          
      }

  return (
    <ul className='list-area' style={{textAlign: 'center', paddingRight: '350px', paddingLeft:'350px'}}>
        {props.notes.map((note) =>( 
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