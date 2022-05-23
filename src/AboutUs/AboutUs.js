import React from 'react'

export default function AboutUs() {
  return (
    <>
        <section className="About__Us__Section">
            <div className='About__Us__Container'>
                <h2 className="Section__Title">About Us</h2>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                    nisi ut aliquip ex ea commodo consequat.
                </p>
            </div> 
            <div className='About__Us__Imgs'>
              <img src="./imgs/building.jpeg" alt="placeholder"></img>
              <img src="./imgs/building 2.jpeg" alt="placeholder"></img>
              <img src="./imgs/office.jpeg" alt="placeholder"></img>
            </div>
        </section>
    </>
  )
}
