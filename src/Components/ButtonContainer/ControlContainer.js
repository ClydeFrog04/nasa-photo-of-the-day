import React from 'react';
import "./ControlContainer.css";

const ControlContainer = props => {

    return (
        <div className="controlContainer">
            <button className="yesterdayImage">Yesterday's APOD</button>
            <button className="olderImage">Placeholder For Dropdown</button>
            <button className="randImg">Random APOD</button>
        </div>
    );
};


export default ControlContainer;