import React from "react"
import "react-bootstrap"
import "./about.css"
import image from "./undraw_cooking_lyxy.png"


const About = () => {
    return(
        <section id="mu-about-us" style={{paddingBottom:"5px"}} >
           <div className="container">
                  <div className="row">
                      <div className="col-md-12">
                          <div className="mu-about-us-area">
                             <div className="mu-title">
                                   <span className="mu-subtitle" style={{color:"#EEC213"}}>Discover</span>
                                    <h2>ABOUT US</h2>
                             </div>
                          </div>
                       </div>
                     </div>        
    
                <div className="row" >
                     <div className="col-md-6" data-aos="fade-right">
                         <div className="mu-about-us-left">     
                           <img   className="image-fluid" src={image} alt="img"/>           
                         </div>
                     </div>
                     <div className="col-md-6">
                         <div className="mu-about-us-right paragraph">
                             <p className="paragraph"> <spam style={{color:"#EEC213",fontSize:"50px"}}>4U</spam> cafe, a part of Coffee Day Global Limited, is India’s favourite hangout for coffee and conversations. Popularly known as 4U, we strive to provide the best experience to our guests. Our coffees are sourced from thousands of small coffee planters, who made us who we are today and we're glad to be a part of their lives. We opened our first cafe in 1996 at Brigade Road in Bangalore.</p>                              
                          </div>
                     </div>
                 </div>
              </div>
      </section>
    );
} 

export default About;