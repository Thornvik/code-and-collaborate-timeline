import React, { useState, useEffect } from 'react'
import './index.scss'
import data from '../../data'
import TimelineScroll from '../TimelineScroll/index'
import TimelineDisplay from '../TimelineDisplay/index'
import Banner from '../Banner/index'
import Footer from '../Footer/index'
import Button from '../Button/index'

function DataMaker(param) { //a function for sorting through the data from our data base
    let output = [];//empty array to fill with data
    for (let i = 1950; i < 2050; i++) { //a loop that itteratets over numbers from 1950 to 2050
        const id = "#" + i //createing the id that we later use for scrolling to diffrent parts of the website
        const array = [i, param.filter((item) => parseInt(item.Year) === i), id]; //Creating an array to which we add the sorted data from our database and the id we created
        if (array[1][0]) {
            output.push(array); //pushing the array with the sorted data and our id to output
        }
    }
    return output;
}


function TimelineMaker(param, toggle) {
    let card = []; //an empty array to which we will add al of the TimelineDisplay components
    let scroll = [];

    param.forEach(element => { //here we use a forEach to send the correct data to the components timelineDisplay and timelineScroll
        card.push(<TimelineDisplay year={element[0]} array={element[1]} />) //send the component timelineDisplay the year and the object which contains the texts and tags for that year
        scroll.push(<TimelineScroll year={element[0]} id={element[2]} />) //sending the component timelineScroll the year and the id
    })
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
    const [tagFilter, setTagFilter] = useState("all")
    console.log(tagFilter)

    useEffect(() => {
        // fetch("URL goes here") //here we call the api
        //     .then(res => res.json()) //here we convert the result from the api to json
        //     .then((result) => {
        //         setTimelineData(DataMaker(result)) //here we add the data to the state we made
        //     })
        setTimelineData(DataMaker(data));
    }, []);
    return (
        <div className="scrollWrapper">
            <div className="bannerArea"><Banner /></div>
            <div className="timelineWrapper">
                <div className="timelineScroll"><ul>{TimelineMaker(timelineData, false)}</ul></div>
                <div className="timelineDisplay">{TimelineMaker(timelineData, true)}</div> {/*Here we send the function TimelineMaker the data from the API, and we render aout the component TimelineDisplay */}
                <div className="timelineButton"><Button tag={tagFilter} changeTag={(tag) => setTagFilter(tag)} /></div>
            </div>
            <div className="footerArea"><Footer /></div>
        </div>
    );
}

export default SmartWrapper