import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import './Slider.css'
function Homeslider4() {
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
      
      <Carousel responsive={responsive}>
        {/* <div className="card">
          <img src="logo192.png" />
          <h2>asdf</h2>
        </div>
        <div className="card">
          <img src="logo192.png" />
          <h2>asdf</h2>
        </div> */}
        {/* <div className="card">
          <img src="logo192.png" />
          <h2>asdf</h2>
        </div>
         <div className="card">
        /  <img src="logo192.png" />
        //   <h2>asdf</h2>
        // </div>
        // <div className="card">
        //   <img src="logo192.png" />
        //   <h2>asdf</h2>
        // </div> */}
        <div className="card-slider" >
          <img src="Homeslider5.jpg" height={180} />
         
        </div>
        <div className="card-slider">
          <img src="Homeslider5i2.jpg" height={180} sizes={30}/>
         
        </div>
        <div className="card-slider">
          <img src="Homeslider5i3.jpg" height={180} sizes={30}/>
         
        </div>
        <div className="card-slider">
          <img src="Homeslider5i4.jpg" height={180} sizes={30}/>
         
        </div>
        <div className="card-slider">
          <img src="Homeslider5i5.jpg" height={180} sizes={30}/>
         
        </div>
        {/* <div className="card-slider" >
          <img src="i2.jpg" height={180} sizes={30}/>
          
        </div>
        <div className="card-slider">
          <img src="logo192.png" height={180} sizes={30}/>
          
        </div> */}
      </Carousel>


      
    </>
  )
}

export default Homeslider4