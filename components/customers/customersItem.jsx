import React from "react";
import Customers from "./customers";
import Title from "../ui/Titles";
import Slider from "react-slick";


const CustomersItem = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appenDots: (dots) => (
      <div style={{
        color:"yellow"
      }}> </div> 
    ),
    customPaging: (i) => (
      <div className="w-3 h-3 border hover:bg-primary   hover:w-5 hover:h-5 bg-white  rounded-full mt-24  "></div>
    ),
  };

  const dummydata = [
    {
      id: 1,
      image: "/images/client1.jpg",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minimveniam",
      name: "Hazal Say",
      city: "İstanbul",
    },
    {
      id: 2,
      image: "/images/client2.jpg",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minimveniam",
      name: "Egemen Şahin",
      city: "İstanbul",
    },
  ];
  return (
    <div>
      <Title addClass="text-[40px] text-center">What Says Our Customers</Title>
 

          <div>  
          <div className="flex justify-between container mx-auto   gap-12">
        {dummydata.map((item, index) => (
          <Customers
            key={index}
            image={item.image}
            content={item.content}
            name={item.name}
            city={item.city}
          />
          ))}
      </div>
          </div>
          <div>  
        
          </div>
     
    </div>
  );
};

export default CustomersItem;
