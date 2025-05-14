import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Hero2 from "./components/Hero2";
import Hero3 from "./components/Hero3";
import Hero4 from "./components/Hero4";
import Footer from "./components/Footer";
import BookNow from "./components/Signup";
import Stor from "./components/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <main>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Hero2/>
              <Hero3/>
              <Hero4/>
             <Footer />
            </>
          } />
          <Route path="/sign" element={<BookNow />} />
          <Route path="/login" element={<Stor />} />
        </Routes>
        
       
      </BrowserRouter>
    </main>
  );
};

export default App;