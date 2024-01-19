const Country = ({ filteredValue }) => {
  // Render based on filteredValue length
  if (filteredValue.length > 10) {
    return <p>Too many matches, specify another filter</p>;
  } else if (filteredValue.length <= 10 && filteredValue.length > 1) {
    return (
      <>
        {filteredValue.map((country, i) => (
          <p key={i}>{country.name.official}</p>
        ))}
      </>
    );
  } else if (filteredValue.length === 1) {
    return (
      <>
        <p>{filteredValue[0].name.official}</p>
        <p>Capital: {filteredValue[0].capital}</p>
        <p>Area: {filteredValue[0].area}</p>

        <span>{filteredValue[0].flag}</span>


      </>
    );
  }
};

export default Country;
