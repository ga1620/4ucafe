import React , {useState,useEffect} from "react";
import NavingBar from "./secondpage/navbar";
import "./secondpage/secondpage.css";
import BottomNav from "./secondpage/bottomnav/bottomnav";
import Firstpagecontent from "./Firstpagecontent";
import {BrowserRouter, Redirect, Route,Switch} from "react-router-dom";
import Cart from "./cart";
import Pizza from "./Pizza/Pizza";
import Burger from "./burger/burger";
import Sandwich from "./sandwich/sandwich";
import Coffee from "./coffee/coffee";
import Icecream from "./icecream/icecream";
import Cake from "./cake/cake";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PagenotFound from "./pagenotfound";
import LoginSign from "./firstpage/loginsign";
const App = () => {

 const [cartiteam,setCartiteam] = useState([]);
 var set;
 const additeam = (iteam) => {
     set = cartiteam.find(value => value.name===iteam.name)
      if(! set)
      {
        setCartiteam([...cartiteam,iteam])
        toast.success(`🦄 ${iteam.name} is added to cart`)
      }
      else{
        toast.error(`👎 ${iteam.name} is Already Added to cart`)
        setCartiteam([...cartiteam])
      }     
 }

 const removeiteam = (iteam) => {
     setCartiteam(cartiteam.filter((value,index) => {
         return(iteam !== index)
     }))
 }

  useEffect(()=> {
      const data = sessionStorage.getItem("iteam");
      if(data)
      {
       var localIteam = JSON.parse(data);
       setCartiteam([...localIteam]);
      } 
      
      
  },[])


   useEffect(() => {
       sessionStorage.setItem("iteam",JSON.stringify(cartiteam));
   },[cartiteam])
    return(   
        <div>      

     
     <ToastContainer
         position="top-center"
         autoClose={3000}
      /> 
     
     <Switch>
        <Route exact path="/" component={LoginSign}/> 
        <Route exact path="/orderpage" component={Firstpagecontent}/>
        <Route  exact path='/cart' component={ () => <Cart  cartiteam={cartiteam} removeiteam={removeiteam}/>}/>
        <Route exact path='/pizza' component={() => <Pizza  additeam={additeam} />}/>
        <Route exact path='/burger' component={() => <Burger  additeam={additeam} />}/>
        <Route exact path='/sandwich' component={() => <Sandwich additeam={additeam}/>}/>
        <Route exact path="/coffee" component={() => <Coffee additeam={additeam} />}/>
        <Route exact path="/icecream" component={() => <Icecream additeam={additeam} />}/>
        <Route exact path="/cake" component={() => <Cake additeam={additeam} />}/>
        <Route exact path="/pay" component={PagenotFound} />
        <Route component={LoginSign}/>
        <Redirect to="/"/>
     </Switch>
     </div>
    );
}

export default App;