import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Home  from "./components/Home";
import Navbar from "./components/Navbar";
import { useState } from "react";
import Checkout from "./components/Checkout";
const App = () => {

   return (
    <Router>
      <Container>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home   />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </Container>
    </Router>
  );
};
const Container = styled.div``;

export default App;
