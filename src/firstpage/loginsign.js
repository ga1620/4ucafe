import React from "react";
import {Form,Container,Row} from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import logogo from "../firstpage/google-logo-9822.png"
import logofb from "../firstpage/62487-bluetie-icons-computer-facebook-login-icon-email.png"
import "./index.css";
import {auth,googleLogin,facebookLogin} from "../firebaseconfig";
import { Redirect } from "react-router-dom";

const logingoogle = () => { 
   auth.signInWithPopup(googleLogin).then(res =>{
    window.location="/orderpage";
  }).catch(function(error){
    alert("invalid");
  });

}

const loginfacebook = () => { 
  auth.signInWithPopup(facebookLogin).then(res =>{
   window.location="/orderpage";
 }).catch(function(error){
   alert("invalid");
 });

}


const LoginSign = () => {
    return(
      <div>
       
        <div id="background-wrap">
         <div class="bubble x1"></div>
       <div class="bubble x4"></div>
       <div class="bubble x5"></div>
       <div class="bubble x8"></div>
       <div class="bubble x9"></div>
       <div class="bubble x10"></div>
      </div>  
      
       <Container className="innerdiv">
           <Container style={{justifyContent:"center",display:"flex",alignItems:"center" , color:"#F09819",padding:"30px"}}>
           <h1 style={{fontSize:"60px"}}>4U</h1>
           <span style={{paddingTop:"25px"}}>cafe</span>
           </Container>
        <Form>
  <Form.Group controlId="formBasicEmail">
     
    <Form.Control  className="inputlogin" type="email" placeholder="Enter email" required/>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    
    <Form.Control type="password"  className="inputlogin" placeholder="Password" required/>
  </Form.Group>
  <Container style={{justifyContent:"center",display:"flex",alignItems:"center" , paddingTop:"25px"}} >
  <button id="loginbutton" size="sm">
    Login
  </button>
  </Container >
  <Container style={{paddingTop:"40px"}}>
  <Container style={{textAlign:"center"}}>
  <Form.Text style={{color:"grey"}}>Or login with</Form.Text>
  </Container>
  <Row style={{paddingTop:"20px"}}>
  <Container style={{justifyContent:"center",display:"flex",alignItems:"center",columnGap:"50px",paddingBottom:"20px"}} className="flex-c p-b-112">
      <div className="logo" onClick={()=>logingoogle()}><span style={{paddingRight:"10px"}}><img src={logogo} roundedCircle style={{width:"40px",height:"40px"}} /><label>Google </label></span></div>
      <div className="logo" onClick={()=>logingoogle()}><span style={{paddingRight:"10px",paddingLeft:"5px"}}><img src={logofb} roundedCircle style={{width:"35px",height:"35px"}} /><label>Facebook </label></span></div>
  </Container>
  </Row>
  </Container>
</Form>
</Container>
</div>
    );
}

export default LoginSign;