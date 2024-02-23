import { useDispatch } from 'react-redux'
import noteReducer, { createNote, toggleImportanceOf } from '../reducers/noteReducer'
import noteService from '../services/notes'

const NewNote = () => {

  const dispatch = useDispatch() // The useDispatch hook provides any React component access to the dispatch function of the Redux store defined in main.jsx.

  const addNote = async (event) => {
    event.preventDefault()
    const content = event.target.note.value
    event.target.note.value = ''


    dispatch(createNote(content))
  }

  return (
    <form onSubmit={addNote}>
      <input name="note" />
      <button type="submit">add</button>
    </form>
  )
}

export default NewNote