import React from 'react';
import "./ImageContainer.css";

const ImageContainer = props => {
    return (
        <div className="imageContainer">
            <h1>{props.imageData.title}</h1>
            <img src={props.imageData.url} alt={props.imageData.title}/>
            <h3>Image of the day for: {props.imageData.date}</h3>
        </div>
    );
};


export default ImageContainer;
