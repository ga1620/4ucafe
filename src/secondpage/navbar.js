import React from "react";
import {ReactNavbar} from "react-responsive-animate-navbar";
import logo from "./carousel/LogoMakr-5pCIMe.png"
import {FiPhoneCall} from "react-icons/fi"
import "./contactus/contact";


const NavingBar = () => {
    return(
      <ReactNavbar 
      color="#2C3335"
      logo={logo}
      menu={[
      ]}
      social={[
        {
          name: "Facebook",
          url: "https://www.facebook.com/4ucafe/",
          icon: ["fab", "facebook-f"],
        },
        {
          name: "Instagram",
          url: "https://www.instagram.com/4ucafe/",
          icon: ["fab", "instagram"],
        }
      ]}
    />
    );
}

export default NavingBar;