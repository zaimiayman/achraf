import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import WhyUs from "./components/WhyUs";
import Review from "./components/Review";
import Contacte from "./components/Contacte";
import Footer from "./components/Footer";
import BookNow from "./components/BookNow";
import Stor from "./components/Stor";
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
              <Services />
              <WhyUs />
              <Review />
              <Contacte />
            </>
          } />
          <Route path="/book-now" element={<BookNow />} />
          <Route path="/store" element={<Stor />} />
        </Routes>
        
        <Footer />
      </BrowserRouter>
    </main>
  );
};

export default App;