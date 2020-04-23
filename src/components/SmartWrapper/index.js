import React from 'react'
import './index.scss'
import data from '../../data'
import TimelineScroll from '../TimelineScroll/index'
import TimelineDisplay from '../TimelineDisplay/index'
import Banner from '../Banner/index'
import Footer from '../Footer/index'


function SmartWrapper () {
    return (
        <div className="scrollWrapper">
            <div className="bannerArea"><Banner /></div>
            <div className="timelineWrapper">
                <div className="timelineScroll">timeline scroll</div>
                <div className="timelineDisplay">Timeline display</div>
            </div>
            <div className="footerArea"><Footer /></div>
        </div>
    );
}

export default SmartWrapper