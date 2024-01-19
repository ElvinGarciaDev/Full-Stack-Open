import { useState, useEffect } from "react";
import Country from './Components/Country'
import axios from "axios";


function App() {
  const [allCountries, setAllCountries] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [filteredValue, setFilteredValue] = useState([]);

  // useEffect to fetch all Countries
  useEffect(() => {
    getCountries();
  }, []);

  // Make api call
  const getCountries = async () => {
    try {
      let response = await axios.get(
        "https://studies.cs.helsinki.fi/restcountries/api/all"
      );
      // Set state the holds all the countries
      setAllCountries(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleInput = (e) => {
    let searchValue = e.target.value; // Save the value of what the user in entering in the input
    setInputValue(searchValue); // set the input state

    if (searchValue === "") {
      // If the state of the input is empty, vlaue = []
      setFilteredValue([]);
    } else {
      const regex = new RegExp(searchValue, "i");
      const filteredCountries = allCountries.filter((countries) =>
        regex.test(countries.name.official)
      );
      setFilteredValue(filteredCountries); // what ever comes back from the regex will be placed in the filteredValue state
    }
  };


  return (
    <>
      <label>Find Countries</label>
      <input type="text" placeholder="" onChange={handleInput} />

      <Country filteredValue={filteredValue}/>


    </>
  );
}

export default App;
