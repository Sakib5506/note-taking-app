import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import Form from './components/Form';
import Display from './components/Display';

function App() {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState('');
  const [editableNote, setEditableNote] = useState(null);
  const [editMode, setEditMode] = useState(false);

  
  
  return (
    <div className="App">
      
      <Form
        title = {title}
        setTitle = {setTitle}
        notes = {notes}
        setNotes = {setNotes}
        editableNote = {editableNote}
        setEditableNote = {setEditableNote}
        editMode = {editMode}
        setEditMode = {setEditMode}
      />

      <Display
        title = {title}
        setTitle = {setTitle}
        notes = {notes}
        setNotes = {setNotes}
        editableNote = {editableNote}
        setEditableNote = {setEditableNote}
        editMode = {editMode}
        setEditMode = {setEditMode}
      />


    </div>
  );
}

export default App;
