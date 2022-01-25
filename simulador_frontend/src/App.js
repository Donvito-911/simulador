import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import { getUrl } from './helpers';
import Form from './components/Form';
import Chart from './components/Chart';
import Loading from './components/Loading/Loading';

function App() {
  const [query, setQuery] = useState({ attr_0: "MOTO", zone_0: 1 });
  const [data, setData] = useState();
  const [options, setOptions] = useState({});

  useEffect(() => {
    const url = getUrl("data.csv", query);
    fetch(url).then(response => response.json())
      .then((object) => {
        setData(object.response.data);
        setOptions(object.response.options);
      });
    
      
  }, [query]);
  
  const changeFormHandler = (event) => {
    setQuery({ ...query, [event.target.name]: event.target.value });
  }


  return (
    <main >
      
      {Object.keys(options).length > 0 ? <Form options = {options} onChangeForm={changeFormHandler}/>: null}
      <br/>
      {Object.keys(options).length > 0 ? <Chart data={data} />: <Loading />}
      <br />
      
    </main>);
}

export default App;
