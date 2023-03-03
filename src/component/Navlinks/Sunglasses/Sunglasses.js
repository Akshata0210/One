import React from 'react'
import { Card, Container } from 'react-bootstrap'
import { Row , Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './Sunglasses.css';
import Button from 'react-bootstrap/Button';

// const EYEGLASSES  () => {
 function Sunglasses(){
// function App() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  }
  return (
    <>
    
   <div className='title'> 
       {/* <img src="image1.jpg" width={1349}></img> */}
        <Row  >
          <Col sm={4} className="column-left">
          <p></p>
          <h2 align="center" >Cool Styles Hot Deals</h2>
          </Col>
          <Col sm={8} className="column-right">
          <p></p>
          <h2 align="center"><b>BYE ONE GET ONE WITH GOLD MEMBERSHIP</b></h2>
          <p></p>
          </Col>
          
        </Row> 
       </div> 
    <br></br>
      {/* <Container> */}
      <p align="center" style={{ fontSize: 26 }} ><b>EXTRA 60% OFF | VOUCHER: TRYUS</b></p>
      <br></br>
      <Carousel responsive={responsive} className="slider" >
        <div className="card">
           <img src="..\Sunglass\slider1.jpg" height={180} sizes={30} />
        </div>
        
        <div className="card">
          <img src="..\Sunglass\slider1i2.jpg" height={180} sizes={30}/>
          
        </div>
        <div className="card">
          <img src="..\Sunglass\slider1i3.jpg" height={180} sizes={30} />
          
        </div>
         <div className="card">
          <img src="..\Sunglass\slider1i4.jpg" height={180} sizes={30} />
          
        </div>
      </Carousel>
      
      <br></br>
      <br></br>
      <Row>
      <Col ><div align="right"><Button variant="outline-info"><b>VIEW RANGE</b></Button>{' '}</div></Col>
      <Col mt={8}><div align="left" ><Button variant="info"><b>VIEW IN 3D</b></Button>{' '}</div></Col>
      </Row>
      <hr></hr>
      
    <br></br>
     
      <p align="center" style={{ fontSize: 26 }} ><b>BEST SELLERS SUNGLASSES</b></p>
      <p align="center">All time Best Sellers</p>
      <h6 align="center">A great collection of 500+ Sunglasses Buy 1 Get 1 Free with Gold Membership</h6>
      
      <br></br>
      <Carousel responsive={responsive} className="slider" >
        <div className="card">
           <img src="..\Sunglass\slider2.jpg" height={200} sizes={30} />
        </div>
        
        <div className="card">
          <img src="..\Sunglass\slider2i2.jpg" height={200} sizes={30}/>
          
        </div>
        <div className="card">
          <img src="..\Sunglass\slider2i4.jpg" height={200} sizes={30} />
          
        </div>
         <div className="card">
          <img src="..\Sunglass\slider2i3.jpg" height={200} sizes={30} />
          
        </div>
      </Carousel>
      {/* </Container> */}
      <br></br>
      <br></br>
      <Row>
      <Col ><div align="right"><Button variant="outline-info"><b>VIEW RANGE</b></Button>{' '}</div></Col>
      <Col mt={8}><div align="left" ><Button variant="info"><b>VIEW IN 3D</b></Button>{' '}</div></Col>
      </Row>
      
      <hr></hr>
      
    <br></br>
      {/* <Container> */}
      <p align="center" style={{ fontSize: 26 }} ><b>NEW ARRIVALS SUNGLASSES</b></p>
      <p align="center">All New Sunglasses! They’re sure to make those around you go green with envy</p>
      <h6 align="center">A great collection of 100+ Sunglasses Buy 1 Get 1 Free with Gold Membership</h6>
      <br></br>
      <Carousel responsive={responsive} className="slider" >
        <div className="card">
           <img src="..\Sunglass\slider3.jpg" height={200} sizes={30} />
        </div>
        
        <div className="card">
          <img src="..\Sunglass\slider3i2.jpg" height={200} sizes={30}/>
          
        </div>
        <div className="card">
          <img src="..\Sunglass\slider3i3.jpg" height={200} sizes={30} />
          
        </div>
         <div className="card">
          <img src="..\Sunglass\slider3i4.jpg" height={200} sizes={30} />
          
        </div>
      </Carousel>
      {/* </Container> */}
      <br></br>
      <br></br>
      <Row>
      <Col ><div align="right"><Button variant="outline-info"><b>VIEW RANGE</b></Button>{' '}</div></Col>
      <Col mt={8}><div align="left" ><Button variant="info"><b>VIEW IN 3D</b></Button>{' '}</div></Col>
      </Row>
      
      <hr></hr>
      
    <br></br>
      {/* <Container> */}
      <p align="center" style={{ fontSize: 26 }} ><b>REFLECTOR SUNGLASSES</b></p>
      <p align="center">Mirror Mirror! A sure way to reflect in style.</p>
      <h6 align="center">A great collection of 200+ Sunglasses Buy 1 Get 1 Free with Gold Membership</h6>
      <br></br>
      <Carousel responsive={responsive} className="slider" >
        <div className="card">
           <img src="..\Sunglass\slider4i2.jpg" height={200} sizes={30} />
        </div>
        
        <div className="card">
          <img src="..\Sunglass\slider4.jpg" height={200} sizes={30}/>
          
        </div>
        <div className="card">
          <img src="..\Sunglass\slider4i4.jpg" height={200} sizes={30} />
          
        </div>
         <div className="card">
          <img src="..\Sunglass\slider4i3.jpg" height={200} sizes={30} />
          
        </div>
      </Carousel>
      {/* </Container> */}
      <br></br>
      <br></br>
      <Row>
      <Col ><div align="right"><Button variant="outline-info"><b>VIEW RANGE</b></Button>{' '}</div></Col>
      <Col mt={8}><div align="left" ><Button variant="info"><b>VIEW IN 3D</b></Button>{' '}</div></Col>
      </Row>
      
      <hr></hr>
      
    <br></br>
      {/* <Container> */}
      <p align="center" style={{ fontSize: 26 }} ><b>SPORTS SUNGLASSES</b></p>
      <p align="center">Bring out the Sports man in you!</p>
      <h6 align="center">A great collection of 70+ Sunglasses Buy 1 Get 1 Free with Gold Membership</h6>
      <br></br>
      <Carousel responsive={responsive} className="slider" >
        <div className="card">
           <img src="..\Sunglass\slider5.jpg" height={200} sizes={30} />
        </div>
        
        <div className="card">
          <img src="..\Sunglass\slider5i2.jpg" height={200} sizes={30}/>
          
        </div>
        <div className="card">
          <img src="..\Sunglass\slider5i3.jpg" height={200} sizes={30} />
          
        </div>
         <div className="card">
          <img src="..\Sunglass\slider5i4.jpg" height={200} sizes={30} />
          
        </div>
      </Carousel>
      {/* </Container> */}
      <br></br>
      <br></br>
      <Row>
      <Col ><div align="right"><Button variant="outline-info"><b>VIEW RANGE</b></Button>{' '}</div></Col>
      <Col mt={8}><div align="left" ><Button variant="info"><b>VIEW IN 3D</b></Button>{' '}</div></Col>
      </Row>
      <br></br>
    
    </>
  )
}

export default Sunglasses

