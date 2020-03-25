import React from "react"
import "./searchbycountry.styles.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faSearch} from "@fortawesome/free-solid-svg-icons"
const SearchField=({darkClass,setCountries,region})=>{
    const handleChange=e=>{
        const {value}=e.target
        if(value)
        if(region==='')
        fetch("https://restcountries.eu/rest/v2/name/"+value).then(data=>data.json()).then(realdata=>setCountries(realdata))
        else
        fetch("https://restcountries.eu/rest/v2/name/"+value).then(data=>data.json())
                                                                                                         .then(countries=>{
                                                                                                             const filtered=[];
                                                                                                             countries.forEach(country=>{
                                                                                                                 if(country.region===region)
                                                                                                                 filtered.push(country)
                                                                                                             })
                                                                                                             setCountries(filtered);
                                                                                                         })
        else
        {
            if(region==="")
              fetch("https://restcountries.eu/rest/v2/all").then(data=>data.json()).then(realdata=>setCountries(realdata))
                else
              fetch("https://restcountries.eu/rest/v2/region/"+region).then(data=>data.json()).then(realdata=>setCountries(realdata))
        }
    }
    return (
        <div className={darkClass ? "search_field_container dark-mode-header" : "search_field_container"}>
            <FontAwesomeIcon className="aws-search" icon={faSearch} />
            <input className={darkClass ? "search_field_input dark-mode-header" : "search_field_input"}
                          type="text" 
                          placeholder="Search by country" 
                          onChange={handleChange}    
                          />
        </div>
    )
}

export default SearchField;