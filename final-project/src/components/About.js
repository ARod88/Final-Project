import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

const About = () => {
    return(

        <Container className="aboutpage">
            <Container>
                <h1>The Artist</h1>
            </Container>
            <Card border="secondary" style={{ width: '75%', margin: "0 auto"}}>
                <Card.Img variant="top" src="img" alt="" style={{ width: '100%', margin: '0 auto'}} />
                <Card.Body>
                    <Card.Text>
                        Behind the carpetmaker, is a story of an Angelino.
                    </Card.Text>
                    <Card.Text>
                        Sergio Olvera is a local carpetmaker from our very own Los Angeles, Ca. 
                    </Card.Text>
                    <Card.Text>
                        Like every average Angelino, we are always trying to find ways to hustle. 
                    </Card.Text>
                    <Card.Text>
                        He had an idea, set his mind to it, belived in himself, taught himself, and started a custom rug business on Instagram.
                    </Card.Text>
                    
                </Card.Body>
            </Card>
        </Container>

    )
}

export default About