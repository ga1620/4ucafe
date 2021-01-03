
import React , {useEffect,useState} from "react";
import { Col, Container, Row,Card ,Image} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { IoIosStar,IoIosStarOutline,IoIosStarHalf } from "react-icons/io";
import "./customerreview.css";
import Axios from "axios";


const Customerreview = () => {
    const [firstCustomer,setFirstCustomer] = useState({});
    const [secondCustomer,setSecondCustomer] = useState({});
    const [thirdCustomer,setThirdCustomer] = useState({});

    useEffect(()=>{
      fetchData()
    },[])

    const fetchData =  async () => {
        const fetchone   = await Axios.get('https://randomuser.me/api/');
        const fetchtwo   = await Axios.get('https://randomuser.me/api/');
        const fetchthree = await Axios.get('https://randomuser.me/api/');
        const dataone = fetchone.data.results[0];
        const datatwo = fetchtwo.data.results[0];
        const datathree = fetchthree.data.results[0];
        setFirstCustomer(dataone);
        setSecondCustomer(datatwo);
        setThirdCustomer(datathree);  
        console.log(fetchone);
    }
    return(
        <Container style={{paddingTop:"15vh"}}>
             <Row>
                    <Col md={12}>
                        <div className="mu-about-us-area">
                           <div className="mu-title">
                               <span className="mu-subtitle" style={{color:"#EEC213"}}>Discover</span>
                               <h2> OUR CUSTOMER'S</h2>
                           </div>
                       </div>
                   </Col>
              </Row>    
            <Container style={{display:"flex",justifyContent:"center",alignItems:"center"}} >     
            <Row  style={{paddingTop:"30px"}}>
                <Col style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                   <Card style={{ width: '15rem'  }} className="cardcustomer">
                     <Row className="justify-content-md-center">  
                     <Image  src={firstCustomer.picture?.medium}  rounded width="128px" height="128px" roundedCircle style={{boxShadow:"5px 5px #e5e5e5"}}/>
                     </Row>
                     <Card.Body>
                         <Card.Title>{firstCustomer.name?.title} {firstCustomer.name?.first} {firstCustomer.name?.last}</Card.Title>
                         <Card.Text>
                            <p style={{color:"#EEC213"}}><IoIosStar/> <IoIosStar/> <IoIosStar/>  <IoIosStarHalf/> <IoIosStarOutline/></p>
                         </Card.Text>
                     </Card.Body>
                   </Card>
                </Col>
                <Col style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                <Card style={{ width: '15rem' }} className="cardcustomer">
                <Row className="justify-content-md-center">
                     <Image  src={secondCustomer.picture?.medium} width="128px" height="128px" roundedCircle style={{boxShadow:"5px 5px #e5e5e5"}}/>
                     </Row>
                     <Card.Body>
                         <Card.Title>{secondCustomer.name?.title} {secondCustomer.name?.first} {secondCustomer.name?.last}</Card.Title>
                         <Card.Text>
                            <p style={{color:"#EEC213"}}><IoIosStar/> <IoIosStar/> <IoIosStar/> <IoIosStarHalf/> <IoIosStarHalf/></p>
                         </Card.Text>
                     </Card.Body>
                   </Card>
                </Col>
                <Col style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                <Card style={{ width: '15rem'  }} className="cardcustomer">
                <Row className="justify-content-md-center">
                     <Image src={thirdCustomer.picture?.medium} width="128px" height="128px" roundedCircle style={{boxShadow:"5px 5px #e5e5e5"}}/>
                     </Row>
                     <Card.Body>
                         <Card.Title>{thirdCustomer.name?.title} {thirdCustomer.name?.first} {thirdCustomer.name?.last}</Card.Title>
                         <Card.Text>
                            <p style={{color:"#EEC213"}}><IoIosStar/> <IoIosStar/> <IoIosStar/> <IoIosStarOutline/> <IoIosStarOutline/></p>
                         </Card.Text>
                     </Card.Body>
                   </Card>
                </Col>
            </Row>
            </Container>
            <Container style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
            </Container>
        </Container>
    );
};

export default Customerreview;