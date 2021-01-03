import React from "react"
import {Container,Row,Col,Image} from "react-bootstrap"
import "react-bootstrap";
import image from "./undraw_online_groceries_a02y.png"
import "./svgimage.css";
 
const Svgimage = () => {
    return(
        <Container style={{paddingTop:"60px",display:"flex",justifyContent:"center",alignItems:"center"}} data-aos="zoom-in-up">
              <Image src={image} alt="load" className="svgimage" />
        </Container>
    );
}

export default Svgimage;