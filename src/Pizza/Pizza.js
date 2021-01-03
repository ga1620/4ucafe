
import React , {useState} from "react";
import { Container,Row,Col,Card } from "react-bootstrap";
import BottomNav from "../secondpage/bottomnav/bottomnav";
import NavingBar from "../secondpage/navbar";
import "./pizza.css";
const Pizza = ({additeam}) => {

    const [vegPizzaQunt,setVegPizzaQunt] = useState(0);
    const [nonvegPizzaQunt,setNonvegPizzaQunt] = useState(0);
    const [cheesPizzaQunt,setCheesPizzaQunt] = useState(0);
    const [simplePizzaQunt,setSimplePizzaQunt] = useState(0);

const pizzaIteams = [
    {
      name:"Veg pizza",
      Amount:100,
      qunt:vegPizzaQunt,
      url:"https://freepngimg.com/thumb/pizza/6-pizza-png-image.png",
      increament : function () {
        setVegPizzaQunt(vegPizzaQunt+1);
       },
      decreament : function () {
         if(vegPizzaQunt !==0) 
        setVegPizzaQunt(vegPizzaQunt-1);
       }
    },
    {
        name:"NonVeg pizza",
        Amount:200,
        qunt:nonvegPizzaQunt,
        url:"https://freepngimg.com/thumb/pizza/7-pizza-png-image.png",
        increament : function () {
            setNonvegPizzaQunt(nonvegPizzaQunt+1);
        },
        decreament : function () {
            if(nonvegPizzaQunt !==0)
            setNonvegPizzaQunt(nonvegPizzaQunt-1);
        }
    },
    {
        name:"Chees pizza",
      Amount:300,
      qunt:cheesPizzaQunt,
      url:"https://freepngimg.com/thumb/pizza/4-pizza-png-image.png",
      increament : function () {
          setCheesPizzaQunt(cheesPizzaQunt+1);
      },
      decreament : function () {
          if(cheesPizzaQunt !==0)
          setCheesPizzaQunt(cheesPizzaQunt-1);
      }
    },
    {
        name:"Simple pizza",
        Amount:400,
        qunt:simplePizzaQunt,
        url:"https://freepngimg.com/thumb/pizza/5-pizza-png-image.png",
        increament : function () {
            setSimplePizzaQunt(simplePizzaQunt+1);
        },
        decreament : function () {
            if(simplePizzaQunt !==0)
            setSimplePizzaQunt(simplePizzaQunt-1);
        }
    }
]

  return(
      <div>
      <BottomNav/>
      <NavingBar/>    
      <Container style={{paddingTop:"15vh",paddingBottom:"10vh",backgroundColor:"#2C3335",display:"flex",justifyContent:"center",alignIteam:"center"}} fluid>
          <Row className="row align-items-center">
            {pizzaIteams.map((pizzaIteams,index) => {
              return(
                  <Col sm xl={6} lg={6} md={6} key={index} style={{display:"flex",justifyContent:"center",alignItems:"center",paddingBottom:"5vh"}}>
                      <Card style={{width:"15rem",height:"auto",textAlign:"center"}}>
                          <Container style={{display:"flex",justifyContent:"center",alignItems:"center"}} >
                          <Card.Img src={pizzaIteams.url} style={{width:"140px",height:"151px",padding:"5px 10px 5px"}}/>
                          </Container>
                          <Card.Body>
                              <Card.Title style={{fontFamily:"Tangerine cursive",color:"#EEC213",fontSize:"25px"}}>{pizzaIteams.name}</Card.Title>
                              <Card.Text>{pizzaIteams.Amount} /-</Card.Text>
                              <Container style={{display:"flex",justifyContent:"center",alignItems:"center",columnGap:"5px"}} fluid>
                              <button onClick={pizzaIteams.increament} className="button">+</button>
                              <button className="buttonqunt">{pizzaIteams.qunt === 0 ? "Qut" : pizzaIteams.qunt}</button>
                              <button onClick={pizzaIteams.decreament} className="button">-</button>
                              </Container>
                              <Container style={{display:"flex",justifyContent:"center",alignItems:"center",paddingTop:"15px"}} fluid>
                             <button onClick={() => additeam(pizzaIteams)} className="buttonadd">Add</button>
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

export default Pizza;