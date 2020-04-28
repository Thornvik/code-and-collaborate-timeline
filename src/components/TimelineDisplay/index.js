import React from 'react'
import './index.scss'

function Textloop(param) { //a function for sorting through the data and placing it in the right place
    let output = []
    param.map(item => (
        output.push(<a href={item.Link}><p className={item.Tag}>{item.Text}</p></a>)
    ))

    return output
}

function TimelineDisplay({ year, array, cardClass }) {
    return (
        <div className="cardWrapper" id={year} >
            <h2>{year}</h2>
            {Textloop(array)} {/* calling the function TextLoop with the data from the database as the param to sort throug it */}
        </div>
    );
}

export default TimelineDisplay