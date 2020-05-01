//base code and example of how to build this was found here: https://reactstrap.github.io/components/carousel/
//additional state control and logic is my own
import React, {useState} from 'react';

import {
    Carousel,
    CarouselItem,
    CarouselCaption,
    CarouselIndicators,
    CarouselControl
} from "reactstrap";

import styled from "styled-components";

const StyledImg = styled.img`
  max-width: 90%;
`;

export default function ImageCarousel(props) {
    //set up state
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);
    if(props.imageData.url === undefined){//this basically creates a "loading"
        console.log("No data, returning");
        return (
            <div>Loading...</div>
        )
    }

    const addImageToState = (image) => {//a helper method to the state method
        const placeholder = props.allImages;
        placeholder.push(image);
        console.log("Place holder: ", placeholder);
        props.setAllImages(placeholder);
    }

    //create an object the reactstrap carousel can use
    const singleImage = {
        src: props.imageData.url,
        altText: props.imageData.title,
        caption: props.imageData.explanation,
    };
    if(!props.allImages.includes(singleImage)) addImageToState(singleImage);
    console.log("All images: ", props.allImages);

    //declare needed functions
    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === props.allImages.length - 1 ? 0 : activeIndex + 1;//if we are at the end of the array, go back to the start
        setActiveIndex(nextIndex);
    }
    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? props.allImages.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }
    const goToIndex = newIndex => {
        if (animating) return;
        setActiveIndex(newIndex);
    }

    //convert images to a useable form- useable to reactstrap
    const slides = props.allImages.map(image => {
        return (
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={image.src}
            >
                <StyledImg src={image.src} alt={image.altText}/>
                <CarouselCaption
                    captionText={image.caption}
                    captionHeader={""}
                />
            </CarouselItem>
        );
    });


    return (
        <div className="imageCarousel">
            <Carousel
                activeIndex={activeIndex}
                autoPlay={false}
                interval={false}
                next={next}
                previous={previous}
            >
                <CarouselIndicators
                    items={props.allImages}
                    activeIndex={activeIndex}
                    onClickHandler={goToIndex}
                />
                {slides}
                <CarouselControl
                    direction={"prev"}
                    directionText={"Previous"}
                    onClickHandler={previous}
                />
            </Carousel>
        </div>
    );
};