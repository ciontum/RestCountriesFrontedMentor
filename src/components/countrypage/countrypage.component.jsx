import React, { useEffect, useState } from "react"
import "./countrypage.styles.css"
import {pointPopulation} from "../countrycard/util"
import CountryBorder from "../countryborder/countryborder.component"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons"
import { useHistory } from "react-router-dom"
const CountryPage=({match,darkClass})=>{
    const [country,setCountry]=useState([])
    const history=useHistory();
    useEffect(()=>{
        fetch("https://restcountries.eu/rest/v2/name/"+match.params.countryName).then(data=>data.json()).then(realdata=>setCountry(realdata[0]))
    
    },[])
        return(
        <div className={darkClass? "country-page_container dark-mode" : "country-page_container"}>
            <div className="country-page_back" onClick={()=>history.push('/')}>
                <div className={darkClass ?"country-page_back_content dark-mode-header": "country-page_back_content"}>
                    <FontAwesomeIcon icon={faArrowLeft} />
                    <span>Back</span>
                </div>
            </div>
            <div className="country-page_sub-container">
                <img src={country ? country.flag : ""} alt="flag"/>
                <div className="country-page_sub-container_content">
                        <h2>{country ? country.name : ""}</h2>
                        <div className="country-page_sub-container_sub-content">
                           <div className="country-page_sub-container_sub-content_col">
                               <p>Native name: <span>{country ? country.nativeName: <></>}</span> </p>
                               <p>Population: <span>{country.population ? pointPopulation(country.population):  <></>}</span></p>
                               <p>Region: <span>{country ?country.region:  <></>}</span></p>
                               <p>Sub Region: <span>{country ?country.subregion: <></>}</span> </p>
                               <p>Capital: <span>{country ?country.capital:  <></>}</span></p>
                           </div> 
                           <div className="country-page_sub-container_sub-content_col">
                               <p>Top Level Domain: <span>{country.topLevelDomain ? country.topLevelDomain[0]: <></> } </span></p>
                               <p>Currencies: <span>{country.currencies ? country.currencies[0].name:<></>}</span> </p>
                               <p>Languages: <span>{country.languages ? country.languages[0].name: <></>}</span></p>
                           </div>
                           
                        </div>
                        <div className="country-page_sub-container_borders">
                            Border Countries:  {
                                country.borders? 
                                    country.borders.map(border=><CountryBorder darkClass={darkClass} countryBorderName={border} />)
                                :
                                <></>
                            }
                        <div className="country-page_sub-container_border">
                        </div>
                         </div>
                </div>
              
            </div>
        </div>
    )
}
export default CountryPage;