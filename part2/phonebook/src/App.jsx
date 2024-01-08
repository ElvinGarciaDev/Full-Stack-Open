import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phone: '040-123456', id: 1 },
    { name: 'Ada Lovelace', phone: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', phone: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', phone: '39-23-6423122', id: 4 },
    { name: 'John Doe', phone: '12-43-6423122', id: 5 }

  ])
  const [newName, setNewName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [searchName, setSearchName] = useState('')



  // For name
  const handleInput = (e) => {
    setNewName(e.target.value)
  }

  // for phone number
  const handleNewNumber = (e) => {
    setPhoneNumber(e.target.value)
  }

  // For searching name
  const handleSearchName = (e) => {
    setSearchName(e.target.value)
  }

  // Filter name
  const filterName =  searchName === '' ? persons : persons.filter(person => person.name.toLowerCase() === searchName.toLowerCase())
  

  const submitName = (e) => {
    e.preventDefault()

    let newPerson = {
      name: newName
    }

    // Check if the new name already exists in the persons array
    const nameExists = persons.some((person) => person.name === newName);

    if (nameExists) {
    alert(`${newName } already exists`); // Handle the case where the name already exists
    } else {
      const newPerson = { name: newName, phone: phoneNumber };
      setPersons([...persons, newPerson]);
      setNewName(''); // Clear the input field after submitting
      setPhoneNumber('')
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
          <label>Search for name:</label>
          <input type='text' value={searchName} onChange={handleSearchName}/>
        </div>
        <br></br>
      <form onSubmit={submitName}>
        <div>
          name: <input required value={newName} onChange={handleInput}/>
          number: <input required value={phoneNumber} onChange={handleNewNumber}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>

      </form>
      <h2>Numbers</h2>
      
      {filterName.map((item, index) => (
        <p key={item.id}>
          {item.name} {item.phone}
        </p>
      ))}
    </div>
  )
}

export default App