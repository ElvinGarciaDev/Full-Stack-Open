import React from 'react';

const Persons = ({ persons, filterName, deletePersons }) => {
  return (
    <>
      {filterName.length === 0 ? (
        persons.map((person) => (
          <p key={`person_${person.id}`}>
            {person.name} {person.number}
            <button onClick={() => deletePersons(person)}>Delete</button>

          </p>
        ))
      ) : (
        filterName.map((filteredPerson) => (
          <p key={`filteredPerson_${filteredPerson.id}`}>
            {filteredPerson.name} {filteredPerson.number}
            <button onClick={() => deletePersons(filteredPerson)}>Delete</button>

          </p>

        ))
        
      )}
    </>
  );
};

export default Persons;