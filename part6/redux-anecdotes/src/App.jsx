import { useEffect } from "react";
import NewNote from "./components/NewNote";
import AnecdoteList from "./components/AnecdoteList";
import Notification from "./components/Notification";

import anecdotesServices from './services/anecdotes'
import {initializeAnecdotes} from './reducers/anecdoteReducer'

import { useDispatch } from "react-redux";

const App = () => {

  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(initializeAnecdotes())

  }, [])
  
  return (
    <div>
      <h2>Anecdotes</h2>
      <Notification/>
      <AnecdoteList />

      <NewNote />
    </div>
  );
};

export default App;
