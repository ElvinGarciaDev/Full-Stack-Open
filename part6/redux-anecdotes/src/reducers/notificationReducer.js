import { createSlice } from '@reduxjs/toolkit';

let initialState = ''



const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    clearNotification(state, action) {
         return state = ''
    }, 
    clickVote(state, action){
        let anecdotes = action.payload.content
        return state = `you voted ${anecdotes}`
    },
    newAnecdote(state, action) {
        console.log(action)
        let anecdote = action.payload
        return state = `you created ${anecdote}`

    }
  }
});

export const { clearNotification, clickVote, newAnecdote } = notificationSlice.actions;

export default notificationSlice.reducer;