import React from 'react';
import Countries from './components/Countries';
import urlApi from './assets/useFetchDataCountries';






function App() {
  const {data} = urlApi('https://restcountries.eu/rest/v2/all');
  console.log(data);

  return (
    <div className="App">
      {data.slice(0, 20).map(country => 
        <Countries 
        flag={country.flag}
        name={country.name}
        capital={country.capital}
        demonym={country.demonym}
        region={country.region}
        population={country.population}
        />
        )}     
    </div>
  );
}

export default App;
