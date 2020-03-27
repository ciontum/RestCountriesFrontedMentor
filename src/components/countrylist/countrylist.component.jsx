import React from "react"
import CountryCard from "../countrycard/countrycard.component";
import "./countrylist.styles.css"
const CountryList=({countryList,darkClass})=>{
return (
    <div className="country-list_container">
    {
        countryList.map(country=>{
           return  <CountryCard darkClass={darkClass} country={country}  />
        })
    }
    </div>
)
}
export default CountryList;