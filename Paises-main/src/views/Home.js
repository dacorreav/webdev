import React, { useState } from "react";
import Countries from "../components/Countries";
import urlApi from "../assets/useFetchDataCountries";

const Home = () => {
  const { data } = urlApi("https://restcountries.eu/rest/v2/all");
  const [searchTerm, setSearchterm] = useState("");
  return (
    <div>
      <input
        type="text"
        placeholder="Buscar..."
        onChange={(event) => {
          setSearchterm(event.target.value);
        }}
      />{" "}
      {data.map((country) => {
        if (country.name.toLowerCase().includes(searchTerm.toLowerCase())) {
          return (
            <Countries
              key={country.numericCode}
              flag={country.flag}
              name={country.name}
              capital={country.capital}
              demonym={country.demonym}
              region={country.region}
              population={country.population}
            />
          );
        } else if (searchTerm === "") {
          return (
            <Countries
              key={country.capital}
              flag={country.flag}
              name={country.name}
              capital={country.capital}
              demonym={country.demonym}
              region={country.region}
              population={country.population}
            />
          );
        } else return [];
      })}{" "}
    </div>
  );
};
export default Home;
