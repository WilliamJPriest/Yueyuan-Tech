import React,{useState} from 'react';
import './App.css';
import Nav from './Nav/Nav.js';
import AboutUs from './AboutUs/AboutUs.js';
import OurClients from './OurClients/OurClients.js';
import Footer from './Footer/Footer.js';
import JobsBoard from './JobsBoard/JobsBoard.js';
import ContactUs from './ContactUs/ContactUs.js';
import LoginPage from './LoginPage/Login.js' 


function App() {
  let [page, setPage]=useState("Login");

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
      <Nav loadHomePage={loadHomePage} loadJobsPage={loadJobsPage} loadContactUsPage={loadContactUsPage} loadLoginPage={loadLoginPage} />
      <AboutUs/>
      <OurClients/>
      <Footer/>
    </>
  );
  if(page==="Jobs") return (
    <>
      <h1>Jobs</h1>
      <Nav loadHomePage={loadHomePage} loadJobsPage={loadJobsPage} loadContactUsPage={loadContactUsPage} loadLoginPage={loadLoginPage}/>
      <JobsBoard/>
      <Footer/>
    </>
  );
  if(page==="ContactUs") return (
    <>
      <h1>ContactUs</h1>
      <Nav loadHomePage={loadHomePage} loadJobsPage={loadJobsPage} loadContactUsPage={loadContactUsPage} loadLoginPage={loadLoginPage}/>
      <ContactUs/>
      <Footer/>
    </>
  );
  if(page==="Login") return (
    <>
      <h1>Login</h1>
      <Nav loadHomePage={loadHomePage} loadJobsPage={loadJobsPage} loadContactUsPage={loadContactUsPage} loadLoginPage={loadLoginPage}/>
      <LoginPage/>
      <Footer/>
    </>
  );
  if(page==="LoggedIn") return (
    <>
      <h1>Login</h1>
      <Nav loadHomePage={loadHomePage} loadJobsPage={loadJobsPage} loadContactUsPage={loadContactUsPage} loadLoginPage={loadLoginPage}/>
      <LoginPage/>
      <Footer/>
    </>
  );
}

export default App;
