import React from 'react'

export default function Nav({loadHomePage,loadJobsPage,loadContactUsPage,loadLoginPage, page}) {
  return (
    <>
     <div className="Nav__Container">
      <a onClick={loadHomePage} ><img src="/imgs/Yueyuan-Tech-Icon.png" alt="logo"></img></a>
         <div className="Page__Links">
             <button onClick={loadHomePage}>Home</button>
             <button onClick={loadJobsPage}>Jobs</button>
             <button onClick={loadContactUsPage}>Contact Us</button>
             <button onClick={loadLoginPage}>Login</button>
         </div>    
     </div>
    </>
  )
};
