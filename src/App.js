import React, {useEffect, useState} from "react";
import "./App.css";
import ImageContainer from "./Components/ImageContainer/ImageContainer";
import ControlContainer from "./Components/ButtonContainer/ControlContainer";
import axios from "axios";

function App() {
    //get today in string form for our api request
    let now = getDateString(new Date());//get today so we can use it in our api call. This is needed for getting past images.

    const [data, setData] = useState({});
    const [date, setDate] = useState(now);
    console.log(date);

    useEffect(() => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=5iNRyKec6ymBvSVBqVEre4Z4dEA9EMWe3HUMg5dg&date=${date}`)
            .then(response => {
                setData(response.data);
            })
            .catch(console.log);
    }, [date]);

    return (
        <div className="App">
            <ImageContainer imageData={data}/>
            <ControlContainer imageData={data} getDateString={getDateString} date={date} setDate={setDate}/>
        </div>
    );
}

const getDateString = (dateRequested) =>{
    let dd = String(dateRequested.getDate()).padStart(2, '0');
    let mm = String(dateRequested.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = dateRequested.getFullYear();
    dateRequested = `${yyyy}-${mm}-${dd}`;
    return dateRequested;
}

export default App;
