import { createSlice } from "@reduxjs/toolkit";

import anecdotesService from "../services/anecdotes";

const anecdotesSlice = createSlice({
  name: "anecdotes",
  initialState: [],
  reducers: {
    vote(state, action) {

      const id = action.payload.id;

      const anecdote = state.find((note) => note.id === id);
      if (anecdote) {
        anecdote.votes += 1;
      } else {
        // Handle error when anecdote with given id is not found
        console.error(`Anecdote with id ${id} not found`);
      }
    },
    setNotes(state, action) {
      // Ensure immutability by returning the payload as the new state
      return action.payload;
    },
    addNewNote(state, action) {
      // Ensure immutability by returning a new state array with the new note added
      let obj = action.payload;
      return [...state, obj];

    },
  },
});

export const { vote, addNewNote, setNotes } = anecdotesSlice.actions;

export const initializeAnecdotes = () => {
  return async dispatch => {

    const anecdotes = await anecdotesService.getAll()
    dispatch(setNotes(anecdotes))

  }
}

export const createAnecdote = (content) => {
  return async dispatch => {

    const anecdote = await anecdotesService.createAnecdotes(content)
    dispatch(addNewNote(anecdote))
  }
}


export const updateVoteAnecdotes = (obj) => {
  return async dispatch => {
    const updatedAnecdote = await anecdotesService.updateAnecdotes(obj)

    dispatch(vote(updatedAnecdote))
  }
}


export default anecdotesSlice.reducer;
