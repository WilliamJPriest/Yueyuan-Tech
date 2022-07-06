import React,{useState} from 'react';
import './App.css';
import Nav from './Components/Nav.js';
import AboutUs from './Components/AboutUs.js';
import OurClients from './Components/OurClients.js';
import Footer from './Components/Footer.js';
import JobsBoard from './Pages/JobsBoard.js';
import ContactUs from './Pages/ContactUs.js';
import LoginPage from './Pages/Login.js' 
import UserPage from './Pages/userPage.js'
import ProfilePage from './Pages/ProfilePage';
import Hero from './Components/Hero.js';
import SetUpProfile from './Pages/SetUpProfile.js';

function App() {
  let [page, setPage]=useState("LoggedIn");

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
  const loadProfilePage=()=>{
    setPage("Profiles")
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
  if(page==="Profiles") return (
    <>  
      <Nav page={page}loadHomePage={loadHomePage} loadJobsPage={loadJobsPage} loadContactUsPage={loadContactUsPage} loadLoginPage={loadLoginPage}/>
      <ProfilePage/>
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
      <SetUpProfile/>
      <Footer/>
    </>
  );

  }

export default App;
