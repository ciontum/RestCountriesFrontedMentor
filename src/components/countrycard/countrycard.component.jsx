import React from "react"
import "./countrycard.styles.css"
const CountryCard=({darkClass,country})=>{
    const pointPopulation=(number)=>{
            number=JSON.stringify(number);
            let ct=0;
            let aux=number;
            if(number.length<=3)
            return number;
            for(let i=number.length-1;i>0;i--)
            {
              ct++;
              if(ct===3)
              {
              aux=aux.slice(0,i) +"."+ aux.slice(i);
              ct=0;
              }
          
            }
            return aux;
    }
    return(
        <div className={darkClass ?"card_container dark-mode-header" : "card_container"}>
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