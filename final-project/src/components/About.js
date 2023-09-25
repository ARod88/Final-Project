import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const About = () => {
    return (
        <Container className="aboutpage">
            <Container>
                <h1 className='artist'>The Artist</h1>
            </Container>
            <Card border="secondary" style={{ width: '75%', margin: 'auto' }}>
                <Row>
                    <Col md={4}> 
                        <Card.Img variant="top" src="./images/sergio.jpg" alt="" />
                    </Col>
                    <Col md={8}> 
                        <Card.Body>
                            <Card.Text>
                                Behind the creater of the custom rugs, is a story of an Angelino.
                            </Card.Text>
                            <Card.Text>
                                Sergio Olvera is a local carpetmaker from our very own Los Angeles, CA.
                            </Card.Text>
                            <Card.Text>
                                Like every average Angelino, we are always trying to find ways to hustle.
                            </Card.Text>
                            <Card.Text>
                                He had an idea, set his mind to it, believed in himself, taught himself how to tuft rugs, and started a custom rug business on Instagram.
                            </Card.Text>
                        </Card.Body>
                    </Col>
                </Row>
            </Card>
        </Container>
    );
}

export default About;
