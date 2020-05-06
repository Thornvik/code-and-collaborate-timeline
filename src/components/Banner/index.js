import React from 'react'
import './index.scss'
import banner from '../../content/banner.png'


function Banner() {
    return (
        <div className="banner">
            <div className="bannerText">
                <h1>Timeline of Resilience Thinking</h1>
                <p>Critical resilience papers,
        events and initiatives are captured on the Timeline of Resilience Thinking.</p>
            </div>
            <img className="bannerImage" src={banner} alt="Banner" />
        </div>
    );
}

export default Banner