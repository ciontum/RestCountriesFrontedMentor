import React from "react"
import "./countrycard.styles.css"
import {pointPopulation} from "./util"
import { useHistory } from "react-router-dom";
const CountryCard=({darkClass,country})=>{
    const history=useHistory();
    const handleClick=name=>{
        history.push("/country/"+name)
    }
    return(
        <div className={darkClass ?"card_container dark-mode-header" : "card_container"} onClick={()=>handleClick(country.name)}>
             <img src={country.flag} />
             <div className="card_content">
                 <div className="card_title">
                     {country.name}
                 </div>
                 <div className="card_details">
                     <span>Population: <span>{pointPopulation(country.population)}</span></span>
                     <span>Region: <span>{country.region}</span></span>
                     <span>Capital: <span>{country.capital}</span></span>
                 </div>
             </div> 
        </div>
    )
}
export default CountryCard;