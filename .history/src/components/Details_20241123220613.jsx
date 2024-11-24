import { useLocation } from "react-router-dom";

const Details = () => {
  const { state } = useLocation();
  const country = state?.data;

  if (!country) {
    return <p>No country data available.</p>;
  }

  return (
    <div className="p-4 border-t mt-4 container">
      <h2 className="text-2xl font-bold mb-2">{country.name.common}</h2>
      <img
        src={country.flags.svg}
        alt={`Flag of ${country.name.common}`}
        className="w-32 mt-4"
      />
      <p>
        <strong>Capital:</strong> {country.capital ? country.capital[0] : "N/A"}
      </p>
      <p>
        <strong>Located in:</strong> {country.subregion || "N/A"}
      </p>
    </div>
  );
};

export default Details;
