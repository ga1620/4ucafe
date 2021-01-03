import React from "react";
import { Container , Image ,Row,Col} from "react-bootstrap";
import image from "./undraw_traveling_t8y2.png"
import "./location.css"


const Location = () => {
    return(
        <Container style={{paddingTop:"20vh"}}>
            <Row>
                    <Col md={12}>
                        <div className="mu-about-us-area">
                           <div className="mu-title">
                               <span className="mu-subtitle" style={{color:"#EEC213"}}>Discover</span>
                               <h2> OUR LOCATION</h2>
                           </div>
                       </div>
                   </Col>
              </Row>    
          <Container style={{paddingTop:"80px",display:"flex",justifyContent:"center",alignItems:"center"}}>  
          <Image src={image} fluid  width="500px" height="500px" data-aos="fade-right"/>
          </Container>
          <Container style={{display:"flex",justifyContent:"center",alignItems:"center"}} >
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.369039874337!2d79.06526921440908!3d21.137706989427187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c12526c3c75b%3A0x7113e15391d6b004!2sCAKES%204%20U!5e0!3m2!1sen!2sin!4v1608913163081!5m2!1sen!2sin"  frameborder="0"   allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
          </Container>
        </Container>
    );
}

export default Location;