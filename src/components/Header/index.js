import React from 'react'
import './index.css'

export default function Header() {
    return (
        <div className="headerContainer">
           <div className="header-heading">
           <p className="header-text">Cocktail Day</p>
           <div className="header-search">
           <input className="header-search_box" type="text" placeholder="Search by ingredients"/>
           <button className="header-search_button" type="button">Search</button>
           </div>
           </div>
        </div>
    )
}
