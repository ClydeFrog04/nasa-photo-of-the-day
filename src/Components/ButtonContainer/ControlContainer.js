import React from 'react';
import "./ControlContainer.css";

const ControlContainer = props => {

    const setDateYesterday = () => {
        let yesterday = new Date();
        yesterday.setSeconds(yesterday.getSeconds() - 86400);//86400 is the number of seconds in a day. This way I don't have to worry about changing month day and year if yesterday was in a different month or year
        yesterday = props.getDateString(yesterday);
        console.log(yesterday);
        props.setDate(yesterday);
    }

    return (
        <div className="controlContainer">
            <button className="yesterdayImage" onClick={setDateYesterday}>Yesterday's APOD</button>
            <button className="olderImage">Placeholder For Dropdown</button>
            <button className="randImg">Random APOD</button>
        </div>
    );
};


export default ControlContainer;