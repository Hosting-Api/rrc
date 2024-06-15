import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import About from "./components/About";
import Services from "./components/Facilities";
import Contact from "./components/Contact";
import Facilities from "./components/Facilities";
import WhatsappBtn from "./components/WhatsappBtn";
export default function Home() {
  return (
    <>
     
      
      <Hero />
      
      <div id="about">
        <About />
      </div>
      <div id="facilities">
        <Facilities />
      </div>
{/* <center> */}
<div id="contact">
<WhatsappBtn />
      <Contact />
</div>
{/* </center> */}
      
    
    
    </>

  );
}
