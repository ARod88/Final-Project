import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Footer from './components/Footer';
import SignUp from './components/SignUp';
import ContactUs from './components/ContactUs';
import Login from './components/Login';
import Gallery from './components/Gallery';
import 'bootstrap/dist/css/bootstrap.min.css';
import blackandwhite from './components/images/blackandwhite.jpg';


function App() {
  return (
    <div className='App' style={{ backgroundImage: `url(${blackandwhite})`}}>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route
            path='/api/products'
            element={
              
                <Gallery />
              
            }
          />
          
          <Route path='/logout' element={<h1>Logout</h1>} />
          <Route path='/contact' element={<ContactUs />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
