import React, {useState} from 'react';

import {Carousel} from "reactstrap";

const ImageCarousel = props => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);
    const [images, setImages] = useState([]);

    return (
        <div className="imageContainer">
            <h1>{props.imageData.title}</h1>
            <img src={props.imageData.url} alt={props.imageData.title}/>
            <h3>Image of the day for: {props.imageData.date}</h3>
            <p className="explanation">{props.imageData.explanation}</p>
        </div>
    );
};


export default ImageCarousel;


/*
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from "reactstrap";

import styled from "styled-components";

const StyledImg = styled.img`
  max-width: 200px;
`;

const items = [
  {
    src:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/golden-retriever-dog-royalty-free-image-505534037-1565105327.jpg",
    altText: "Slide 1",
    caption: "Slide 1"
  },
  {
    src:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Deutscher_Schaeferhund_Presley_von_Beluga.jpg/452px-Deutscher_Schaeferhund_Presley_von_Beluga.jpg",
    altText: "Slide 2",
    caption: "Slide 2"
  },
  {
    src:
      "https://www.rover.com/blog/wp-content/uploads/2019/11/schafer-dog-4357790_1920.jpg",
    altText: "Slide 3",
    caption: "Slide 3"
  }
];

export default function MyCarousel() {
  //setup state
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  //declare functions to be used
  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = newIndex => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  //convert items to a useable form
  const slides = items.map(item => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <StyledImg src={item.src} alt={item.altText} />
        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      autoPlay={false}
      interval={false}
      next={next}
      previous={previous}
    >
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
}

 */