import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import { Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Cardslider from '../Cardslider/Cardslider';
import Homeslider1 from '../Cardslider/Homeslider1';
import Homeslider2 from '../Cardslider/Homeslider2';
import Homeslider3 from '../Cardslider/Homeslider3';
import Homeslider4 from '../Cardslider/Homeslider4';
import Homeslider5 from '../Cardslider/Homeslider5';
import Homeslider6 from '../Cardslider/Homeslider6';
// import Slider from './Sliderr/Slider';

// import { Button, Dropdown } from 'antd';
// import { Splide, SplideSlide } from '@splidejs/react-splide';

import './Home.css';

const Home = () => {

  return (
    <> 
    <div>
      <br></br>
      {/* <Container className='demo'>  */}

      <div className='sample' margin-left='10px' width='20px' align="center">
        <Row>

          <Col sm>  <Card >
            <Card.Img variant="top" src="i5.jpg" width='20px'
              height='130px' />
            Eyeglasses

          </Card></Col>

          <Col sm>  <Card>
            <Card.Img variant="top" src="i2.jpg" width='20px'
              height='130px' />
            Sunglasses

          </Card></Col>
          <Col sm>  <Card>
            <Card.Img variant="top" src="i4.jpg" width='20px'
              height='130px' />
            Computer Glasses

          </Card></Col>
          <Col sm>  <Card>
            <Card.Img variant="top" src="i6.jpg" width='20px'
              height='130px' />
            Contact Lenses

          </Card></Col>
          <Col sm>  <Card>
            <Card.Img variant="top" src="i7.jpg" width='20px'
              height='130px' />
            Power Sunglasses
          </Card></Col>


          <Col sm><Card>
            <Card.Img variant="top" src="i8.jpg" width='20px'
              height='130px' />
            Progressive Lenses
          </Card></Col>

        </Row>
      </div>
      {/* </Container>  */}
      </div>
      <br></br>
      <Carousel fade>

        <Carousel.Item>



          <img
            className="m1"
            class="center"
            width='1399px'
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
        width='1349px'
        height='200px'
        src="i40.jpg"
        alt="first slide"
      />
      <br></br>
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
            <Card.Img variant="top" src="i18.jpg" width='30px'
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
            <Card.Img variant="top" src="i26.jpg" width='30px'
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
            <Card.Img variant="top" src="i25.jpg" width='30px'
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
            <Card.Img variant="top" src="i29.jpg" width='30px'
              height='100px' />
            Transparent
            <div>
              <br></br>
              <Button variant="primary" size="sm">Explore</Button>
              <br></br>
            </div>
          </Card>
          </Col>

          <Container>
            <br></br>
            <br></br>
            <h4><span>As Seen on Shark Tank</span></h4>
            <br></br>
          </Container>
          <img
            className="m1"
            class="center"
            width='1348px'
            height='330px'


            src="i44.jpg"
            alt="first slide"
          />
          <br></br>

        </Row>
      </Container>
      <Container>
        <br></br>
        <br></br>
        <h4><span>Trending Sunglasses</span></h4>
        <br></br>
      </Container>
      <img
        className="m1"
        class="center"
        width='1348px'
        height='280px'


        src="i41.jpg"
        alt="first slide"
      />
      <Container>
        <br></br>
        <br></br>
        <br></br>
        <h4><span>Aquacolor - Glam Up With Color Lenses</span></h4>
        <br></br>
      </Container>
      <img
        className="m1"
        class="center"
        width='1348px'
        height='320px'


        src="i10.jpg"
        alt="first slide"
      />
      <Container>
        <br></br>
        <br></br>
        <br></br>
        <h4><span>FIND THE PERFECT FIT</span></h4>
        <br></br>
      </Container>
      <Container>
        <Row>
          <Col gap={0} className="col-md-6 mx-auto" ><img src="Perfectfit1.jpg" width="560px" height="596px"></img></Col>
          
          <Col  >
          <Row className='mt-2'><img src="Perfectfit2.jpg" width="100px" height={290}></img></Row>
          
          <Row className='mt-2'><img src="Perfectfit3.jpg" width="100px" height={290}></img></Row>
          
          
          </Col>
          
          
        </Row>
        
        <Row className='mt-2'>
          <Col gap={0} className="col-md-6 mx-auto" ><img src="Perfectfit4.jpg" width="560px"></img></Col>
          
          <Col className='mt-0'><img src="Perfectfit5.jpg" width="545px" height={318}></img></Col>
        </Row>

      </Container>
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
      {/* <Container>
     <br></br>
      <br></br>
      <h4><span>FIND THE PERFECT FIT</span></h4> 
      <br></br> */}

      {/* <Row xs={1} md={2} className="g-4"> */}
      {/* {Array.from({ length: 2 }).map((_, idx) => ( */}
      {/* <Col>
          <Card>
            <Card.Img variant="top" src="i45.jpg"  style={{width:'100%'}} height={640}  />
           
          </Card>
        </Col> */}

      {/* ))} */}
      {/* <div>
      <Col>
     
          <Card >
            <Card.Img variant="top" src="i46.jpg" />
           
          </Card>
        </Col>
        
      
          <Card class="mt-2">
            <Card.Img  src="i47.jpg" height={322}/>
           
          </Card>
         
        

        </div> 
    </Row>
    <Row xs={1} md={2} className="g-4">
        <Col>
          <Card class="mt-2">
            <Card.Img variant="top" src="i48.jpg" />
           
          </Card>
        </Col>
      <Col>
          <Card class="mt-2">
            <Card.Img variant="top" src="i49.jpg" />
           
          </Card>
        </Col>
    </Row> 
    </Container> */}
     <Container>
        <br></br>
        <br></br>
        <br></br>
        <h4><span>INTRODUCING OJOS Wear - SUBSCRIBE & SAVE</span></h4>
        <br></br>
      </Container>
      <Container>
      <img
        className="m1"
        class="center"
        width='1120px'
        height='320px'


        src="Ojos.jpg"
        alt="first slide"
      />
      </Container>

     
      {/* <div align="center" width={60}><Cardslider /></div> */}
      <Container>
        <br></br>
        <br></br>
        <h4><span>CONTACT LENSES & MORE</span></h4>
        <br></br>

        <Row xs={1} md={2} className="g-4">
          {/* {Array.from({ length: 2 }).map((_, idx) => ( */}
          <Col>
            <Card.Link href="#">
              <Card.Img variant="top" src="i36.jpg" />

            </Card.Link>
          </Col>

          {/* ))} */}
          <Col>
            <Card.Link >
              <Card.Img variant="top" src="i37.jpg" />

            </Card.Link>
          </Col>
        </Row>
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
      <Container>
        <br></br>
        <br></br>
        <h4><span>Our Brands</span></h4>
        <br></br>
      </Container>
      <img
        className="m1"
        class="center"
        width='1348px'
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
        <div align="center" width={100}><Cardslider /></div>
      </Container>

      <Container>
         <br></br>
        <h5>SUNGLASSES</h5>
        <hr></hr>
        <div align="center" width={100}><Homeslider4 /></div>
      </Container>




      <br></br>
      <br></br>
      <img
        className="m1"
        class="center"
        width='1348px'
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
        <div align="center" width={100}><Homeslider3 /></div>
      </Container>



      <br></br>
      <br></br>
      <img
        className="m1"
        class="center"
        width='1348px'
        height='250px'
        src="i43.jpg"
        alt="first slide"
      />
      <br></br>
      <br></br>
      <br></br>
      <Container>

        <h5>EYEGLASSES</h5>
        <hr></hr>
        <div align="center" width={100}><Homeslider2 /></div>
      </Container>

      <br></br>
      <br></br>
      <img
        className="m1"
        class="center"
        width='1348px'
        height='250px'
        src="Hooper.jpg"
        alt="first slide"
      />
      <br></br>
      <br></br>
      <br></br>
      <Container>

        <h5>WITH POWER COMPUTER BLU LENSES</h5>
        <hr></hr>
        <div align="center" width={100}><Homeslider5 /></div>
      </Container>
      <Container>
         <br></br>
        <h5>WITH ZERO POWER COMPUTER BLU LENSES</h5>
        <hr></hr>
        <div align="center" width={100}><Homeslider6 /></div>
      </Container>

      <br></br>
      <br></br>
      <img
        className="m1"
        class="center"
        width='1348px'
        height='210px'


        src="i35.png"
        alt="first slide"
      />
      <br></br>
      <br></br>
      <br></br>
      <Container>
        <h5>CONTACT LENSES   
         <Link href="#" text-align="center">Card Link</Link> </h5>
        
        <hr></hr>
        {/* <div align="center" size="100px"><Cardslider/></div> */}
        <div align="center" width={100}><Homeslider1 /></div>
        
      </Container>
      
      <br></br>

      {/* <div>
      <Slider/>
    </div> */}

    </>
  )
}

export default Home
