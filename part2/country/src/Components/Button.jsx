import React, { useState } from "react";

const Button = ({ country }) => {
  const [showCountryInfo, setShowCountryInfo] = useState(false);
  const [show, setShow] = useState(false); // Will give the user the option to show or hide country info

  const displayCountry = () => {
    setShowCountryInfo(!showCountryInfo);
    setShow(!show);
  };
  return (
    <>
      <button onClick={displayCountry}>{show ? "hide" : "show"}</button>

      {showCountryInfo ? (
        <>
          <p>{country.name.official}</p>
          <p>Capital: {country.capital}</p>
          <p>Area: {country.area}</p>
          <span>{country.flag}</span>
        </>
      ) : null}
    </>
  );
};

export default Button;
