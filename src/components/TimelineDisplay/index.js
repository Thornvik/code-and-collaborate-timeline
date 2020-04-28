import React from 'react'
import './index.scss'

function Textloop(param) {
    let output = []
    param.map(item => (
        output.push(<p>{item.Tag}</p>, <p className={item.Tag}>{item.Text}</p>)
    ))

    return output
}

function TimelineDisplay({ year, array, cardClass }) { //function for TimelineDisplay and give it props (year, id etc) to which we later will pass the relevant information

    //console.log(year, array)

    return (
        <div className="cardWrapper" id={array[0].Id} >
            <h2>{year}</h2>
            {Textloop(array)}
        </div>
    );
}

export default TimelineDisplay