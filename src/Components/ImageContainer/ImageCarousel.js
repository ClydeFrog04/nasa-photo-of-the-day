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
  width: 450px;
`;

export default function ImageCarousel(props) {
    //set up state
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);
    if (props.imageData[0] === undefined) {//this basically creates a "loading". This will not work for single image queries. but then why would we need a carousel for that...
        console.log("No data, returning");
        return (
            <div>Loading...</div>
        )
    }
    else {

        //create an object the reactstrap carousel can use
        const imageObjs = props.imageData.map((image) => {
            return{
                src: image.url,
                altText: image.title,
                caption: image.explanation,
            }
        });
        const singleImage = [
            {
                src: props.imageData.url,
                altText: props.imageData.title,
                caption: props.imageData.explanation,
            }
        ];//this is for me to look at for reference :]

        //declare needed functions
        const next = () => {
            if (animating) return;
            const nextIndex = activeIndex === imageObjs.length - 1 ? 0 : activeIndex + 1;//if we are at the end of the array, go back to the start
            setActiveIndex(nextIndex);
        }
        const previous = () => {
            if (animating) return;
            const nextIndex = activeIndex === 0 ? imageObjs.length - 1 : activeIndex - 1;
            setActiveIndex(nextIndex);
        }
        const goToIndex = newIndex => {
            if (animating) return;
            setActiveIndex(newIndex);
        }

        //convert images to a useable form- useable to reactstrap
        const slides = imageObjs.map(image => {
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
                        items={imageObjs}
                        activeIndex={activeIndex}
                        onClickHandler={goToIndex}
                    />
                    {slides}
                    <CarouselControl
                        direction={"prev"}
                        directionText={"Previous"}
                        onClickHandler={previous}
                    />
                    <CarouselControl
                        direction={"next"}
                        directionText={"Next"}
                        onClickHandler={next}
                    />
                </Carousel>
            </div>
        );
    }
};