import React from "react";
import Details from "../components/Details.jsx";
import urlApi from "../assets/useFetchDataCountries";
import { useParams } from "react-router-dom";

const Pais = () => {
  const { data } = urlApi("https://restcountries.eu/rest/v2/all");
  const { id } = useParams();
  return (
    <div>
      {" "}
      {data.map((country) => {
        if (country.name === id) {
          return (
            <Details
              key={country.numericCode}
              flag={country.flag}
              name={country.name}
              capital={country.capital}
              demonym={country.demonym}
              region={country.region}
              population={country.population}
              topLevelDomain={country.topLevelDomain}
              nativeName={country.nativeName}
            />
          );
        } else {
          return "";
        }
      })}{" "}
    </div>
  );
};
export default Pais;
