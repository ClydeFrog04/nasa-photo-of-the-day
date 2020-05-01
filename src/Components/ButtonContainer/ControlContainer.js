import React, {useState} from 'react';
import "./ControlContainer.css";

import {Button} from "reactstrap";

const ControlContainer = props => {

    const [currentDay, setCurrentDay] = useState(props.date);//todo: make an infinite backwards/yesterday. Instead of just being able to see yesterday, make it just keep going back

    const setDateYesterday = () => {
        let yesterday = new Date();
        yesterday.setSeconds(yesterday.getSeconds() - 86400);//86400 is the number of seconds in a day. This way I don't have to worry about changing month day and year if yesterday was in a different month or year
        yesterday = props.getDateString(yesterday);
        console.log(yesterday);
        props.setDate(yesterday);
    }

    return (
        <div className="controlContainer">
            <Button size={"lg"} color={"secondary"} className="btn" onClick={setDateYesterday}>Yesterday's APOD</Button>
            <Button size={"lg"} color={"secondary"} className="btn">Placeholder For Dropdown</Button>
            <Button size={"lg"} color={"secondary"} className="btn">Random APOD</Button>
        </div>
    );
};


export default ControlContainer;