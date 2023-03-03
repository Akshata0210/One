import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';


const Header = () => {
  return (
    <>
     
    <nav class="fnav" >
      <Link to="/"><img src="https://static.lenskart.com/media/desktop/img/site-images/main_logo.svg" alt=""></img></Link>
      <img src="https://static.lenskart.com/media/mobile/images/phone_number.svg" alt="" width={120}></img>
      <input type="text" placeholder='What are you looking for' width={100}></input>
      <p>Track Order</p>
      <p>Sign In & Sign Up</p>
      <p>Wishlist <img src="https://static.lenskart.com/media/desktop/img/wishlist.png"></img></p>
      <p>Cart<img src="https://static.lenskart.com/media/desktop/img/cart.png"></img></p>
    </nav>
     <Navbar bg="light" variant="light">
     <Container className='demo'>
     
      </Container>
     </Navbar>
    {/* <nav class="UTF-8">
      <img src=""></img>
      input type="text" placeholder="What are you looking for">
       <p>Track Order</p>
       <p> Sign In & Sign Up</p>
       <p>Wish List</p>
        <p>Cart</p>
      </input>

      
    </nav> */}
    
    {/* <br></br> */}
     <Navbar bg="light" variant="light"  >
        <Container className='demo'>
        <LinkContainer to="/eyeglasses"><Nav.Link>EYEGLASSES</Nav.Link></LinkContainer>
        <LinkContainer to="/sunglasses"><Nav.Link>SUNGLASSES</Nav.Link></LinkContainer>
        <LinkContainer to="/computerglasses"><Nav.Link>COMPUTER GLASSES</Nav.Link></LinkContainer>
        <LinkContainer to="/Kidsglasses"><Nav.Link>KIDS GLASSES</Nav.Link></LinkContainer>
        <LinkContainer to="/Contactlenses"><Nav.Link>CONTACT LENSES</Nav.Link></LinkContainer>
        <LinkContainer to="/Homeeyetest"><Nav.Link>HOME EYE-TEST</Nav.Link></LinkContainer>
        <LinkContainer to="/Storelocator"><Nav.Link>STORE LOCATOR</Nav.Link></LinkContainer>

        {/* <Link to="/Sunglasses">SUNGLASSES</Link> */}
          {/* <Nav.Link href="#home">COMPUTER GLASSES</Nav.Link> */}
          {/* <Nav.Link href="#home">KIDS GLASSES</Nav.Link> */}
          {/* <Nav.Link href="#home">CONTACT LENSES</Nav.Link> */}
          {/* <Nav.Link href="#home">HOME EYE-TEST</Nav.Link> */}
          {/* <Nav.Link href="#home">STORE LOCATOR</Nav.Link> */}
      
          
          
          

          
          {/* <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav> */}
          {/* <Button variant="info">3D</Button>{' '} 
          <Button variant="secondary">BLU</Button>{' '}
          <Button variant="dark">GOLD</Button>  */}

          
            
            <Button variant="secondary">3D</Button>{' '} 
          <Button variant="info">BLU</Button>{' '}
          <Button variant="dark">GOLD</Button> 

            
      
        </Container>
      </Navbar>
    </>
  )
}

export default Header