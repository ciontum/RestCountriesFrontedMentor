import React from "react"
import "./searchbyregion.styles.css"
const SearchRegion=({darkClass,setRegion})=>{
    const handleChange=e=>{
        setRegion(e.target.value)
    }
    return(
    <select className={darkClass ? "select_container dark-mode-header" : "select_container"} defaultValue={"Filter by Region"} onChange={handleChange}>
        <option value="Filter by Region" disabled="disabled">Filter by Region</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
    </select>)
}
export default SearchRegion;