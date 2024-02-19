import { useSelector, useDispatch } from "react-redux";
import { updateVote } from "./reducers/anecdoteReducer";
import NewNote from "./components/NewNote";

const App = () => {
  const anecdotes = useSelector((state) => state);
  const dispatch = useDispatch();

  const vote = (id) => {
    dispatch(updateVote(id));
  };

  const sortedAnecdotes = anecdotes.sort((a, b) => b.votes - a.votes);

  return (
    <div>
      <h2>Anecdotes</h2>
      {sortedAnecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      ))}
      <NewNote />
    </div>
  );
};

export default App;
