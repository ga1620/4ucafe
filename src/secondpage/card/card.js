import React from "react";
import {Button,Card} from "react-bootstrap";
import { Link } from "react-router-dom";
import "./card.css";


const Menue = ({src,title,url}) => {
    return (
            <Card style={{ width: '13rem', height:"20rem"}} className="card">
  <Card.Img variant="top" src={src} />
  <Card.Body>
    <Card.Title>{title}</Card.Title>
    <Link to={url}><button style={{outline:"none"}}>VIEW</button></Link>
  </Card.Body>
</Card>
    );
}

export default Menue;