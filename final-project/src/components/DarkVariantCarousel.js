import Carousel from 'react-bootstrap/Carousel';

function DarkVariantExample() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <div className='d-flex align-items-center justify-content-center'>
        <img
          className="d-block w-100"
          src="./images/sergio.jpg"
          alt="First slide"
          style={{ maxWidth: '400px', maxHeight:'400px'}}
        />
        </div>
    
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
          <h5 className='captiontitle'>Custom Rug</h5>
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
          <h5 className='captiontitle'>Custom Rug</h5>
          <p className='caption'>
            Up to 5x5
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default DarkVariantExample;