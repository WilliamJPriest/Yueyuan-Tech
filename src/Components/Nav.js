import React from 'react'
import {Link, NavLink} from 'react-router-dom'

export default function Nav() {
  return (
    <>
     <div className="Nav__Container">
      <a href="/"><img src="/imgs/Yueyuan-Tech-Icon.png" alt="logo"></img></a>
         <div className="Page__Links">
             <Link to="/" href="/">Home</Link>
             <Link to="/JobsBoard" >Jobs</Link>
             <Link to="/ContactUs" >Contact Us</Link>
             <Link to="/Login">Login</Link>
         </div>    
     </div>
    </>
  )
};
