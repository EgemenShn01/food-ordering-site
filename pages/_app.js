import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "../styles/globals.css";
import Layout from "@/Layout/layout";

 function App({ Component, pageProps }) {
  return(

     <Layout>
    <Component {...pageProps} />
  </Layout>   
  ); 
 
}
export default App;
