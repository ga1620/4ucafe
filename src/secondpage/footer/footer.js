import React from "react";
import {FaFacebook,FaInstagram} from "react-icons/fa"
import {Col,Row} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';


const Fotter = () => {
    return(
<div className=" text-center text-lg-start" style={{backgroundColor:"#2C3335",marginTop:"5vh"}}>
  <div className="text-center p-3" style={{backgroundColor:"grey"}} style={{height:"25vh"}}>
    <h4 style={{color:"black"}}> © 2020 Copyright:</h4>
    <h6>Developed by @gauravrahangdale27</h6>
  </div>
</div>
    );
}

export default Fotter;