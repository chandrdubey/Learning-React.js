import React from 'react'
import './Mystyle.css'

function Stylesheet(props) {
    let classname = props.check ? 'primary' : ''
    return (
        <div>
            <h1 className={`${classname} fontxl`}>Hello World</h1>
        </div>
    )
}

export default Stylesheet
