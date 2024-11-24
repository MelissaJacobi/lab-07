import React, { useEffect, useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/name/kingdom")
      .then((response) => response.json())
      .then((data) => setCountries(data))
      .catch((error) => console.error("Error fetching countries:", error));
  }, []);

  const handleSelectChange = (event) => {
    const country = countries.find((c) => c.cca2 === event.target.value);
    if (country) {
      navigate(`/countries/${country.cca2}`, { state: { data: country } });
    }
  };

  return (
    <div>
      <h1>World Kingdoms</h1>
      <label htmlFor="countries-dropdown">Select a country:</label>
      <select
        id="countries-dropdown"
        value={selectedCountry}
        onChange={handleSelectChange}
      >
        <option value="">--Select--</option>
        {countries.map((country) => (
          <option key={country.cca2} value={country.cca2}>
            {country.name.common}
          </option>
        ))}
      </select>
      <Outlet />
    </div>
  );
};

export default Countries;
