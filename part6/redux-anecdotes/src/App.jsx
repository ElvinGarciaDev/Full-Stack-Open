import NewNote from "./components/NewNote";
import AnecdoteList from "./components/AnecdoteList";
import Notification from "./components/Notification";

const App = () => {
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
