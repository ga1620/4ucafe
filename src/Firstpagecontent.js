import React from "react";
import About from "./secondpage/about";
import Carsoul from "./secondpage/carousel/carousel.js";
import Chef from "./secondpage/chefavator/chef"
import Svgimage from "./secondpage/svgimage/svgimage";
import CardDiv from "./secondpage/card/carddiv";
import "./secondpage/secondpage.css";
import Contactus from "./secondpage/contactus/contact";
import Customerreview from "./secondpage/customerreview/customerreview";
import Location from "./secondpage/location/location";
import Fotter from "./secondpage/footer/footer";
import NavingBar from "./secondpage/navbar";
import BottomNav from "./secondpage/bottomnav/bottomnav";



const Firstpagecontent = () => {
    return(   
        <div style={{backgroundColor:"#ffffff"}}> 
     <NavingBar/>
     <BottomNav/>       
     <Carsoul/>
     <About/>
     <Chef/>
     <Svgimage/>
     <CardDiv/>
     <Contactus/>
     <Customerreview/>
     <Location/>
     <Fotter/>
     </div>
    );
}

export default Firstpagecontent;