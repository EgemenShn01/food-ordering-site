import Image from "next/image";
import { FaShoppingCart } from "react-icons/fa";
import Link from "next/link";

const MenuItem = ({image, title, subtitle,price}) => {
  return (
    <div className="bg-secondery rounded-3xl hover:scale-110 transition-all gap-y-3 ">
    <div className="w-full bg-[#f1f2f3] p-5 flex items-center justify-center h-[215px] 
    rounded-bl-[46px] rounded-tl-2xl rounded-tr-2xl">
     <div className=" relative w-36 h-36 hover:scale-125 transition-all">
       <Link href="/product"> <Image src={image} alt="" layout="fill"/></Link>
      </div>
    </div>
    <Link href="/product">
    <div className="text-white p-[25px] ">
        <h4 className="text-[20px] font-sans font-semibold">{title}</h4>
        <p className="text-[15px] mt-5">{subtitle} </p>
         <div className="flex justify-between items-center mt-4  ">
            <span>{price}</span>
            <button className="btn-primary w-10 h-10 rounded-full !p-0 grid place-content-center">
              <FaShoppingCart/> 
            </button>
          </div>
      </div>
    </Link>
   
    </div>
  );
};


export default MenuItem
