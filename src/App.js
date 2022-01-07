import React from "react";
import GlobalStyle from "./components/GlobalStyle";
import Nav from "./components/Nav";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";
import { Route, Routes } from 'react-router-dom'
import MovieDetail from "./pages/MovieDetail";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Routes>
        <Route path='/' exact element={<AboutUs />} />
        <Route path='/work' element={<OurWork />} />
        <Route path='/contact' element={<ContactUs />} />
        <Route path='/work/:id' exact element={<MovieDetail />} />
      </Routes>
    </div>
  );
}

export default App;
