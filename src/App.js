import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css';
import Nav from './Components/Nav.js';
import Footer from './Components/Footer.js';
import Home from './Pages/Home.js'
import JobsBoard from './Pages/JobsBoard.js';
import ContactUs from './Pages/ContactUs.js';
import Login from './Pages/Login.js' ;
import User from './Pages/UserPage.js';
// import ProfilePage from './Pages/ProfilePage';
// import SetUpProfile from './Pages/SetUpProfile.js';


function App() {
    return (
    <>
      <BrowserRouter>
        <Nav/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/JobsBoard" element={<JobsBoard/>}/>
            <Route path="/ContactUs" element={<ContactUs/>}/>
            <Route path="/Login" element={<Login/>}/>
            <Route path="/User" element={<User/>}/>
          </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
    }
export default App;
