import React from "react";
import { useLocation } from "react-router-dom";

const Details = () => {
  const { state } = useLocation();

  if (!state || !state.data) {
    return <p>No country data available.</p>;
  }

  const { name, region, population, capital, flags } = state.data;

  return (
    <div>
      <h2>{name.common}</h2>
      <img src={flags.png} alt={`Flag of ${name.common}`} />
      <p><strong>Region:</strong> {region}</p>
      <p><strong>Population:</strong> {population.toLocaleString()}</p>
      <p><strong>Capital:</strong> {capital ? capital[0] : "N/A"}</p>
    </div>
  );
};

export default Details;
