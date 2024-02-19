import React from "react";
import Title from "../ui/Titles";
import Image from "next/image";

const Customers = ({ image, content, name, city }) => {

  return (
    

    <div className="container mx-auto my-10 ">
      <div className="flex- gap-x-10 bg-secondery text-white rounded-[5px] ">
        
        
        <div className="p-4">
          <p>{content}</p>
          <div className=" flex flex-col mt-4">
            <span className="text-lg font-semibold">{name}</span>
            <span className="text-[15px]">{city}</span>
          </div>
        </div>
      </div>
      <div
        className="sm:w-32 sm:h-32  w-32 h-32 relative after:content-['']  
        border-[5px] rounded-full border-secondery hover:scale-110 overflow-hidden flex mt-8
        before:content-[''] before:bg-primary before:w-5 before:h-5 before:absolute before:top-0 before:left-1/2
        justify-center before:-translate-y-3 before:rotate-45  "
      >
        <Image
          src={image}
          alt=""
          layout="fill"
          className="hover:scale-110 transition-all"
          objectFit="cover"
        />
      </div>
    </div>
  );
};

export default Customers;
