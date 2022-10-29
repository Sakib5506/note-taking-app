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

  return (
    <div className="App">
      <form onSubmit = { (event) => editMode ? updateHandler(event) : noteCreateHandler(event)}>
        <input onChange={(event) => setTitle(event.target.value)} type="text" value = {title} name="" id="" placeholder='Enter your note'/>
        <button type="submit">{editMode? 'Update Note' : 'Add Note'}</button>
      </form>
      <ul className='list-area'>
        {notes.map((note) =>(
          <li>
            <span>{note.title}</span>
            <button onClick = {() => editHandler(note.id)}>Edit</button>
            <button onClick={() => noteDeleteHandler(note.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
