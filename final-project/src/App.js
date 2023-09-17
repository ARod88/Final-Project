import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer';
import SignUp from './components/SignUp';



function App() {
  return (
    <div className='App'>
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<h1>Home</h1>}/>
        <Route path='/about' element={<h1>About</h1>}/>
        <Route path='/gallery' element={<h1>Gallery</h1>}/>
        <Route path='/product' element={<h1>Gallery Product</h1>}/>
        <Route path='/contact'element={<h1>Contact Us</h1>}/>
        <Route path='/logout' element={<h1>Logout</h1>}/>
        <Route path='/profile' element={<h1>Profile</h1>}/>
        <Route path='/signup' element={<SignUp />}/>
      </Routes>
      </BrowserRouter>
      <Footer />
      
    </div>
    
  );
}

export default App;
