import React, {useEffect, useState} from "react";
import "./App.css";
import ImageContainer from "./Components/ImageContainer/ImageContainer";
import ControlContainer from "./Components/ButtonContainer/ControlContainer";
import axios from "axios";

function App() {
    //get today in string form for our api request
    let now = new Date();//get today so we can use it in our api call. This is needed for getting past images.
    let dd = String(now.getDate()).padStart(2, '0');
    let mm = String(now.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = now.getFullYear();
    now = `${yyyy}-${mm}-${dd}`;

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
            <ControlContainer imageData={data}/>
        </div>
    );
}

export default App;
