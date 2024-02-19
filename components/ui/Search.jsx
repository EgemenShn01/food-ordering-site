import React from 'react'
import OutsideClickHandler from 'react-outside-click-handler';
import Title from "../ui/Titles";
import Image  from 'next/image';
import {GiCancel} from "react-icons/gi"


const Search = ({setIsSearchModal}) => {
  return (
<div className="fixed top-0 left-0 w-screen h-screen  z-50 after:content-['']
 after:w-screen after:h-screen  after:absolute after:top-0 after:left-0 after:bg-white after:opacity-40
  first-of-type:h-screen grid place-content-center  ">
           <OutsideClickHandler  onOutsideClick={()=>setIsSearchModal(false)}>
            <div className="h-full w-full grid place-content-center ">
                <div className="relative z-50 md:w-[600px] w-[370] bg-white  border-2 shadow-2xl  p-10 rounded-3xl">
    <Title addClass="text-9xl text-[40px] text-center ">
         Search
    </Title>
    <input type="text" placeholder="Search..." className="border w-full my-10 rounded-md" />
                  
                  <ul className="mt-1">
                    <li className="flex items-center justify-between p-1 hover:bg-primary transition-all ">
                      <div className="relative flex">
                        <Image src="/images/f1.png" alt=""  width={69} height={69}/>
                      </div>
                      <span className='font-bold'> Good Pizza</span>
                      <span className="font-bold">$10</span>
                    </li>
                    <li className="flex items-center justify-between p-1 hover:bg-primary transition-all">
                      <div className="relative ">
                        <Image src="/images/f3.png" alt="" width={69} height={69}/>
                      </div>
                      <span className='font-bold'>Delicious Pizza</span>
                      <span className="font-bold">$10</span>
                    </li>
                    <li className="flex items-center justify-between p-1 hover:bg-primary transition-all">
                      <div className="relative ">
                        <Image src="/images/f6.png" alt="" width={69} height={69}/>
                      </div>
                      <span className='font-bold'>Dangerous Pizza</span>
                      <span className="font-bold">$10</span>
                    </li>
                  </ul>
                  <button onClick={()=>setIsSearchModal(false)} className="absolute top-4 right-4  hover:text-secondery"> <GiCancel  size={30} className="hover:text-primary transition-all"/></button>
    </div>
            </div>    
</OutsideClickHandler></div>
  )
}

export default Search