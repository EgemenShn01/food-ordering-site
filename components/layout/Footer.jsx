import React from "react";
import Title from "../ui/Titles";
import Link from "next/link";

const Footer = () => {
  return <div className="bg-secondery">
    <div className="container text-white mx-auto pt-16 pb-6">
      <div className="flex justify-between text-center mx-24 flex-wrap gap-14">
        <div>
        <div><Title addClass={ "text-[30px]"}>Contact Us</Title>
        </div>
        <div className="flex flex-col gap-y-2 mt-6 ">
        <div>
          <span className="hover:text-primary">
            <Link href="#" className="inline-block mr-14">
               <i className="fa fa-map-marker"></i>
          <span className="ml-4">  Location</span>
            </Link>
            </span>
            </div>
            <div>
              <span className="hover:text-primary">
                <Link href="#" className="inline-block ml-2">
                  <i className="fa fa-phone"></i>
              <span className="ml-4">  Call 05684452514</span>
                </Link>
              </span>
            </div>
            <div>
              <span className="hover:text-primary">
                <Link href="#" className="inline-block ml-2">
                  <i className="fa fa-envelope"></i>
              <span className="ml-6">mail@gmail.com</span>
                </Link>
              </span>
            </div>
        </div>
         </div>
         <div>
          <div>
            <Link href="#">
            <Title addClass={ "text-[40px] font-bold"}>Feane</Title>
              </Link>
        </div>
        <div className ="flex flex-col gap-y-2 mt-6 ">
        <div>
          <span className=" ">
          Necessary, making this the first true <br></br> 
          generator on the Internet. It uses Link dictionary <br></br> 
          of over 200 Latin words, combined with
            </span>
            </div>
            <div className="mt-7">
               <span>
                <Link href="#">
                <i className="fa-brands fa-facebook-f text-secondery bg-white rounded-full w-6 h-6 text-center text-base text-[20px]"></i>                </Link>
                  <Link href="#">
                  <i className="fa-brands fa-twitter  text-secondery bg-white rounded-full w-6 h-6 text-center text-base text-[20px]" ></i>                </Link>
                  <Link href="#">
                  <i className="fa-brands fa-linkedin  text-secondery bg-white rounded-full w-6 h-6 text-center text-base text-[20px]"></i>
                </Link>
                  <Link href="https://www.instagram.com/egemenshnq/">
                  <i className="fa-brands fa-instagram  text-secondery bg-white rounded-full w-6 h-6 text-center text-base text-[20px]"></i>                </Link>
                                    <Link href="#">
                                    <i className="fa-brands fa-pinterest  text-secondery bg-white rounded-full w-6 h-6 text-center text-base text-[20px]"></i>                </Link>
               </span>
            </div>
        </div>
         </div>
         <div>
          <div><Title addClass={ "text-[30px]"}>Opening Hours</Title>
        </div>
        <div className="flex flex-col gap-y-2 mt-6 ">
        <div>
          <span className="">
            Everyday
            </span>
            </div>
            <div>
              <span className="">
              10.00 Am -10.00 Pm
              </span>
            </div>
        </div>
         </div>
      </div>
      
      <div className="mt-24">
        <p className="text-center">© 2023 All Rights Reserved By Free Html Templates  </p>
      </div>
    </div>
  </div>;
};

export default Footer;
