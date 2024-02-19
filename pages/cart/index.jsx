import React from "react";
import Image from "next/image";
import Title from "@/components/ui/Titles";
import Link from "next/link";

const Index = () => {
  return (
    <div className="min-h-[calc(100vh_-_433px)]">
      <div className="flex justify-between items-center md:flex-row flex-col">
        <div className="min-h-[calc(100vh_-_433px)] flex items-center flex-1 p-10 overflow-x-auto w-full">
          <table className="w-full text-sm text-center text-gray-500">
            <thead className="text-xs text-gray-300 uppercase bg-gray-700">
              <tr>
                <th scope="col" className="py-3 px-6 font-bold ">
                  PRODUCT
                </th>
                <th scope="col" className="py-3 px-6 font-bold">
                  EXTRAS
                </th>
                <th scope="col" className="py-3 px-6 font-bold">
                  PRICE
                </th>
                <th scope="col" className="py-3 px-6 font-bold">
                  QUANTITY
                </th>
              </tr>
            </thead>
            <tbody className="shadow-2xl">
              <tr className="border border-gray-400 bg-secondery hover:bg-primary transition-all ">
                <td className="py-4 hover:scale-125 px-6 font-medium 
                items-center justify-center flex whitespace-nowrap hover:text-white transition-all">
                <span><Image src="/images/f1.png" alt="" width={60} height={60}/></span>
                <span>Good Pizza</span>
                </td>
                <td className="py-4 px-6 font-medium  whitespace-nowrap hover:text-white transition-all hover:scale-125 ">
                  <span>mayonez,acı,sos,ketçap</span>
                </td>
                <td className="py-4 px-6 font-medium  whitespace-nowrap hover:text-white transition-all hover:scale-125">$20</td>
                <td  className="py-4 px-6 font-medium  whitespace-nowrap hover:text-white transition-all hover:scale-125">1</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="bg-secondery min-h-[calc(100vh_-_433px)] text-white
          border-8 shadow-2xl  border-white p-20 flex items-center   justify-center 
        flex-col md:w-auto w-full  "
         
        >
          <Title addClass={"text-[3rem]"}>CART TOTAL</Title>
          <div className="mt-10 mr-32">
            <b>Subtotal:</b>$20 <br />
            <b className="inline-block my-1">Discount:</b>$0.00 <br />
            <b>Total:</b>$20
          </div>
       <Link href="/order"><button className="btn-primary  mt-5">CHECKOUT NOW!</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Index;
