import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import Notes from "./Components/Notes";
import NewNote from "./Components/NewNote";
import VisibilityFilter from "./Components/VisibilityFilter";

import { setNotes, initializeNotes } from "./reducers/noteReducer";
import noteService from "./services/notes";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeNotes())
  }, []);

  return (
    <div>
      <NewNote />
      <VisibilityFilter />
      <Notes />
    </div>
  );
};

export default App;
