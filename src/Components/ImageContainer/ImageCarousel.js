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

export default function ImageCarousel(props) {
    //set up state
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);
    const [images, setImages] = useState([]);

    //todo: this logic belongs to addImageToState; Refactoring + newTopic = messyCode :]
    const singleImage = {
        src: "https://www.rover.com/blog/wp-content/uploads/2019/11/schafer-dog-4357790_1920.jpg",
        altText: "doggo",
        caption: "doggo",
    };
    const placeholder = images;
    placeholder.push(singleImage);
    setImages(placeholder);
    console.log(images);

    const addImageToState = (image) => {
        //todo: add given image to images state
    }

    //declare needed functions
    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === images.length - 1 ? 0 : activeIndex + 1;//if we are at the end of the array, go back to the start
        setActiveIndex(nextIndex);
    }
    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? images.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }
    const goToIndex = newIndex => {
        if (animating) return;
        setActiveIndex(newIndex);
    }

    //convert images to a useable form- useable to reactstrap
    // const slides = images.map(image => {
    //     return (
    //         <CarouselItem
    //             onExiting={() => setAnimating(true)}
    //             onExited={() => setAnimating(false)}
    //             key={image.src}
    //         >
    //             <img src={image.src} alt={image.altText}/>
    //             <CarouselCaption
    //                 captionText={image.caption}
    //                 captionHeader={image.caption}
    //             />
    //         </CarouselItem>
    //     );
    // });
    const slides = (
        <CarouselItem
            onExiting={() => setAnimating(true)}
            onExited={() => setAnimating(false)}
            key={singleImage.src}
        >
            <img src={singleImage.src} alt={singleImage.altText}/>
            <CarouselCaption
                captionText={singleImage.caption}
                captionHeader={singleImage.caption}
            />
        </CarouselItem>
    )


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
                    items={images}
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