import React from "react";
import {Container,Card,Col,Row,Image} from "react-bootstrap";
import "./chef.css"

const Chef = () => {
    return(
        <Container>
         <Row className="justify-content-md-center">
         <div className="mu-title">
           <span className="mu-subtitle" style={{color:"#EEC213"}}>Discover</span>
          <h2>OUR CHEF'S</h2>
        </div>
        </Row>
        <Container className="chefdiv">   
           <Row style={{paddingTop:"40px"}} >
             <Col sm style={{paddingTop:"20px"}} data-aos="zoom-in">
             <Container style={{display:"flex",justifyContent:"center",alignItems:"center"}}>  
             <Image src="https://miro.medium.com/max/200/1*j2kdh7p0pbEBK4DsExjNrA.jpeg"  className="chefImage" roundedCircle />
             </Container>
             <Container style={{textAlign:"center",paddingTop:"20px"}}>
                <h2>Dannet</h2>
                <h4 style={{color:"#EEC213"}}>5 Year <span style={{color:"#EEC213"}}> of Exp</span></h4>
                <Container style={{textAlign:"start"}}>
                <p>Chef Dannet culinary journey spans across ten destinations, in eight countries, across four continents. With a drive to constantly strive for more, Chef Valdes' has transformed the shape of cuisine and cooking altogether through a glitzing career of over 25 years to date</p>
                </Container>
                <div style={{height:"2px",backgroundColor:"#EEC213",width:"auto"}}></div>
             </Container>
             </Col>
    <Col sm style={{paddingTop:"20px"}}>
      <Container style={{display:"flex",justifyContent:"center",alignItems:"center"}}>  
      <Image src="http://www.atlantic.edu/images/aca/chef-deb-pelligrino.jpg" className="chefImage" roundedCircle />
      </Container>
      <Container style={{textAlign:"center",paddingTop:"20px"}}>
         <h2>Deb Pellegrino</h2>
         <h4 style={{color:"#EEC213"}}>3 Year <span style={{color:"#EEC213"}}>of Exp</span></h4>
         <Container style={{textAlign:"start"}}>
         <p>Chef Deb Pellegrino  culinary journey spans across ten destinations, in eight countries, across four continents. With a drive to constantly strive for more, Chef Valdes' has transformed the shape of cuisine and cooking altogether through a glitzing career of over 25 years to date</p>
         </Container>
         <div style={{height:"2px",backgroundColor:"#EEC213",width:"auto"}}></div>
      </Container>
    </Col>
    <Col  sm style={{paddingTop:"20px"}} data-aos="zoom-in">
      <Container style={{display:"flex",justifyContent:"center",alignItems:"center"}}>  
      <Image src="https://www.themasterchefs.com/images/sized/images/articles/edit-2-Vivek-454x579.jpg" className="chefImage" roundedCircle />
      </Container>
      <Container style={{textAlign:"center",paddingTop:"20px"}}>
         <h2>Vivek Singh</h2>
         <h4 style={{color:"#EEC213"}}>7 Year <span style={{color:"#EEC213"}}> of Exp</span></h4>
         <Container style={{textAlign:"start"}}>
         <p>Chef Vivek Singh tantalizing journey spans across ten destinations, in eight countries, across four continents. With a drive to constantly strive for more, Chef Valdes' has transformed the shape of cuisine and cooking altogether through a glitzing career of over 25 years to date</p>
         </Container>
         <div style={{height:"2px",backgroundColor:"#EEC213",width:"auto"}}></div>
      </Container>
    </Col>
  </Row>
  </Container>
        </Container>
    );
}

export default Chef;