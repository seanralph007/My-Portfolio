import React from 'react'
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Works from './components/Works/Works';
import Skills from './components/Skills/Skills';
import Certificates from './components/Certificates/Certificates';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './App.css'
import { BrowserRouter as Router} from "react-router-dom";
// import Login from './pages/login';
// import SignUp from './pages/SignUp';
// import Home from './pages/Home';
// import Rides from './pages/Rides';

function App() {

  return (
      <div className='app-container'>
        <Header />
        <Hero />
        <About />
        <Works />
        <Skills />
        <Certificates />
        <Contact />
        <Footer />
        {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/login' element={<Login />}/>
          <Route path='/sign-up' element={<SignUp />}/>
          <Route path='/rides' element={<Rides />}/>
        </Routes>         */}
      </div>
  )
}

export default App