
import React , {useState} from "react";
import { Container,Row,Col,Card } from "react-bootstrap";
import "../Pizza/pizza.css";
import BottomNav from "../secondpage/bottomnav/bottomnav";
import NavingBar from "../secondpage/navbar";
const Burger = ({additeam}) => {

    const [iteamOne,setIteamOne] = useState(0);
    const [iteamTwo,setIteamTwo] = useState(0);
    const [iteamThree,setIteamThree] = useState(0);
    const [iteamFour,setIteamFour] = useState(0);

const burgerIteams = [
    {
      name:"Veg Burger",
      Amount:100,
      qunt:iteamOne,
      url:"https://freepngimg.com/thumb/burger%20sandwich/4-hamburger-burger-png-image.png",
      increament : function () {
        setIteamOne(iteamOne+1);
       },
      decreament : function () {
        if(iteamOne !==0)
        setIteamOne(iteamOne-1);
       }
    },
    {
        name:"Corn Burger",
        Amount:150,
        qunt:iteamTwo,
        url:"https://freepngimg.com/thumb/burger%20sandwich/5-hamburger-burger-png-image.png",
        increament : function () {
            setIteamTwo(iteamTwo+1);
        },
        decreament : function () {
            if(iteamTwo !==0)
            setIteamTwo(iteamTwo-1);
        }
    },
    {
        name:"Chees Burger",
      Amount:200,
      qunt:iteamThree,
      url:"https://freepngimg.com/thumb/burger%20sandwich/9-hamburger-burger-png-image.png",
      increament : function () {
          setIteamThree(iteamThree+1);
      },
      decreament : function () {
          if(iteamThree !==0)
          setIteamThree(iteamThree-1);
      }
    },
    {
        name:"Chicken Burger",
        Amount:250,
        qunt:iteamFour,
        url:"https://freepngimg.com/thumb/burger%20sandwich/14-hamburger-burger-png-image.png",
        increament : function () {
            setIteamFour(iteamFour+1);
        },
        decreament : function () {
            if(iteamFour !==0)
            setIteamFour(iteamFour-1);
        }
    }
]

  return(
      <div>
          <NavingBar/>
          <BottomNav/>
      <Container style={{paddingTop:"15vh",paddingBottom:"10vh",backgroundColor:"#2C3335",display:"flex",justifyContent:"center",alignIteam:"center"}} fluid>
          <Row className="row align-items-center">
            {burgerIteams.map((burgerIteams,index) => {
              return(
                  <Col sm xl={6} lg={6} md={6} key={index} style={{display:"flex",justifyContent:"center",alignItems:"center",paddingBottom:"5vh"}}>
                      <Card style={{width:"15rem",height:"auto",textAlign:"center"}}>
                          <Container style={{display:"flex",justifyContent:"center",alignItems:"center"}} >
                          <Card.Img src={burgerIteams.url} style={{width:"140px",height:"151px",padding:"5px 10px 5px"}}/>
                          </Container>
                          <Card.Body>
                              <Card.Title style={{fontFamily:"Tangerine cursive",color:"#EEC213",fontSize:"25px"}}>{burgerIteams.name}</Card.Title>
                              <Card.Text>{burgerIteams.Amount} /-</Card.Text>
                              <Container style={{display:"flex",justifyContent:"center",alignItems:"center",columnGap:"5px"}} fluid>
                              <button onClick={burgerIteams.increament} className="button">+</button>
                              <button className="buttonqunt">{burgerIteams.qunt === 0 ? "Qut" : burgerIteams.qunt}</button>
                              <button onClick={burgerIteams.decreament} className="button">-</button>
                              </Container>
                              <Container style={{display:"flex",justifyContent:"center",alignItems:"center",paddingTop:"15px"}} fluid>
                             <button onClick={() => additeam(burgerIteams)} className="buttonadd">Add</button>
                             </Container>
                           </Card.Body>
                      </Card>
                  </Col>
              );
            })}
          </Row>
      </Container>
      </div>
  );

}

export default Burger;