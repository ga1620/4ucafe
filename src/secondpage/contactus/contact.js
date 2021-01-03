import React from "react"
import {Container,Row,Col, Form} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./contact.css";
import image from "./undraw_contact_us_15o2.png";


const Contactus = () => {
    return (
        <Container style={{paddingTop:"20vh"}} id="contactus">
            <Row className="justify-content-md-center" style={{paddingTop:"10px"}}>
           <div className="mu-title">
         <span className="mu-subtitle" style={{color:"#EEC213"}}>Discover</span>
          <h2>CONTACT US</h2>
           </div>
        </Row>
            <Row >
                <Col sm={8} data-aos="fade-right">
                 <img className="image-fluid" src={image} alt="loading" />   
                </Col>
                <Col sm={4}>
                <Form className="form">
             <Form.Group>
             <Form.Control type="text" placeholder="Name" className="textinput"/>  
            </Form.Group>       
             <Form.Group controlId="exampleForm.ControlInput1">
               <Form.Control type="email" placeholder="Email" className="textinput"/>
             </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Control as="textarea" rows={3} placeholder="Message" className="textinput" style={{height:"20vh"}}/>
              </Form.Group>
              <Form.Group style={{display:"flex",justifyContent:"center"}} >
              <input type="submit" value="Send" style={{marginTop:"20px"}} className="button"/>
              </Form.Group>
               </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default Contactus;