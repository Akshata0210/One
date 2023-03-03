import React from 'react'
import { Container } from 'react-bootstrap'

import { Row , Col } from 'react-bootstrap'

const Computerglasses = () => {
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
        <div className='sample' margin-left='5px' width="100%">
        <Row>
          <Col sm={3} >
            <p><b>FRAME TYPE</b></p>
            <div>

            </div>
          </Col>

          
          <Col sm={8}>
            <Row>
          <Col >
            <p>ALL COMPUTER GLASSES</p>
          </Col >
          <Col align="center">
            <p>VIEW FRAMES</p>
          </Col>
          <Col align="right">
          <p>SORT BY</p>
          </Col>
          </Row>
          </Col>
        </Row>
        </div>
    </>
  )
}

export default Computerglasses
