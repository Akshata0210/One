import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Header.css';


const Header = () => {
  return (
    <>
     <Navbar bg="light" variant="light" >
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
     <Navbar bg="light" variant="light" >
        <Container className='demo'>
         <Nav.Link href="#home">EYEGLASSES</Nav.Link>
          <Nav.Link href="#home">COMPUTER GLASSES</Nav.Link>
          <Nav.Link href="#home">KIDS GLASSES</Nav.Link>
          <Nav.Link href="#home">CONTACT LENSES</Nav.Link>
          <Nav.Link href="#home">SUNGLASSES</Nav.Link>
          <Nav.Link href="#home">HOME EYE-TEST</Nav.Link>
          <Nav.Link href="#home">STORE LOCATOR</Nav.Link>
      
          
          
          

          
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