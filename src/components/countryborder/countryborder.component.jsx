import React, { useState,useEffect } from "react"
import "./countryborder.styles.css"
const CountryBorder=({countryBorderName,darkClass})=>{
    const [countryBorder,setCountryBorder]=useState([])
    useEffect(()=>{
        console.log(countryBorderName)
        if(countryBorder){
            fetch("https://restcountries.eu/rest/v2/alpha/"+countryBorderName)
            .then(data=>data.json()).then(realdata=>setCountryBorder(realdata.name))
    
        }
    },[])
    return(
        <div className={darkClass ? "country-border_container dark-mode-header" : "country-border_container"}>
            <span>{countryBorder}</span>
        </div>
    )
}

export default CountryBorder;