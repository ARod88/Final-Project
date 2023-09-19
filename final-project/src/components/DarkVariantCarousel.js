import Carousel from 'react-bootstrap/Carousel';

function DarkVariantExample() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <div className='d-flex align-items-center justify-content-center'>
        <img
          className="d-block w-100"
          src="./images/toadrug.jpg"
          alt="First slide"
          style={{ maxWidth: '400px', maxHeight:'400px'}}
        />
        </div>
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
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
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <div className='d-flex align-items-center justify-content-center'>
    <img
      className="d-block w-100"
      src="./images/dodger.jpg"
      alt="Third slide"
      style={{ maxWidth: '400px', maxHeight: '400px' }}
    />
  </div>
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default DarkVariantExample;