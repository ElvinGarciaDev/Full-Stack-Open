import { useEffect } from "react";
import NewNote from "./components/NewNote";
import AnecdoteList from "./components/AnecdoteList";
import Notification from "./components/Notification";

import anecdotesServices from './services/anecdotes'
import {setNotes} from './reducers/anecdoteReducer'

import { useDispatch } from "react-redux";

const App = () => {

  const dispatch = useDispatch();

  // Get the data from the server
  const fetchData = async () => {
    try {

      let res = await anecdotesServices.getAll()
      dispatch(setNotes(res))
      
    } catch (error) {
      console.log(error)
    }
  }



  useEffect(() => {
    fetchData()

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
