import React,{useState} from 'react';
import './App.css';
import Nav from './Nav/Nav.js';
import AboutUs from './AboutUs/AboutUs.js';
import OurClients from './OurClients/OurClients.js';
import Footer from './Footer/Footer.js';
import JobsBoard from './JobsBoard/JobsBoard.js';
import ContactUs from './ContactUs/ContactUs.js';
import LoginPage from './LoginPage/Login.js' 
import UserPage from './UserPage/userPage.js'
import Hero from './Components/Hero.js'

function App() {
  let [page, setPage]=useState("Jobs");

  const loadHomePage=()=>{
    setPage("Home")
  }

  const loadJobsPage=()=>{
    setPage("Jobs")
  }

  const loadContactUsPage=()=>{
    setPage("ContactUs")
  }

  const loadLoginPage=()=>{
    setPage("Login")
  }

  if(page==="Home") return (
    <>
      <Nav page={page} loadHomePage={loadHomePage} loadJobsPage={loadJobsPage} loadContactUsPage={loadContactUsPage} loadLoginPage={loadLoginPage} />
      <Hero/>
      <AboutUs/>
      <OurClients/>
      <Footer/>
    </>
  );
  if(page==="Jobs") return (
    <>
      <Nav page={page} loadHomePage={loadHomePage} loadJobsPage={loadJobsPage} loadContactUsPage={loadContactUsPage} loadLoginPage={loadLoginPage}/>
      <JobsBoard/>
      <Footer/>
    </>
  );
  if(page==="ContactUs") return (
    <>
      <Nav page={page} loadHomePage={loadHomePage} loadJobsPage={loadJobsPage} loadContactUsPage={loadContactUsPage} loadLoginPage={loadLoginPage}/>
      <ContactUs/>
      <Footer/>
    </>
  );
  if(page==="Login") return (
    <>
      <Nav page={page} loadHomePage={loadHomePage} loadJobsPage={loadJobsPage} loadContactUsPage={loadContactUsPage} loadLoginPage={loadLoginPage}/>
      <LoginPage setPage={setPage}/>
      <Footer/>
    </>
  );
  if(page==="LoggedIn") return (
    <>  
      <Nav page={page}loadHomePage={loadHomePage} loadJobsPage={loadJobsPage} loadContactUsPage={loadContactUsPage} loadLoginPage={loadLoginPage}/>
      <UserPage/>
      <Footer/>
    </>
  );
}

export default App;
