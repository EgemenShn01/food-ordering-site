  import {useState} from  "react";
import {FaUserAlt,FaShoppingCart,FaSearch} from "react-icons/fa";
import Logo from '../ui/logo';import Search from "../ui/Search";
import OutsideClickHandler from 'react-outside-click-handler';
import {GiHamburgerMenu,GiCancel} from "react-icons/gi"
import { useRouter } from "next/router";
import Link from "next/link";

const Header = () => {
  const [IsSearchModal, setIsSearchModal] = useState(false)
  const [IsMenuModal, setIsMenuModal] = useState(false)

  const  router=useRouter();
  // console.log(router.asPath);
  return (
    <div className={`h-[5.5rem] z-50 relative ${
      router.asPath === "/" ? "bg-transparent" : "bg-secondery"
    }`}>
     <div className="container   mx-auto text-white flex justify-between items-center  px-auto h-full  ">
       <div> <Logo /></div>
      <nav className={`sm:static absolute top-0 left-0 h-screen sm:w-auto sm:h-auto w-full 
       sm:text-white text-secondery sm:bg-transparent bg-white sm:font-normal font-bold sm:text-base text-2xl sm:flex hidden 
       ${IsMenuModal === true && "!grid place-content-center"}`}>
       
      <ul className="flex gap-x-2 sm:flex-row flex-col items-center" >
        <li className="px-[20px] py-[10px] hover:bg-white hover:rounded-3xl hover:font-bold active:text-black  transition-all hover:text-black hover:shadow-white cursor-pointer">
          <Link href="/">HOME</Link>
         </li>  
         <li className="px-[20px] py-[10px] hover:bg-white hover:rounded-3xl hover:font-bold active:text-black transition-all  hover:text-black hover:shadow-white cursor-pointer  ">
          <Link href="/Menu">MENU</Link>
         </li>  
         <li className="px-[20px] py-[10px] hover:bg-white hover:rounded-3xl hover:font-bold active:text-black transition-all  hover:text-black hover:shadow-white cursor-pointer ">
          <Link href="/About">ABOUT</Link>
         </li>  
         <li className="px-[20px] py-[10px] hover:bg-white hover:rounded-3xl hover:font-bold active:text-black transition-all  hover:text-black hover:shadow-white cursor-pointer ">
          <Link href="/Reservation">BOOK TABLE</Link>
         </li>    
      </ul>
      </nav>
      <div className="flex gap-x-4 items-center">
        <Link href="/auth" className=" hover:text-primary"><FaUserAlt/></Link>
        <Link href="cart" className="hover:text-primary"><FaShoppingCart/></Link>
        <button onClick={()=> setIsSearchModal(true)} className="hover:text-primary transition-all  ">
          <FaSearch/>
        </button>
        <Link href="/cart" className="md:inline-block hidden"><button className="btn-primary">Order Online</button></Link>
        <button className="sm:hidden inline-block" 
        onClick={()=>setIsMenuModal(true)}>
         <GiHamburgerMenu className="text-xl hover:text-primary transition-all"/></button>
              {IsMenuModal &&<button onClick={()=>setIsMenuModal(false)} 
              className="absolute top-4 right-4 text-secondery"> 
              <GiCancel  size={30} className=" transition-all"/></button>
}
      </div>
     </div>
          <div className="">
              {IsSearchModal && <Search setIsSearchModal={setIsSearchModal}/>}
         </div>
    </div> 
  );
};

export default Header