import React from 'react'

export default function Nav({loadHomePage,loadJobsPage,loadContactUsPage,loadLoginPage}) {
  return (
    <>
     <div className="Nav__Container">
         <img src="/imgs/Yueyuan Tech icon.png" alt="logo"></img>
         <div className="Page__Links">
             <button onClick={loadHomePage}>Home</button>
             <button onClick={loadJobsPage}>Jobs</button>
             <button onClick={loadContactUsPage}>Contact Us</button>
             <button onClick={loadLoginPage}>Login</button>
         </div>    
     </div>
     <div className="Hero__Container">
        <img src="/imgs/Yueyuan Tech banner.jpg" alt="Business Banner"></img>
     </div>
    </>
  )
};
