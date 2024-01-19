import Button from "./Button";

const Country = ({ filteredValue }) => {
  // Render based on filteredValue length
  if (filteredValue.length > 10) {
    return <p>Too many matches, specify another filter</p>;
  } else if (filteredValue.length <= 10 && filteredValue.length > 1) {
    return (
      <>
        {filteredValue.map((country, i) => (
          <div>
            <p key={i}>{country.name.official}</p>
            <Button country={country} />
          </div>
        ))}
      </>
    );
  } else if (filteredValue.length === 1) {
    return (
      <>
        {filteredValue.map((country, i) => (
          <div>
            <p key={i}>{country.name.official}</p>
            <p>Capital: {country.capital}</p>
            <p>Area: {country.area}</p>

            <span>{country.flag}</span>
          </div>
        ))}
      </>
    );
  }
};

export default Country;
