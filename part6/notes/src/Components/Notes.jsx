import { createNote, toggleImportanceOf } from "../reducers/noteReducer";
import { useSelector, useDispatch } from "react-redux";

const Notes = () => {
  const dispatch = useDispatch(); // The useDispatch hook provides any React component access to the dispatch function of the Redux store defined in main.jsx.
  // const notes = useSelector(state => state.notes)  //The component can access the notes stored in the store with the useSelector-hook of the react-redux library.

  const notes = useSelector((state) => {
    if (state.filter === "ALL") {
      return state.notes;
    }
    return state.filter === "IMPORTANT"
      ? state.notes.filter((note) => note.important)
      : state.notes.filter((note) => !note.important);
  });

  const toggleImportance = (id) => {
    dispatch(toggleImportanceOf(id));
  };

  return (
    <div>
      <ul>
        {notes.map((note) => (
          <li key={note.id} onClick={() => toggleImportance(note.id)}>
            {note.content} <strong>{note.important ? "important" : ""}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notes;
