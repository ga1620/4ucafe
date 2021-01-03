import React from "react";
import {FiPhoneCall,FiShoppingCart,FiMapPin} from "react-icons/fi";
import {FaClipboardList} from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,Row,Col } from "react-bootstrap";
import "./bottomnav.css";

import {Link} from "react-router-dom";


const BottomNav = () => {
    return(
        <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
        <Container className="bottomnav" >
            <Row xs={3} lg={6}  className="justify-content-lg-center" style={{height:"10vh"}}>
                <Col sm  className="bottomnavcol" style={{borderTopLeftRadius:"20px"}}>
                 <div>   
                 <Link to="/orderpage"><FaClipboardList className="link"/></Link>
                 </div>
                </Col>
                <Col sm  className="bottomnavcol">
                <div>   
                <Link  to="/cart"><FiShoppingCart className="link"/></Link>
                </div>
                </Col>
                <Col sm  className="bottomnavcol" style={{borderTopRightRadius:"20px"}}>
                <div>    
                <Link to="/orderpage" ><FiPhoneCall className="link"/></Link>
                </div>
                </Col>
            </Row>
        </Container>
        </div>
    );
}

export default BottomNav;