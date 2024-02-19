import NewNote from "./components/NewNote";
import AnecdoteList from "./components/AnecdoteList";

const App = () => {
  return (
    <div>
      <h2>Anecdotes</h2>
      <AnecdoteList />

      <NewNote />
    </div>
  );
};

export default App;
