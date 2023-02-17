import React from 'react'
import { Row , Col } from 'react-bootstrap'
import "./Footer.css"

const Footer = () => {
  return (
    <div className='main-footer'>
      <div className='container'>
      <h2>Buy The Best Eyewear From Lenskart</h2>
     <p> A One-Stop Online Solution For Purchasing Eyewear And Its Accessories, lenskart Delivers Them Right At Your Doorstep With Convenient Methods Of Payment. Sunglasses As Well As Eyeglasses Are Available For Men And Women In A Diverse Array Of Styles And Trendy Colours. If You Want To Try Out Contact Lenses, 
        Pick The Ones Of Your Choice From The Extensive Variety Of Coloured Contact Lenses From Our Online Store.</p>
        <div className='row'>
          {/* column1 */}
          <div className='col'>
            <h4>Thicc memes</h4>
            <ul className='list-unstyled'>
              <b><li>Services</li></b>
              <li>Store Locator</li>
              <li>Enter My Power</li>
              <li>Buying Guide</li>
              <li>Frame Size</li>
            </ul>
          </div>
          {/* column2 */}
          <div className='col'>
            <h4>Stuff</h4>
            <ul className='list-unstyled'>
              <li><b>About Us</b></li>
              <li>We Are Hiring</li>
              <li>Refer & Earn</li>
              <li>About Us</li>
              <li>lenskart Coupons</li>
            </ul>
          </div>
          {/* column3 */}
          <div className='col'>
            <h4>Stuff</h4>
            <ul className='list-unstyled'>
              <li><b>Help</b></li>
              <li>HAQ's</li>
              
            </ul>
          </div>
         
          {/* column5 */}
         
          <div className='col'>
            <h4>Stuff</h4>
            <Row>
            <ul className='list-unstyled'>
              <ul>
             <img src="https://static.lenskart.com/media/desktop/img/play-store.svg"></img>
             
             </ul>
            </ul>
            </Row>
          </div>
          {/* column6 */}
          <div className='col'>
            <h4>Column</h4>
            <ul className='list-unstyled'>
            <img src="https://static.lenskart.com/media/desktop/img/app-store.svg"></img>
            </ul>
            
          </div>
        </div>
        
        <hr />
        <div className='row'>
          <p className='col-sm'>
            &copy;{new Date().getFullYear()} Lenskart | All rights reserved | Privacy
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer