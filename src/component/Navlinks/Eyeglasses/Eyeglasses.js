import React from 'react'
import { Card, Container } from 'react-bootstrap'
import { Row , Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './Eyeglasses.css';
import Button from 'react-bootstrap/Button';

// const EYEGLASSES  () => {
 function Eyeglasses(){
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
        {/* <div className="card" >
          <img src="..\Eyeglass\slider1.jpg" height={200} sizes={30} />
          
        </div> */}
        <div className="card">
           <img src="..\Eyeglass\slider1.jpg" height={200} sizes={30} />
        </div>
        
        <div className="card">
          <img src="..\Eyeglass\slider1i2.jpg" height={200} sizes={30}/>
          
        </div>
        <div className="card">
          <img src="..\Eyeglass\slider1i3.jpg" height={200} sizes={30} />
          
        </div>
         <div className="card">
          <img src="..\Eyeglass\slider1i4.jpg" height={200} sizes={30} />
          
        </div>
      </Carousel>
      
      <br></br>
      <br></br>
      <div align="center"><Button variant="outline-info"><b>VIEW RANGE</b></Button>{' '}</div>
      
      <hr></hr>
      
    <br></br>
     
      <p align="center" style={{ fontSize: 26 }} ><b>BEST SELLERS STARTING AT RS.1199</b></p>
      <h6 align="center">Buy 1 Get 1 Free with Free Upgrade to 2 Years Gold Membership at R̶s̶.̶1̶2̶0̶0̶ Rs.600</h6>
      
      <br></br>
      <Carousel responsive={responsive} className="slider" >
        <div className="card">
           <img src="..\Eyeglass\slider2.jpg" height={200} sizes={30} />
        </div>
        
        <div className="card">
          <img src="..\Eyeglass\slider2i2.jpg" height={200} sizes={30}/>
          
        </div>
        <div className="card">
          <img src="..\Eyeglass\slider2i4.jpg" height={200} sizes={30} />
          
        </div>
         <div className="card">
          <img src="..\Eyeglass\slider2i3.jpg" height={200} sizes={30} />
          
        </div>
      </Carousel>
      {/* </Container> */}
      <br></br>
      <br></br>
      <div align="center"><Button variant="outline-info"><b>VIEW RANGE</b></Button>{' '}</div>
      
      <hr></hr>
      
    <br></br>
      {/* <Container> */}
      <p align="center" style={{ fontSize: 26 }} ><b>NEW ARRIVALS STARTING AT RS.1199</b></p>
      <h6 align="center">Buy 1 Get 1 Free with Free Upgrade to 2 Years Gold Membership at R̶s̶.̶1̶2̶0̶0̶ Rs.600</h6>
      <br></br>
      <Carousel responsive={responsive} className="slider" >
        {/* <div className="card" >
          <img src="..\Eyeglass\slider1.jpg" height={200} sizes={30} />
          
        </div> */}
        <div className="card">
           <img src="..\Eyeglass\slider3.jpg" height={200} sizes={30} />
        </div>
        
        <div className="card">
          <img src="..\Eyeglass\slider3i2.jpg" height={200} sizes={30}/>
          
        </div>
        <div className="card">
          <img src="..\Eyeglass\slider3i3.jpg" height={200} sizes={30} />
          
        </div>
         <div className="card">
          <img src="..\Eyeglass\slider3i4.jpg" height={200} sizes={30} />
          
        </div>
      </Carousel>
      {/* </Container> */}
      <br></br>
      <br></br>
      <div align="center"><Button variant="outline-info"><b>VIEW RANGE</b></Button>{' '}</div>
      
      <hr></hr>
      
    <br></br>
      {/* <Container> */}
      <p align="center" style={{ fontSize: 26 }} ><b>COMPUTER GLASSES STARTING AT RS.1199</b></p>
      <h6 align="center">Buy 1 Get 1 Free </h6>
      <br></br>
      <Carousel responsive={responsive} className="slider" >
        <div className="card">
           <img src="..\Eyeglass\slider4.jpg" height={200} sizes={30} />
        </div>
        
        <div className="card">
          <img src="..\Eyeglass\slider4i2.jpg" height={200} sizes={30}/>
          
        </div>
        <div className="card">
          <img src="..\Eyeglass\slider4i4.jpg" height={200} sizes={30} />
          
        </div>
         <div className="card">
          <img src="..\Eyeglass\slider4i3.jpg" height={200} sizes={30} />
          
        </div>
      </Carousel>
      {/* </Container> */}
      <br></br>
      <br></br>
      <div align="center"><Button variant="outline-info"><b>VIEW RANGE</b></Button>{' '}</div>
      
      <hr></hr>
      
    <br></br>
      {/* <Container> */}
      <p align="center" style={{ fontSize: 26 }} ><b>FLOAT POP STARTING AT RS.1199</b></p>
      <h6 align="center">Buy 1 Get 1 Free with Free Upgrade to 2 Years Gold Membership at R̶s̶.̶1̶2̶0̶0̶ Rs.600 </h6>
      <br></br>
      <Carousel responsive={responsive} className="slider" >
        <div className="card">
           <img src="..\Eyeglass\slider5.jpg" height={200} sizes={30} />
        </div>
        
        <div className="card">
          <img src="..\Eyeglass\slider5i2.jpg" height={200} sizes={30}/>
          
        </div>
        <div className="card">
          <img src="..\Eyeglass\slider5i3.jpg" height={200} sizes={30} />
          
        </div>
         <div className="card">
          <img src="..\Eyeglass\slider5i4.jpg" height={200} sizes={30} />
          
        </div>
      </Carousel>
      {/* </Container> */}
      <br></br>
      <br></br>
      <div align="center"><Button variant="outline-info"><b>VIEW RANGE</b></Button>{' '}</div>
      <br></br>
      
      
      
    
    </>
  )
}

export default Eyeglasses
