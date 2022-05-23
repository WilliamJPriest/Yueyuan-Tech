import React from 'react'

export default function ContactUs() {

  let handleSubmit=(e)=>{
    e.preventDeafult();
    console.log("submitted'")
  }
  return (
    <>  
    <section className="Contact__Us__Container">
      <form  onSubmit={handleSubmit}className="User__Info">
        <label for="name">Enter your name</label>
        <input type="name" id="name" name="name"></input>
        <label for="email">Enter your email</label>
        <input type="email" id="email" name="email"></input>
        <input type="submit" value="Submit" />
        
      </form>
    </section>
    
    </>
  )
}
