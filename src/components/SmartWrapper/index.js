import React, { useState, useEffect } from 'react'
import './index.scss'
import data from '../../data'
import TimelineScroll from '../TimelineScroll/index'
import TimelineDisplay from '../TimelineDisplay/index'
import Banner from '../Banner/index'
import Footer from '../Footer/index'
import Button from '../Button/index'

function DataMaker(param) {
    let output = [];
    for (let i = 1950; i < 2050; i++) {
        const array = [i, param.filter((item) => parseInt(item.Year) === i)];
        if (array[1][0]) {
            output.push(array);
        }
    }
    //console.log(typeof output[0][1]);
    return output;
}


function TimelineMaker(param, toggle) {
    let card = []; //an empty array to which we will add al of the TimelineDisplay components
    let scroll = [];
    param.forEach(element => {
        card.push(<TimelineDisplay year={element[0]} array={element[1]} />)
        scroll.push(<TimelineScroll year={element[0]} id={element[1]} />)
        console.log(element[1])
    })
    // param.map(item => (
    //     card.push(<TimelineDisplay id={item.Id} year={item.Year} text={item.Text} tag={item.Tag} link={item.Link} key={item.Year} />), //here we  push all of the TimelineDisplay components to the array named card
    //     scroll.push(<TimelineScroll year={item.Year} id={item.Id} />)
    // ))
    if (toggle) {
        return (
            card
        );
    }
    if (!toggle) {
        return (
            scroll
        );
    }
}

function SmartWrapper() {
    const [timelineData, setTimelineData] = useState([]) //State to which we will add the data from the api
    const [overview, setOverview] = useState(true)

    useEffect(() => {
        // fetch("URL goes here") //here we call the api
        //     .then(res => res.json()) //here we convert the result from the api to json
        //     .then((result) => {
        //         setTimelineData(DataMaker(result)) //here we add the data to the state we made
        //     })
        setTimelineData(DataMaker(data));
    }, []);

    //console.log(timelineData)
    return (
        <div className="scrollWrapper">
            <div className="bannerArea"><Banner /></div>
            <div className="timelineWrapper">
                <div className="timelineScroll"><ul>{TimelineMaker(timelineData, false)}</ul></div>
                <div className="timelineDisplay">{TimelineMaker(timelineData, true)}</div> {/*Here we send the function TimelineMaker the data from the API, and we render aout the component TimelineDisplay */}
                <div className="timelineButton"><Button /></div>
            </div>
            <div className="footerArea"><Footer /></div>
        </div>
    );
}

export default SmartWrapper