import { useEffect, useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/name/kingdom")
      .then((response) => response.json())
      .then((data) => {
        setCountries(data);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleSelection = (event) => {
    const selectedCountry = countries.find(
      (country) => country.cca2 === event.target.value
    );
    if (selectedCountry) {
      navigate(`/countries/${selectedCountry.cca2}`, { state: { data: selectedCountry } });
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">World Kingdoms</h1>
      {loading ? (
        <p>Loading countries...</p>
      ) : (
        <select
          onChange={handleSelection}
          className="p-2 border rounded"
          defaultValue=""
        >
          <option value="" disabled>
            Select a country
          </option>
          {countries.map((country) => (
            <option key={country.cca2} value={country.cca2}>
              {country.name.common}
            </option>
          ))}
        </select>
      )}
      <Outlet />
    </div>
  );
};

export default Countries;
