import { useSelector, useDispatch } from "react-redux";
import { vote } from "../reducers/anecdoteReducer";
import {clickVote} from "../reducers/notificationReducer"

const AnecdoteList = () => {
  const anecdotes = useSelector((state) => state.anecdotes); // Can get values from the store
  const dispatch = useDispatch(); // The useDispatch hook provides any React component access to the dispatch function of the Redux store defined in main.jsx.

  const sortedAnecdotes = anecdotes.slice().sort((a, b) => b.votes - a.votes);

  const updateVote = (anecdote) => {
    dispatch(vote(anecdote.id));

    // also update the notification reducer
    dispatch(clickVote(anecdote))
  };

  return (
    <>
      {sortedAnecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => updateVote(anecdote)}>vote</button>
          </div>
        </div>
      ))}
    </>
  );
};

export default AnecdoteList;
