import Home from './components/Home'
import About from './components/About'
import Gallery from './components/Gallery'
import './App.css';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar';
import "bootstrap/dist/css/bootstrap.min.css"





function App() {
  return (
    <div className="App">
         <Router>
        <header>
        
          <NavBar/>
          {/* <Container>
            <Nav defaultActiveKey="/" variant="tabs" fill>
              <Nav.Item>
                <Link to="/">
                  <Nav.Link href="/">
                    Home 
                  </Nav.Link>
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="/about">
                  <Nav.Link href="/about" eventKey={"aboutPage"}>
                    About Us
                  </Nav.Link>
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="/Gallery">
                  <Nav.Link href="/gallery" eventKey={"galleryPage"}>
                    Rug Gallery
                  </Nav.Link>
                </Link>
              </Nav.Item>
            </Nav>
          </Container> */}
        </header>
        <div className="display">
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/gallery" element={<Gallery packages={Gallery} />}/>
          </Routes>
        </div>
      </Router>

      
     
    </div>
  );
}

export default App;
