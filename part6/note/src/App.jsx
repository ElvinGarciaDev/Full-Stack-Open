import NewNote from './components/NewNote'
import Notes from './components/Notes'
import { createNote, toggleImportanceOf } from './reducers/noteReducer'
import { useSelector, useDispatch } from 'react-redux'

const App = () => {

  const dispatch = useDispatch()
  const notes = useSelector(state => state)


  const toggleImportance = (id) => {

    dispatch(toggleImportanceOf(id))
  }

  return (
    <div>
        <NewNote/>
      <ul>

       <Notes/>
      </ul>
    </div>
  )
}

export default App