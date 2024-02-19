import { useSelector, useDispatch } from "react-redux";
import { updateVote } from "../reducers/anecdoteReducer";

const AnecdoteList = () => {
  const anecdotes = useSelector((state) => state); // Can get values from the store
  const dispatch = useDispatch(); // The useDispatch hook provides any React component access to the dispatch function of the Redux store defined in main.jsx.

  const sortedAnecdotes = anecdotes.sort((a, b) => b.votes - a.votes);

  const vote = (id) => {
    dispatch(updateVote(id));
  };

  return (
    <>
      {sortedAnecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      ))}
    </>
  );
};

export default AnecdoteList;
