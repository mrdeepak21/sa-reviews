import React, { useEffect, useState } from "react";
import FancyCarousel from "./react-fancy-circular-carousel";
import "./react-fancy-circular-carousel/FancyCarousel.css";
import Data from "../reviews.json";
import { useViewport } from "react-viewport-hooks";
import Star from "./star.svg";



export default function App() {

const imgSrcUrl = 'http://dev.sterlingadministration.com';

const images = [
  imgSrcUrl+"/wp-content/uploads/2024/07/insurance.svg",
  imgSrcUrl+"/wp-content/uploads/2024/07/apple-1.svg",
  imgSrcUrl+"/wp-content/uploads/2024/07/circle-dollar.svg",
  imgSrcUrl+"/wp-content/uploads/2024/07/train.svg",
  imgSrcUrl+"/wp-content/uploads/2024/07/gift-box-heart.svg",
  imgSrcUrl+"/wp-content/uploads/2024/07/heart-care.svg",
  imgSrcUrl+"/wp-content/uploads/2024/07/pig-piggy-bank.svg",
  imgSrcUrl+"/wp-content/uploads/2024/07/insurance.svg",
  imgSrcUrl+"/wp-content/uploads/2024/07/apple-1.svg",
  imgSrcUrl+"/wp-content/uploads/2024/07/circle-dollar.svg"
];

const newData = Array(Data)[0]['reviews'];

const [focusElement, setFocusElement] = useState(0);

const { vw } = useViewport();

const r = Math.abs(vw / (vw > 1024 ? 5 : 3));

const [random, setRandom] = useState([]);

useEffect(()=>{

  let review = [];

  for (let i = 0; review.length < 10; i++) {

  const rand = Math.floor(Math.random() * (newData.length - 1 + 1) + 1);

  if (!review.includes(rand) && newData[rand]?.starRating === "FIVE" && newData[rand].hasOwnProperty('comment'))
      review.push(rand);
  }

  setRandom(review);

},[]);


  return (
    <div className="flex gap-0 justify-start lg:justify-center relative flex-col lg:flex-row">
      <div className="flex justify-center lg:justify-end lg:items-center w-full lg:w-1/3 overflow-hidden z-10">
        <div className="-mt-32 lg:mt-0 min-h-96 pb-10 lg:pb-0 lg:pr-32 lg:ml-[-100%]">
          <FancyCarousel
            images={images}
            setFocusElement={setFocusElement}
            focusElementStyling={{ border: '2px solid var(--e-global-color-1a239e5)' }}
            peripheralImageBoxShadow="0 0 20px 2px rgba(0,0,0,0.1)"
            peripheralImageRadius={r > 150 ? (r<180?r/5:r / 8) : r / 4}
            border={false}
            offsetAngle={vw > 1024 ? 270 : 180}
            carouselRadius={r}
            navigationTextSize={1.5}
            navigationButtonBgColor = 'transparent' 
            navigationButtonColor = '534B42'
            navigationButtonStyling={{border: "none",width:0,height: 0,outline: 'none'}}
          />
        </div>
      </div>
      <div className="flex justify-start lg:justify-center flex-col w-full lg:w-2/3 p-5 min-h-[45rem] align-middle text-center lg:text-left">
        <div className="text-3xl transition duration-150 ease-in-out">
          "{newData[random[focusElement]]?.comment}"
        </div>
        <div className="text-xl italic mt-5 capitalize">
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
