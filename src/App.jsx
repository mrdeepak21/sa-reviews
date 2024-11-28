import React, { useEffect, useState } from "react";
import FancyCarousel from "react-fancy-circular-carousel";
import "react-fancy-circular-carousel/FancyCarousel.css";
import Data from "../reviews.json";
import { useViewport } from "react-viewport-hooks";
import Star from "./star.svg";
import Apple from "../assets/apple.svg";
import Doller from "../assets/circle-dollar.svg";
import Gift from "../assets/gift-box-heart.svg";
import Care from "../assets/heart-care.svg";
import Insure from "../assets/insurance.svg";
import Piggy from "../assets/piggy.svg";
import Train from "../assets/train.svg";

export default function App() {

  const newData = Array(Data)[0]['reviews'];

  const [images, setImages] = useState([]);

  const [focusElement, setFocusElement] = useState(0);

  const { vw } = useViewport();

  const r = Math.abs(vw / (vw > 800 ? 5 : 3));

  const [random, setRandom] = useState([]);

  useEffect(() => {

    let review = [];

    for (let i = 0; review.length < 10; i++) {

      let random = Math.floor(Math.random() * (newData.length - 1 + 1) + 1);

      if (!review.includes(random) && newData[random]?.starRating === "FIVE" && newData[random].hasOwnProperty('comment'))
        review.push(random);

    }

    setRandom(review);

    setImages([Apple,Doller,Gift,Care,Insure, Piggy, Star, Train, Piggy, Care]);
    console.log(Apple);
  }, []);
  return (
    <div className="flex gap-20 lg:gap-0 justify-start lg:justify-center relative flex-col lg:flex-row">
      <div className="flex justify-center lg:justify-end lg:items-center w-full lg:w-1/3 overflow-hidden z-10">
        <div className="-mt-32 lg:mt-0 min-h-96 pb-10 lg:pb-0 lg:pr-32 lg:ml-[-100%]">
          <FancyCarousel
            images={images}
            setFocusElement={setFocusElement}
            focusElementStyling={{ border: '2px solid var(--e-global-color-1a239e5)' }}
            peripheralImageBoxShadow="0 0 20px 2px rgba(0,0,0,0.1)"
            peripheralImageRadius={r > 150 ? r / 8 : r / 4}
            border={false}
            transitionTime={3}
            autoRotateTime = {3}
            offsetAngle={vw > 1024 ? 270 : 180}
            carouselRadius={r}
            navigationTextSize={1.5}
            navigationButtonBgColor = 'transparent' 
            navigationButtonColor = '534B42'
            navigationButtonStyling={{border: "none",width:0,height: 0}}
          />
        </div>
      </div>
      <div className="flex justify-start lg:justify-center flex-col w-full lg:w-2/3 p-5 min-h-[45rem] align-middle text-center lg:text-left">
        <div className="text-3xl transition duration-150 ease-in-out">
          "{newData[random[focusElement]]?.comment}"
        </div>
        <div className="text-xl italic mt-5">
          {newData[random[focusElement]]?.reviewer?.displayName} | Google
        </div>
        <div className="icon mt-5 flex gap-2 flex-row justify-center lg:justify-start">
          <Star width={20} height={20} alt="Rating"/>
          <Star width={20} height={20} alt="Rating"/>
          <Star width={20} height={20} alt="Rating"/>
          <Star width={20} height={20} alt="Rating"/>
          <Star width={20} height={20} alt="Rating"/>
        </div>
      </div>
    </div>
  );
}
