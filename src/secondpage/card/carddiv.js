import React from "react"
import {Container,Row,Col} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Menue from "./card";
import "./carddiv.css";


const CardDiv = () => {
    return(
        <Container style={{paddingTop:"20vh"}} id="menue">
            <Row className="justify-content-md-center" style={{paddingTop:"10px"}}>
           <div className="mu-title">
         <span className="mu-subtitle" style={{color:"#EEC213"}}>Discover</span>
          <h2>OUR MENUE</h2>
           </div>
        </Row>
            <Row className="justify-content-md-center" style={{paddingTop:"60px"}}>
                <Col sm style={{display:"flex",justifyContent:"center",alignItems:"center"}} className="col" data-aos="zoom-in-up">
                   <Menue src="https://icons.iconarchive.com/icons/aha-soft/food/256/burger-icon.png" url="/burger"/>
                </Col>
                <Col sm style={{display:"flex",justifyContent:"center",alignItems:"center"}} className="col" data-aos="zoom-in-up">
                    <Menue src="https://icons.iconarchive.com/icons/aha-soft/desktop-buffet/256/Pizza-icon.png" url="/pizza"/>
                </Col>
                <Col sm style={{display:"flex",justifyContent:"center",alignItems:"center"}} className="col" data-aos="zoom-in-up">
                    <Menue src="https://icons.iconarchive.com/icons/google/noto-emoji-food-drink/256/32386-sandwich-icon.png"  url="/sandwich"/>
                </Col>
            </Row>
            <br/>
            <Row className="justify-content-md-center">
                <Col sm style={{display:"flex",justifyContent:"center",alignItems:"center"}} className="col" data-aos="zoom-in-up">
                    <Menue src="https://icons.iconarchive.com/icons/archigraphs/oldies/256/Coffee-Cup-icon.png" url="/coffee"/>
                </Col>
                <Col sm style={{display:"flex",justifyContent:"center",alignItems:"center"}} className="col" data-aos="zoom-in-up">
                    <Menue src="https://icons.iconarchive.com/icons/icons-land/3d-food/256/IceCream-Cone-icon.png" url="/icecream"/>
                </Col>
                <Col sm style={{display:"flex",justifyContent:"center",alignItems:"center"}} className="col" data-aos="zoom-in-up">
                    <Menue src="https://icons.iconarchive.com/icons/icons-land/3d-food/256/Cake-Chocolate-icon.png" url="/cake" />
                </Col>
            </Row>
        </Container>
    );
}

export default CardDiv;