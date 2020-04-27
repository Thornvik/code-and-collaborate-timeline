import React, { useState } from 'react'
import './index.scss'


function Button({ }) {
    const [hidden, setHidden] = useState(true)
    const [buttonClass, setButtonClass] = useState("buttonHide")


    function change(e) {
        if (e) {
            console.log(hidden)
            setHidden(false)
            setButtonClass("buttonShow")
            return
        }
        else if (!e) {
            console.log(hidden)
            setHidden(true)
            setButtonClass("buttonHide")
            return
        }
    }

    return (
        <div className="button" onClick={() => change(hidden)}>
            <button className={buttonClass}>Zoom</button>
        </div>
    );
}

export default Button

// onClick={setHidden(change(hidden))}