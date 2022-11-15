import {createContext, useState} from 'react';

export const NoteContext = createContext();

function NoteProvider({children}) {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState('');
  const [editableNote, setEditableNote] = useState(null);
  const [editMode, setEditMode] = useState(false);

  return (
    <NoteContext.Provider value = {{notes, setNotes, title, setTitle, editableNote, setEditableNote, editMode, setEditMode}}>
        {children}
    </NoteContext.Provider>
  )
}

export default NoteProvider