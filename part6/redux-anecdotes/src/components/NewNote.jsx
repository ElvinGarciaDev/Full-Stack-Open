import { useDispatch } from "react-redux";
import { addNewNote } from "../reducers/anecdoteReducer";
import { newAnecdote } from "../reducers/notificationReducer";
import servicesAnecdotes from "../services/anecdotes";

import axios from "axios";

const NewNote = () => {
  const dispatch = useDispatch(); // The useDispatch hook provides any React component access to the dispatch function of the Redux store defined in main.jsx.

  let addNote = async (event) => {
    event.preventDefault();
    const content = event.target.note.value;
    event.target.note.value = "";

    try {
      let res = await servicesAnecdotes.createAnecdotes(content);
      dispatch(addNewNote({ obj: res }));

      // Dispatch the notification
      dispatch(newAnecdote(content));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <h2>create new</h2>
      <form onSubmit={addNote}>
        <div>
          <input type="input" name="note" />
        </div>
        <button type="submit">create</button>
      </form>
    </>
  );
};

export default NewNote;
