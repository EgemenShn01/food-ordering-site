import Head from "next/head";
import  Home from "./home";
import Header from "@/components/layout/header";
import Input from "@/components/form/input";
import Footer from "@/components/layout/Footer";
 
export default function Index() {
  return (
    <div>
      <Head>
   <title>Food Ordering</title>
   <link rel="shortcut icon" href="images/logo.ico" />
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
      </Head>
      <Home/>
    </div>
  );
}
