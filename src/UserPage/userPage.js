import React,{useEffect,useState} from 'react'

export default function UserPage() {

  const [loggedUser,setLoggedUser]=useState()

  useEffect(() =>{
    fetch("api/user",{
      headers: { 'x-auth-token': localStorage.getItem("token")},
    })
    .then(response => response.json())
    .then(data => setLoggedUser(data.data)); 
},[]);
  return (
    <>
      <div className="User__Section">
          <div className="User__Container">
              <div className="Username">
                       <h1>Hello {loggedUser.username}</h1>
              </div>
          </div>
      </div>  
    </>
  )
}
