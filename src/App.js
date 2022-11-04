import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState('');
  const [editableNote, setEditableNote] = useState(null);
  const [editMode, setEditMode] = useState(false);

  
  const noteCreateHandler = (event) =>{
    event.preventDefault();
    if(title){
      const newNote = {
        id: Date.now(),
        title: title,
        isComplete: false
      }
      setNotes([newNote, ...notes]);
      setTitle('');

    }else{
      alert('Please enter a valid title');
    }
  }

  const noteDeleteHandler = (noteId) =>{
    setNotes(notes.filter((note) => note.id !== noteId))
  }
  const editHandler = (noteId) =>{
    const tobeEdited = notes.find((note) =>note.id === noteId);
    setEditMode(true);
    setEditableNote(tobeEdited);
    setTitle(tobeEdited.title);
  }
  const updateHandler = (event) =>{
    event.preventDefault();
    if(title){
      const newNotesArray = notes.map((note)=>{
        if(note.id === editableNote.id){
          note.title = title;
        }
        return note;
      })
      setNotes(newNotesArray);
      setEditMode(false);
      setEditableNote(null);
      setTitle('');
    }else{
      alert('Please enter a valid title');
    }
  }

  const handleClick = (is) =>{
    setNotes(notes.map((item) =>{
      if(item.id === is){
        item.isComplete = !item.isComplete;
      }
      return item;
    }))
      
  }
  return (
    <div className="App">
      <form onSubmit = { (event) => editMode ? updateHandler(event) : noteCreateHandler(event)} style={{display:'flex', alignItems: 'center', justifyContent:'center'}}>
        <input onChange={(event) => setTitle(event.target.value)} type="text" value = {title} name="" id="" placeholder='Enter your note'/>
        <button type="submit">{editMode? 'Update Note' : 'Add Note'}</button>
      </form>
      
      <ul className='list-area' style={{textAlign: 'center', paddingRight: '350px', paddingLeft:'350px'}}>
        {notes.map((note) =>( 
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
    </div>
  );
}

export default App;
