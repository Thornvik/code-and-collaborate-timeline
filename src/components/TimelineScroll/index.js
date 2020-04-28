import React from 'react'
import './index.scss'

function TimelineScroll({ year, id }) {
    return (
        <li><a href={id}>{year}</a></li>
    );
}

export default TimelineScroll