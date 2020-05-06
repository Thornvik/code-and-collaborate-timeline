import React from 'react'
import './index.scss'
import logo from '../../content/Logo.png'
import icons from '../../content/mediaicons.png'

function Nav() {
    return (
        <div className="navBar"><img src={logo} alt="grp logo"></img><img src={icons} alt="social media"></img></div>
    );
}

export default Nav