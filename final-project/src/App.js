import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
// import Home from './components/Home'
// import About from './components/About'
// import Gallery from './components/Gallery'
// import ContactUs from './components/ContactUs';
import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// import CurrentUserProvider from './components/contexts/CurrentUser'

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
        
      </Routes>
      
      </BrowserRouter>
    </div>
    
  );
}

export default App;
