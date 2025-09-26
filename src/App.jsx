import React from "react";
import { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Works from "./components/Works/Works";
import Skills from "./components/Skills/Skills";
import Certificates from "./components/Certificates/Certificates";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import LoadingScreen from "./components/Utils/LoadingScreen";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2s splash screen

    return () => clearTimeout(timer); // cleanup
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <div className="app-container">
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
  );
}

export default App;
