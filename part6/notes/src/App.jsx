import Notes from './Components/Notes'
import NewNote from './Components/NewNote'
import VisibilityFilter from './Components/VisibilityFilter'

const App = () => {
  return (
    <div>
      <NewNote />
      <VisibilityFilter />
      <Notes />
    </div>
  )
}

export default App