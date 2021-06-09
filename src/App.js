import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Header from './components/header/header';
import React, { useState } from 'react';
import Body from "./components/body/body";
import Footer from './components/footer/footer'
function App() {
  
  
  return (
    <div className="app">
      
      <Body/>
      <Footer/>
    </div>
  );
}

export default App;
