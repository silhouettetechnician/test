import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [organisationObj, setOrganisationObj] = useState()
  console.log(JSON.stringify({"organisationName": "TEST ORG"}))
  useEffect(() => {
    // POST request using fetch inside useEffect React hook
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json',
        'Accept': 'application/json' },
        body: JSON.stringify({"organisationName": "BACON LIMITED"})
    };
    fetch('https://prod-07.uksouth.logic.azure.com:443/workflows/898f87037c714395bb499838088c9ba4/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=1Ge5HkUuQ_rEOO6gdS_uP3H5unK6_m5knd81Ai7ACMw', requestOptions)
        // .then(response => response.json())
        .then(resp => resp.json())
        .then(function(response) {
          console.info('fetch()', response);
          return response;
        })
        .catch(err => console.log(err))

// empty dependency array means this effect will only run once (like componentDidMount in classes)
}, []);

const getData = () => {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json',
    'Accept': 'application/json' },
};
fetch('https://prod-07.uksouth.logic.azure.com:443/workflows/898f87037c714395bb499838088c9ba4/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=1Ge5HkUuQ_rEOO6gdS_uP3H5unK6_m5knd81Ai7ACMw', requestOptions)
    // .then(response => response.json())
    .then(resp => resp.json())
    .then(function(response) {
      console.info('fetch()', response);
      return response;
    })
    .catch(err => console.log(err))
}
  return (
    <div className="App">
      <button onClick={() => getData()}>Click</button>
    </div>
  );
}

export default App;
