import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import Notes from "./Components/Notes";
import NewNote from "./Components/NewNote";
import VisibilityFilter from "./Components/VisibilityFilter";

import { setNotes } from "./reducers/noteReducer";
import noteService from "./services/notes";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const notes = await noteService.getAll();
        dispatch(setNotes(notes));
      } catch (error) {
        console.error("Error fetching notes:", error);
      }
    };

    fetchNotes();
  }, [dispatch]);

  return (
    <div>
      <NewNote />
      <VisibilityFilter />
      <Notes />
    </div>
  );
};

export default App;
