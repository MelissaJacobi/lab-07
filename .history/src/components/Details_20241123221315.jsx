import { useLocation } from "react-router-dom";
import styles from "./Details.module.css"

const Details = () => {
  const { state } = useLocation();
  const country = state?.data;

  if (!country) {
    return <p>No country data available.</p>;
  }

  return (
    <div className={styles.container}>
      <h2>{country.name.common}</h2>
      <img
        src={country.flags.svg}
        alt={`Flag of ${country.name.common}`}
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
