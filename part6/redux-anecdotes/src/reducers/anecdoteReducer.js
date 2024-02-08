import { createSlice } from '@reduxjs/toolkit';

const anecdotesSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    vote(state, action) {
      const id = action.payload;
      const anecdote = state.find(note => note.id === id);
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
      const newObj = {
        content: action.payload,
        votes: 0
      };
      return [...state, newObj];
    }
  }
});

export const { vote, addNewNote, setNotes } = anecdotesSlice.actions;

export default anecdotesSlice.reducer;
