// import React from "react";
import Title from "../ui/Titles";
import MenuItem from "./MenuItem";
import Link from "next/link";

const MenuWrapper = () => {
  const dummyData = [
    {
      id: 1,
      title: "Delicious Pizza",
      image: "/images/f1.png",
      subtitle:
        "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
        price:"$20"
    },
    {
      id: 2,
      title: "Efsane Pizza2",
      image: "/images/f3.png",
      subtitle:
        "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
        price:"$20"

      },
    {
      id: 3,
      title: " Efsane Pizza3",
      image: "/images/f6.png",
      subtitle:
        "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
        price:"$20"

    },
    {
      id: 4,
      title: " Efsane Pizza4",
      image: "/images/f1.png",
      subtitle:
        "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
        price:"$20"

    },
    {
      id: 5,
      title: " Efsane Pizza4",
      image: "/images/f3.png",
      subtitle:
        "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
        price:"$20"

    },
    {
      id: 6,
      title: " Efsane Pizza4",
      image: "/images/f6.png",
      subtitle:
        "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
        price:"$20"

    },
  ];
  return (
    <div className="container mx-auto mb-16 ">
      <div className=" flex flex-col items-center">
        <Title addClass="text-[40px]">Our Menu</Title>
        <div className="mt-7">
          <button className="btn-secondary m-3 bg-gray-300 bg-opacity-30">All</button>
          <button className="btn-secondary m-3 bg-gray-300 bg-opacity-30">Burger</button>
          <button className="btn-secondary m-3 bg-gray-300 bg-opacity-30">Pizza</button>
          <button className="btn-secondary m-3 bg-gray-300 bg-opacity-30">Drink</button>
        </div>
      </div>
      <div className="mt-7 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
        {dummyData.map((item, index) => (
          <MenuItem
            key={index}
            image={item.image}
            title={item.title}
            subtitle={item.subtitle}
            price={item.price}
          />
        ))}
      </div>
      <div className="flex items-center justify-center mt-10">
        <Link href="/Menu"><button className="btn-primary w-44 ">View More</button></Link>
      </div>
    </div>  
  );
};

export default MenuWrapper;
