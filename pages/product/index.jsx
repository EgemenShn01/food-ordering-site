import React from "react";
import Image from "next/image";
import Title from "@/components/ui/Titles";
import Header from "@/components/layout/header";

const Index = () => {
  return (<>

    <div className="flex  items-center h-screen gap-20 py-20  -mt-24 flex-wrap">
         <div className="relative  md:bg-primary md:rounded-br-full   rounded-t-full
          md:py-80  w-[80%] h-[80%]    mt-36 flex-1  mx-20 hover:scale-110 transition-all"> 
        <Image src="/images/f6.png" alt="" 
        layout="fill" 
        objectFit="contain"
        />
      </div>
      <div  className=" md:flex-1 md:text-start text-center">
        <Title addClass={"text-6xl"}>Delicious Pizza</Title>
        <span className="text-primary text-2xl font-bold underline my-4 inline-block">$10</span>
        <p className="text-[14px] my-4 md:pr-36">Lorem ipsum dolor sit amet consectetur a
            dipisicing elit. Eius, itaque molestias at praesentium 
            soluta earum! Provident eius saepe doloremque, ea expedita aliquid, maxime eum totam 
            labore ipsam at nam voluptas!</p>
             <div className="">
                <h4 className="text-xl font-bold">Choose The Size</h4>
                <div className="flex gap-x-20 items-center md:justify-start justify-center">
                    <div className="relative w-8 h-8 hover:scale-150 cursor-pointer">
                     <Image src="/images/pizza.png" alt="" 
        layout="fill" /> 
                <span className="absolute top-0 -right-6 text-xs bg-primary rounded-full font-medium">Small</span>

                </div>
                <div className="relative w-12 h-12 hover:scale-150 cursor-pointer">
                     <Image src="/images/pizza.png" alt="" 
        layout="fill" /> 
                <span className="absolute top-0 -right-6 text-xs bg-primary rounded-full font-medium">Medium</span>

                </div>
                <div className="relative w-16 h-16 hover:scale-150 cursor-pointer">
                     <Image src="/images/pizza.png" alt="" 
        layout="fill" /> 
                <span className="absolute top-0 -right-3 text-xs bg-primary rounded-full font-medium">Large</span>

                </div>
                </div>
             </div>
             <div>
               <h4 className="text-xl font-bold">Choose Additional İngredients</h4>
             <div className="flex  items-center gap-x-10 my-4 md:justify-start justify-center">
                <label className="flex  items-center gap-x-1"> 
                    <input type="checkbox" className="w-5 h-5 accent-primary"  />
                    <span className="text-sm font-semibold">Ketchup</span>
                </label>
                <label className="flex  items-center gap-x-1"> 
                    <input type="checkbox" className="w-5 h-5 accent-primary"  />
                    <span className="text-sm font-semibold">Mayonnaise</span>
                </label>
                 <label className="flex  items-center gap-x-1"> 
                    <input type="checkbox" className="w-5 h-5 accent-primary"  />
                    <span className="text-sm font-semibold">BBQ</span>
                </label>
             </div>
             <button className="btn-primary mt-6">Add To Cart</button>
      </div>
    </div>
    </div>

  
  </>
  
  
  );
};

export default Index;
