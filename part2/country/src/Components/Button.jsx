import React, { useState } from "react";
import SingleCountry from "./SingleCountry";

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
         <SingleCountry country={country}/>
        </>
      ) : null}
    </>
  );
};

export default Button;
