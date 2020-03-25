import React from "react"
import "./header.styles.css"

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faMoon} from "@fortawesome/free-solid-svg-icons"
import {faSun} from "@fortawesome/free-solid-svg-icons"
const Header=({setDarkClass,darkClass})=>{
    return(
        <div className={darkClass ? "header_container dark-mode-header" : "header_container"}>
                <span className="header_title">Where in the world?</span>
                {
                darkClass===false?
                <div>
                <FontAwesomeIcon style={{marginRight:"0.3em"}} icon={faMoon} />
                <span className="header_mode" onClick={()=>setDarkClass(true)}>Dark Mode</span>
                </div>
                :
                <div>
                <FontAwesomeIcon style={{marginRight:"0.3em"}} icon={faSun} />
                <span className="header_mode" onClick={()=>setDarkClass(false)}>Light Mode</span>
                </div>
                }
        </div>
    )
}
export default Header;