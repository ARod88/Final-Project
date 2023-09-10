import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

export default function About () {
    return (
        <Container className="aboutpage">
            <Container>
                <h1>The Artist</h1>
            </Container>
            <Card border="secondary" style={{ width: '75%', margin: "0 auto"}}>
                <Card.Img variant="top" src="hotsprings.jpg" alt="hotsprings" style={{ width: '100%', margin: '0 auto'}} />
                <Card.Body>
                    <Card.Text>
                        When returning from a spritual journey through the Earth, Monty McMansions decided to dedicate some of his fortune to offering spritiual wellness for others back in his hometown.
                    </Card.Text>
                    <Card.Text>
                        As the heir of the industrious McMansions fortune, Monty was never satisfied with the material wealth that provided him everything he desired.
                    </Card.Text>
                    <Card.Text>
                        Monty decided to travel around the world to find peace and happiness
                    </Card.Text>
                    <Card.Text>
                        Upon his return, he dedicated about 1% of his wealth to open this Mineral SPA to bring joy and spiritual happiness to others
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>
    )
}

