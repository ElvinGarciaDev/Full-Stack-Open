import { useState } from "react";
import PersonForm from "./components/PersonForm";
import Filter from "./components/Filter";
import Person from "./components/Persons";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", phone: "040-123456", id: 1 },
    { name: "Ada Lovelace", phone: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", phone: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", phone: "39-23-6423122", id: 4 },
    { name: "John Doe", phone: "12-43-6423122", id: 5 },
  ]);

  // Array will contain the person the user is searching/filtering for
  const [filterName, setFilterName] = useState([]);

  const [newName, setNewName] = useState(""); // State for phone Number
  const [phoneNumber, setPhoneNumber] = useState(""); // State for phone Number

  // State for filter input
  const [searchName, setSearchName] = useState("");

  // Input for entering new name
  const handleInput = (e) => {
    setNewName(e.target.value);
  };

  // input for entering new phone number
  const handleNewNumber = (e) => {
    setPhoneNumber(e.target.value);
  };

  // Handles input when someone is trying to search for a name. It also filters/searches for the name the user is asking for
  const handleSearchName = (e) => {
    const searchValue = e.target.value;
    setSearchName(searchValue);

    if (searchValue === "") {
      setFilterName([]); // Set filterName to an empty array if the input is empty. We need this because if filterName state is not empty it won't show all the names in phonebook. See Persons.jsx
    } else {
      const regex = new RegExp(searchValue, "i");
      const filteredPersons = persons.filter((person) =>
        regex.test(person.name)
      );
      setFilterName(filteredPersons);
    }
  };

  // WHen someone submitts a new name to the phonebook
  const submitName = (e) => {
    e.preventDefault();

    let newPerson = {
      name: newName,
    };

    // Check if the new name already exists in the persons array
    const nameExists = persons.some((person) => person.name === newName);

    if (nameExists) {
      alert(`${newName} already exists`); // Handle the case where the name already exists
    } else {
      const newPerson = {
        name: newName,
        phone: phoneNumber,
        id: Math.floor(Math.random() * 100),
      };
      setPersons([...persons, newPerson]);
      setNewName(""); // Clear the input field after submitting
      setPhoneNumber("");
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter searchName={searchName} handleSearchName={handleSearchName} />
      <br></br>
      <h3>Add a new</h3>
      <PersonForm
        submitName={submitName}
        newName={newName}
        handleInput={handleInput}
        phoneNumber={phoneNumber}
        handleNewNumber={handleNewNumber}
      />

      <h1>Numbers</h1>
      <Person persons={persons} filterName={filterName} />
    </div>
  );
};

export default App;
