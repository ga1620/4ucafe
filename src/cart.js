import React, {useState} from  "react";
import { Col, Container , Image, Table,Row,Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import {FaTrashAlt} from "react-icons/fa"
import NavingBar from "./secondpage/navbar";
import BottomNav from "./secondpage/bottomnav/bottomnav";

const Cart = ({cartiteam,removeiteam}) => {
    const [updatecartiteam,setUpdatecartiteam] = useState(cartiteam);


    const inc = (index) => {
    let newArray = [...updatecartiteam];
    newArray[index].qunt = newArray[index].qunt +1;
    console.log(newArray[index]);
    setUpdatecartiteam(newArray); 
    }

    const dec = (index) => {
        let newArray = [...updatecartiteam];
        if(newArray[index].qunt !==0)
        newArray[index].qunt = newArray[index].qunt - 1;
        setUpdatecartiteam(newArray); 
        
        if(newArray[index].qunt === 0)
        {
            removeiteam(index);
        }
 }



    var totalAmount = 0;
    return(
        <div style={{backgroundColor:"#ffffff",width:"100vw",padding:"0px"}}>
           <NavingBar/>
           <BottomNav/> 
        <Container style={{paddingTop:"15vh",paddingBottom:"15vh"}} fluid>
            <Row>
            <Col xl={8} md={8} lg={8} sm>    
            <Table responsive="sm" >
            {updatecartiteam.map((cartiteam,index) => {

                return(
                    <tbody>
                    <td style={{display:"flex",justifyContent:"center",alignIteam:"center"}}>
                     <Image src={cartiteam.url} fluid style={{width:"100px",height:"110px"}} responsive/>
                     </td>  
                    <td>      
                    <h4>{cartiteam.name}</h4>
                    <h6>Amount :{cartiteam.Amount} /-</h6>
                    <div style={{display:"flex",justifyContent:"start",alignItems:"flex-start",columnGap:"5px",paddingTop:"20px"}}>
                    <button onClick={()=> inc(index)} className="buttoncart">+</button>   
                    <button className="buttonquntcart">{cartiteam.qunt === 0 ? "Qut" : cartiteam.qunt}</button>
                    <button onClick={()=> dec(index)} className="buttoncart">-</button>
                    </div>
                    <h5 style={{paddingTop:"20px"}}>Total : {cartiteam.qunt * cartiteam.Amount} /-</h5>
                    </td>
                    <td>
                    <button onClick={() => removeiteam(index)} className="cartbutton"><FaTrashAlt/></button>
                    </td>
                    </tbody>
                );
            })}
            </Table>
            </Col>
            
           {
             cartiteam.forEach(element => {
                 totalAmount = totalAmount + (element.qunt * element.Amount); 
             })
           }
           <Col sm style={{paddingTop:"10vh",display:"flex",justifyContent:"center",alignIteam:"center"}} xl={4} md={4} lg={4}>
           {
               cartiteam.length !==0 ? <Card style={{ width: '18rem', height:"20rem"}} className="cartcard">
                   <Container style={{display:"flex",justifyContent:"center",alignIteam:"center",paddingTop:"2vh"}}>
                   <img src="https://image.freepik.com/free-vector/dollar_53876-25498.jpg"  style={{width:"100px",height:"100px"}}/>
                   </Container>
                    <Card.Body>
                    <Card.Title style={{textAlign:"center"}}><h1 style={{fontFamily:"Tangernei cursive"}}>Total Amount <br/> {totalAmount} /-</h1>
                    <Link to="/pay"><button style={{outline:"none",borderRadius:"5px"}}>Pay</button></Link>
                    </Card.Title>
                     </Card.Body>
                   </Card> 
                   : " "
           }
             
           </Col>
           </Row>
           {
              cartiteam.length==0 ? <div style={{textAlign:"center"}}>
                  <h1>Oops Empty...</h1>
                  <Link to="/orderpage"><button style={{borderRadius:"5px",marginTop:"5vh"}}>View Menue</button></Link>
                  <br/>
                  <Image src="https://image.freepik.com/free-vector/beautiful-chef-girl-holding-empty-plate-cartoon-illustration_56104-314.jpg" fluid />
              </div> : ""
           }
        </Container>
        </div>
    );
}

export default Cart;