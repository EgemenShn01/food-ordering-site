import Campaigns from "@/components/campaigns";
import Carousel from "../../components/Carousel";
import React from "react";
import MenuWrapper from "@/components/product/MenuWrapper";
import About from "@/components/about";
import Reservation from "@/components/reservation";
import Customers from "@/components/customers/customersItem";

const Index = () => {
  return (
    <React.Fragment>
      <Carousel />
      <Campaigns />
      <MenuWrapper /> 
      <About/>
      <Reservation/>
      <Customers/>
          </React.Fragment>
  );
};
export default Index;
