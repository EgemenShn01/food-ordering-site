import React from "react";
import Title from "./ui/Titles";
import Input from "./form/input";
import { Formik, useFormik } from "formik";

const Reservation = () => {
  const onSubmit = async (values, actions) => {
    await new Promise((resolve) => setTimeout(resolve, 4000));
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
      name: "phoneNumber",
      type: "Number",
      placeholder: "Your Phone Number",
      value: values.phoneNumber,
    },
    {
      id: 3,
      name: "Email",
      type: "email",
      placeholder: "Your Email Adress",
      value: values.Email,
    },
    {
      id: 4,
      name: "Persons",
      type: "number",
      placeholder: "How Many Persons?",
      value: values.Persons,
    },
    {
      id: 5,
      name: "date",
      type: "datetime-local",
      value: values.date,
    },
  ];
  return (
    <div className="container mx-auto py-12">
      <div className="flex justify-between  items-center flex-wrap-reverse gap-20">
        <form className="lg:flex-1 w-full  " onSubmit={handleSubmit}>
          <Title addClass={"text-[48px] font-bold m-10"}>Book A Table</Title>
          <div className="flex flex-col gap-y-5">
            {inputs.map((input) => (
              <Input key={input.id} {...input} onChange={handleChange} />
            ))}
          </div>
          <button type="submit" className="btn-primary mt-5">
            BOOK NOW
          </button>
        </form>
        <div className=" lg:mt-20   lg:flex-1 !h-[384px] w-full ">
          <iframe
            className="rounded-[15px] w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3009.9
        856920674065!2d28.971548312004316!3d41.02556897122866!2m3!1f0!2f0!3f0!3m2!1i1
        024!2i768!4f13.1!3m3!1m2!1s0x14cab9e7a7777c43%3A0x4c76cf3dcc8b330b!2sGalata%20Kulesi!
        5e0!3m2!1str!2suk!4v1692187129241!5m2!1str!2suk"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
 