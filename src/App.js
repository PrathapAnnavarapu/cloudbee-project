
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import UserDetails from './Components/UserDetails'
import Footer from './Components/Footer'
import Header from './Components/Header'
import './App.css';

function App() {
  return (
    <BrowserRouter> 
      <Header/> 
      <Routes >
        <Route path='/' element={<Home />} />
        <Route path='/UserListItemDetails/:username' element={<UserDetails/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
