import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/header/header.component';
import SearchField from './components/searchbycountry/searchbycountry.component';
import CountryList from './components/countrylist/countrylist.component';
import SearchRegion from './components/searchbyregion/searchbyregion.component';

function App() {
  const [countries,setCountries]=useState([]);
  const [darkClass,setDarkClass]=useState(false);
  const [region,setRegion]=useState('');
  const classAdd=['container'];
  if(darkClass)
  classAdd.push('dark-mode')
  useEffect(()=>{
    if(region!=='')
    fetch("https://restcountries.eu/rest/v2/region/"+region).then(data=>data.json()).then(realdata=>setCountries(realdata))
    else
    fetch("https://restcountries.eu/rest/v2/all").then(data=>data.json()).then(realdata=>setCountries(realdata))
  },[region])
  return (
      <>
    <Header darkClass={darkClass} setDarkClass={setDarkClass}/>
    <div className={classAdd.join` `}>
    <div className="search_container">
      <SearchField darkClass={darkClass} setCountries={setCountries} region={region}/>
      <SearchRegion darkClass={darkClass} setRegion={setRegion}/ >
    </div>
    <CountryList darkClass={darkClass} countryList={countries} />
    </div>
    </>
  );
}

export default App;
