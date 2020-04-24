import React from 'react'
import './index.scss'

function TimelineDisplay({ year, id, text, tag, link }) { //function for TimelineDisplay and give it props (year, id etc) to which we later will pass the relevant information

    return (
        <div className="cardWrapper" id={year}>
            <h2>{year}</h2>
            <h3>{id}</h3>
            <h3>{tag}</h3>
            <a href={link}>
                <p>{text}</p>
            </a>
        </div>
    );
}

export default TimelineDisplay