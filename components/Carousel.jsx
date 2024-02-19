import React from "react";
import Image from "next/image";
import Title from "./ui/Titles";
import Slider from "react-slick";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
    autoplay:true,
    autoplaySpeed:5000,
    appenDots: (dots) => (
      <div style={{
        color:"yellow"
      }}> </div> 
    ),
    customPaging: (i) => (
      <div className="w-3 h-3 border hover:bg-primary   
      hover:w-5 hover:h-5 bg-white  rounded-full mt-24  "></div>
    ),
  };

  return (
    <div className="h-screen w-full  container mx-auto -mt-[88px]">
      <div className="absolute top-0 left-0 h-full w-full">
        <div className="relative w-full h-full">
          <Image
            src="/images/hero-bg.jpg"
            alt=""
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
      <Slider {...settings}>
        <div>
          <div className=" ml-1 0 mt-48  text-white   flex flex-col items-start  gap-y-6">
            <Title addClass="text-[56px]">Fast Food Restaurant</Title>
            <p className="font-sans text-[16px] sm:w-2/5 w-full ">
              Doloremque, itaque aperiam facilis rerum, commodi, temporibus
              sapiente ad mollitia laborum quam quisquam esse error unde.
              Tempora ex doloremque, labore, sunt repellat dolore, iste magni
              quos nihil ducimus libero ipsam.
            </p>
            <button className="btn-secondary font-sans   mb-">Order Now</button>
          </div>
        </div>
        <div>
          <div className="  ml-1 0 mt-48  text-white   flex flex-col items-start  gap-y-6">
            <Title addClass="text-[56px]">Fast Food Restaurant</Title>
            <p className="font-sans text-[16px] sm:w-2/5 w-full ">
              Doloremque, itaque aperiam facilis rerum, commodi, temporibus
              sapiente ad mollitia laborum quam quisquam esse error unde.
              Tempora ex doloremque, labore, sunt repellat dolore, iste magni
              quos nihil ducimus libero ipsam.
            </p>
            <button className="btn-secondary font-sans mb-3 ">Order Now</button>
          </div>
        </div>
        <div>
          <div className="  ml-1 0 mt-48  text-white   flex flex-col items-start  gap-y-6">
            <Title addClass="text-[56px]">Fast Food Restaurant</Title>
            <p className="font-sans text-[16px] sm:w-2/5 w-full ">
              Doloremque, itaque aperiam facilis rerum, commodi, temporibus
              sapiente ad mollitia laborum quam quisquam esse error unde.
              Tempora ex doloremque, labore, sunt repellat dolore, iste magni
              quos nihil ducimus libero ipsam.
            </p>
            <button className="btn-secondary font-sans mb-  ">Order Now</button>
          </div>
        </div>
        
      </Slider>
    </div>
  );
};

export default Carousel;
