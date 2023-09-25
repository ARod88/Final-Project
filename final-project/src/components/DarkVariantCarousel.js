import Carousel from 'react-bootstrap/Carousel';

const carouselStyle = {
  backgroundColor:'rgba(0, 0, 0, 0.8)',
  width: '50%',
  margin: '0 auto'
}

function DarkVariantExample() {
  return (
    <div style={carouselStyle}>
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <div className='d-flex align-items-center justify-content-center'>
        <img
          className="d-block w-100"
          src="./images/hellokittyjpg.jpg"
          alt="First slide"
          style={{ maxWidth: '400px', maxHeight:'400px'}}
        />
        </div>
        <Carousel.Caption>
          <h5 className='captiontitle'>Hello Kitty</h5>
          
        </Carousel.Caption>
    
      </Carousel.Item>
      <Carousel.Item>
      <div className='d-flex align-items-center justify-content-center'>
    <img
      className="d-block w-100"
      src="./images/viking.jpg"
      alt="Second slide"
      style={{ maxWidth: '400px', maxHeight: '400px' }}
    />
  </div>
        <Carousel.Caption>
          <h5 className='captiontitle'>The Viking</h5>
          <p className='caption'>Sizes starting from 2x2</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <div className='d-flex align-items-center justify-content-center'>
    <img
      className="d-block w-100"
      src="./images/chickrug.jpg"
      alt="Third slide"
      style={{ maxWidth: '400px', maxHeight: '400px' }}
    />
  </div>
        <Carousel.Caption>
          <h5 className='captiontitle'>The Chick</h5>
          <p className='caption'>
            Up to 5x5
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <div className='d-flex align-items-center justify-content-center'>
    <img
      className="d-block w-100"
      src="./images/varietyrug.jpg"
      alt="Fourth slide"
      style={{ maxWidth: '400px', maxHeight: '400px' }}
    />
  </div>
        <Carousel.Caption>
        <h5 className='captiontitle'></h5>
          <p className='caption'>
            And anything in between
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      
    </Carousel>
    </div>
  );
}

export default DarkVariantExample;