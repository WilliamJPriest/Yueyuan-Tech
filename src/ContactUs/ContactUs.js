import React from 'react'

export default function ContactUs() {

  let handleSubmit=(e)=>{
    e.preventDeafult();
    console.log("submitted'")
  }
  return (
    <>  
    <section className="Contact__Us__Container">
      <figure className="Contact__Us__Hero">
        <img src="./imgs/Yueyuan-Tech-Banner.jpg" alt="banner" />
        {/* resize company image and swap out */}
        <figcaption>Company banner</figcaption>
      </figure>
      <article className="Contact__Us">
        <h3>Contact Us</h3>
        <div className="Contact__Us__Details">
          <p className="Address"> 1568 Nanning lu yadda yadda yadda</p>
          <p className="Manager__Info">
            <span>Ron B Ronnyson </span>
            <a href="#"><i></i>666-666-6666</a>
          </p>
        </div>
      </article>
    </section>
    
    </>
  )
}
