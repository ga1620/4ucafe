
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import "./carousel.css"
import { Carousel } from 'react-responsive-carousel';
import { Container } from "react-bootstrap";


 const Carsoul = () => {
        return (
            <div>
                <Carousel autoPlay interval="5000" transitionTime="5000" infiniteLoop showThumbs={false} showStatus={false} stopOnHover={true} > 
                  
                    <div  className="carouselDiv" >
                        <img className="carouselImg" src="https://images.unsplash.com/photo-1536857620814-08877a2162d5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" />
                        <Container className="legend" style={{backgroundColor:" rgba(255, 99, 71, 0)"}}>
                            <Container fluid className="carouseltext">
                            <span className="spanc" style={{wordSpacing:"8px",fontWeight:"100",fontFamily:"Times New Roman, Times, serif"}}>WELCOME TO</span>
                            <h1 className="hc" style={{color:"#EEC213",fontWeight:"600"}}>4U <spam>cafe</spam></h1>
                            <a href="#menue"><button id="button">View menue</button></a>
                            </Container>
                            <p  className="pc" style={{fontSize:"20px"}}>Our restaurant offers full-service dining <br/>with breathtaking views seen from our indoor covered patio and our outdoor sundeck.</p>
                        </Container>
                    </div>
                    <div  className="carouselDiv"> 
                        <img className="carouselImg" src="https://images.unsplash.com/photo-1606851686066-c7f17f1ece96?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1502&q=80" />
                        <Container className="legend" style={{backgroundColor:" rgba(255, 99, 71, 0)"}}>
                            <h3 className="secondc">Life is like a <spam style={{color:"#EEC213"}}>RESTAURANT</spam>; you can have anything you want as long as you are willing to pay the <spam style={{color:"#EEC213"}}>PRICE</spam>.</h3>
                        </Container>
                    </div>
                 </Carousel>
            </div>
        )
    };

export default Carsoul;