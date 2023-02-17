import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import { Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';

import './Home.css';


const Home = () => {
  return (
    <>
    <br></br>
   <Container className='demo' > 
      <div className='sample' margin-left='10px' width='20px'>
      <Row>
      
      <Col sm>  <Card>
        <Card.Img variant="top" src="i5.jpg" width= '30px'
        height='90px' />
        Eyeglasses
        
      </Card></Col>
      <Col sm>  <Card>
        <Card.Img variant="top" src="i2.jpg" width= '30px'
        height='90px' />
        Sunglasses
        
      </Card></Col>
      <Col sm>  <Card>
        <Card.Img variant="top" src="i4.jpg" width= '30px'
        height='90px' />
        Computer Glasses
        
      </Card></Col>
      <Col sm>  <Card>
        <Card.Img variant="top" src="i6.jpg" width= '30px'
        height='90px' />
        Contact Lenses
        
      </Card></Col>
      <Col sm>  <Card>
        <Card.Img variant="top" src="i7.jpg" width= '20px'
        height='90px' />
       Power Sunglasses
      </Card></Col>
        

        <Col sm><Card>
        <Card.Img variant="top" src="i8.jpg" width= '20px'
        height='90px' />
        Progressive Lenses
      </Card></Col>
     
      </Row>
      </div>
      </Container> 
      
        <br></br>
      <Carousel fade>
    
    <Carousel.Item>
      

      
      <img 
        className="m1"
        class="center"
        width= '1399px'
        height='400px'
        
        
        src="i11.jpg"
        alt="first slide"
     /> 
     </Carousel.Item>
     

    </Carousel>

    <br></br>
<br></br>
       <img 
        className="m1"
        class="center"
        width= '1349px'
        height='200px'
        src="i40.jpg"
        alt="first slide"
     /> 
    
     <br></br>
     <br></br>
    
   <Container className='demo' > 
   <Row>
   
   <Col sm>
   <Card border="light" style={{ width: '12rem' }}>
    
      <Card.Body>
        <br></br>
        <br></br>
        <h2><b>WEAR THE TREND</b></h2>
        <p>Our hottest collections</p>
           
       
      </Card.Body>
    </Card>
    </Col>
    
    
    <Col sm>  <Card border="light" align="center">
        <Card.Img variant="top" src="i18.jpg" width= '30px'
        height='100px' />
        Blend Edit
        <div>
          <br></br>
        <Button variant="primary" size="sm">Explore</Button>
          <br></br>
        </div>
        </Card>
    </Col> 
    <Col sm>  <Card border="light" align="center">
        <Card.Img variant="top" src="i26.jpg" width= '30px'
        height='100px' />
        Air Flex
        <div>
          <br></br>
        <Button variant="primary" size="sm">Explore</Button>
          <br></br>
        </div>
        </Card>
    </Col> 

    <Col sm>  <Card border="light" align="center">
        <Card.Img variant="top" src="i25.jpg" width= '30px'
        height='100px' />
        Round
        <div>
          <br></br>
        <Button variant="primary" size="sm">Explore</Button>
          <br></br>
        </div>
        </Card>
    </Col> 

    <Col sm>  <Card border="light" align="center">
        <Card.Img variant="top" src="i29.jpg" width= '30px'
        height='100px' />
        Transparent
        <div>
          <br></br>
        <Button variant="primary" size="sm">Explore</Button>
          <br></br>
        </div>
        </Card>
    </Col> 
    

    
    </Row>
    </Container>
    <br></br>
      <br></br>
      <h4><span>Trending Sunglasses</span></h4> 
      <br></br>
      <img 
        className="m1"
        class="center"
        width= '1350px'
        height='280px'
        
        
        src="i41.jpg"
        alt="first slide"
     /> 
     
      <br></br>
      <br></br>
      <br></br>
      <h4><span>Aquacolor - Glam Up With Color Lenses</span></h4> 
      <br></br>
      <img 
        className="m1"
        class="center"
        width= '1350px'
        height='320px'
        
        
        src="i10.jpg"
        alt="first slide"
     /> 
    {/* <br></br>
     <br></br>
     <br></br>
     <Container>
      <Row className="align-items-center">
        <Col sm={12} lg={6}>
          <Img src="i29.jpg" fluid />
        </Col>
        <Col sm={12} lg={6}>
          <div className="text-center">
            <h1>Your Text</h1>
            <p>
              Add additional text here if desired.
            </p>
          </div>
        </Col>
      </Row>
    </Container> */}


     <br></br>
     <br></br>
     <br></br>
     <Container>
     <div>
     <h3><span>EYEGLASSES </span></h3>
     <hr></hr> 
    
     <Container>
      
     <br></br>
      <br></br>
      <h4><span>CONTACT LENSES & MORE</span></h4> 
      <br></br>

     <Row xs={1} md={2} className="g-4">
      {/* {Array.from({ length: 2 }).map((_, idx) => ( */}
        <Col>
          <Card>
            <Card.Img variant="top" src="i36.jpg" />
           
          </Card>
        </Col>

      {/* ))} */}
      <Col>
          <Card>
            <Card.Img variant="top" src="i37.jpg" />
           
          </Card>
        </Col>
    </Row>
    </Container>
     </div>
     </Container> 
     
     {/* <Container>
     <br></br>
      <br></br>
      <h4><span>BUY IT YOUR WAY</span></h4> 
      <br></br>
     <Row xs={1} md={2} className="g-4">
      {/* {Array.from({ length: 2 }).map((_, idx) => ( */}
        {/* <Col>
          <Card>
            <Card.Img variant="top" src="i36.jpg" />
           
          </Card>
        </Col>  */}

      {/* ))} */}
      {/* <Col>
          <Card>
            <Card.Img variant="top" src="i37.jpg" />
           
          </Card>
        </Col>
    </Row>
    </Container> */}

      <br></br>
      <br></br>
      <h4><span>Our Brands</span></h4>
      <br></br>
       <img 
        className="m1"
        class="center"
        width= '1350px'
        height='210px'
        
        
        src="i12.jpg"
        alt="first slide"
     /> 
     <br></br>
     <br></br>
     <br></br>
     <Container>
     
     <h5>EYEGLASSES</h5>
     <hr></hr> 
    </Container>

<br></br>
<br></br>
       <img 
        className="m1"
        class="center"
        width= '1350px'
        height='210px'
        
        
        src="i13.jpg"
        alt="first slide"
     /> 
<br></br>
     <br></br>
     <br></br>
     <Container>
     
     <h5>EYEGLASSES</h5>
     <hr></hr> 
    </Container>
    
    

<br></br>
<br></br>
       <img 
        className="m1"
        class="center"
        width= '1350px'
        height='210px'
        src="i43.jpg"
        alt="first slide"
     /> 
    <br></br>
     <br></br>
     <br></br>
     <Container>
     
     <h5>EYEGLASSES</h5>
     <hr></hr> 
    </Container>
    
    
    

<br></br>
<br></br>
       <img 
        className="m1"
        class="center"
        width= '1350px'
        height='210px'
        
        
        src="i35.png"
        alt="first slide"
     /> 
     <br></br>
     <br></br>
     <br></br>
     <Container>
     
     <h5>CONTACT LENSES</h5>
     <hr></hr> 
    </Container>
    
    {/* <br></br>
     <br></br>
     <Container>
     
     <h5>CONTACT LENSES</h5>
     <hr></hr> 
    </Container> */}

    
    </>
  )
}

export default Home
