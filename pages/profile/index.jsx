import React from 'react'
import Image from 'next/image'
import Title from '@/components/ui/Titles'
import Input from '@/components/form/input'
import {  useFormik } from "formik";



const Index = () => {
  const onSubmit = async (values, actions) => {
    await new Promise((resolve) => setTimeout(resolve, 0));
    actions.resetForm();
  };

  const { values, handleChange, handleSubmit } = useFormik({
    initialValues: {
      fullName: "",
      phoneNumber: "",
      Email: "",
      Persons: "",
      date: "",
    },
    onSubmit,
  });
  const inputs = [
    
    {
      id: 1,
      name: "fullName",
      type: "text",
      placeholder: "Your Full Name",
      value: values.fullName,
    },
        {
          id: 2,
          name: "Email",
          type: "email",
          placeholder: "Your Email Adress",
          value: values.Email,
    },
                {
                  id: 3,
                  name: "phoneNumber",
                  type: "Number",
                  placeholder: "Your Phone Number",
                  value: values.phoneNumber,
    },
                                {
      id: 4,
      name: "address",
      type: "text",
      placeholder: "Your Address",
      value: values.address,
    },
                                                                {
      id: 5,
      name: "job",
      type: "text",
      placeholder: "Your Job",
      value: values.job,
    },
                                                                                                                                {
      id: 6,
      name: "bio",
      type: "text",
      placeholder: "Your Bio",
      value: values.bio,
    },
  ];
  return (
    <div className='flex px-10 py-11'>
        <div className='flex-shrink-0 border border-secondery  w-[360px] '>
            <div className='relative font-bold flex flex-col items-center px-10 py-5'>
                 <Image src="/images/egemen2.jpg  " alt="" width={140} height={140} className='rounded-full border-1 border-black'/>
                 <span className='text-2xl mt-5'>Egemen Şahin</span>
            </div>
            <ul className='text-center justify-center flex flex-col'>
              <li className='border hover:bg-black
               transition-all hover:text-white
               hover:scale-105 active:bg-white active:text-black hover:shadow-white  cursor-pointer  h-20 '>
                <i className='ml-1 fa fa-home'></i>
                <button className='ml-2 mt-7 font-bold' >Account</button></li>
              <li className='border hover:bg-black
               transition-all hover:text-white
               hover:scale-105 active:bg-white active:text-black hover:shadow-white  cursor-pointer  h-20'>
                <i className='ml-1 fa fa-key'></i>
                <button className='ml-2 mt-7 font-bold'>Passsword</button></li>
              <li className='border hover:bg-black
               transition-all hover:text-white
               hover:scale-105 active:bg-white active:text-black hover:shadow-white  cursor-pointer  h-20'>
                <i class=" ml-1  fa-solid fa-motorcycle"></i>
                <button className='ml-2 mt-7 font-bold'>Orders</button></li>
              <li className='border hover:bg-black
               transition-all hover:text-white
               hover:scale-105 active:bg-white active:text-black hover:shadow-white  cursor-pointer  h-20'>
                <i class=" ml-1 fa-solid fa-right-from-bracket"></i>
                <button className='ml-2 mt-7 font-bold'>Exit</button></li>
               </ul>
        </div>
        <div className='ml-16 flex-1 mt-20 ' onSubmit={handleSubmit}  >
          <Title addClass={"text-[40px]"}>Account Settings</Title>
          <div className='grid grid-cols-2 w-[1200px]  mt-5 gap-4'>
            {inputs.map((input) =>(
            <Input
                    key="input.id" {...input} onChange={handleChange} 
            />
            ))}
          </div>
          <div className='btn-primary mt-10 w-[150px]'><button>Update</button></div>
        </div>
    </div>
  )
}

export default Index