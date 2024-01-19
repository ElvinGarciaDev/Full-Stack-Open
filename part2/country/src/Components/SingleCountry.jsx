const SingleCountry = ({ country }) => {
  return (
    <>
      <p>{country.name.official}</p>
      <p>Capital: {country.capital}</p>
      <p>Area: {country.area}</p>
      <span>{country.flag}</span>

      {/* get the weather for each country */}
    </>
  );
};

export default SingleCountry;
