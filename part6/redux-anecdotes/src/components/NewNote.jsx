import { useDispatch } from 'react-redux'
import {createNote} from '../reducers/anecdoteReducer'


const NewNote = () => {

  const dispatch = useDispatch() // The useDispatch hook provides any React component access to the dispatch function of the Redux store defined in main.jsx.

  let addNote = (event) => {
    event.preventDefault()
    const content = event.target.note.value
    event.target.note.value = ''

    dispatch(createNote(content))

  }
  return (
    <>
      <h2>create new</h2>
      <form onSubmit={addNote}>
        <div>
          <input type="input" name="note"/>
        </div>
        <button type="submit">create</button>
      </form>
    </>
  );
};

export default NewNote;
