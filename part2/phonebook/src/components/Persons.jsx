import React from 'react';

const Persons = ({ persons, filterName }) => {
  return (
    <>
      {filterName.length === 0 ? (
        persons.map((person) => (
          <p key={`person_${person.id}`}>
            {person.name} {person.phone}
          </p>
        ))
      ) : (
        filterName.map((filteredPerson) => (
          <p key={`filteredPerson_${filteredPerson.id}`}>
            {filteredPerson.name} {filteredPerson.phone}
          </p>
        ))
      )}
    </>
  );
};

export default Persons;