import React, { useState } from 'react'
import './index.scss'


function Button({ tag, changeTag }) {
    const [hidden, setHidden] = useState(true) //a state we use to show or hide the buttons
    const [buttonClass, setButtonClass] = useState("buttonHide") //storing a classin a state which we later change depending on if hidden is true or false


    function change(e) {
        if (e) { //if e is true set hidden to false which then adds the class buttonshow to the buttons so they apper
            setHidden(false)
            setButtonClass("buttonShow")
            return
        }
        else if (!e) { //if e is false set hidden to true which then adds the class buttonhide to hide the buttons
            setHidden(true)
            setButtonClass("buttonHide")
            return
        }
        console.log(buttonClass)
    }

    return (
        <div className="buttonWrapper">
            <div className="button" onClick={() => change(hidden)}>
            </div>
            <div className="buttonList">
                <button className={buttonClass} onClick={() => console.log("zoom")}>Zoom</button>
                <button className={buttonClass} onClick={() => changeTag("Trend")}>Trend</button>
                <button className={buttonClass} >Event</button>
                <button className={buttonClass} >Program</button>
                <button className={buttonClass} >Framework</button>
                <button className={buttonClass} >Publication</button>
            </div>
        </div >
    );
}

export default Button

// onClick={setHidden(change(hidden))}