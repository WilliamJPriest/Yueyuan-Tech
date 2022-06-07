import React,{useState} from 'react'

export default function Login({setPage}) {
  let [authPage, setAuthPage]=useState("Login")
  let [username,setUsername]=useState("");
  let [password,setPassword]=useState("")
  let [email, setEmail]= useState("");

  const handleRegisterSubmit=  (e)=>{
    e.preventDefault()
     try{
        fetch("/api/user/register",{
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({       
            username,
            email,
            password
          })
        }).then(()=>{
        console.log("registered") 
      })
      }catch(error){
        console.log(error)
        }

  }
  const handleLoginSubmit=(e)=>{
    e.preventDefault()
      try{
        fetch("/api/user/login",{
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({       
            email,
            password
          })
        })
        .then(response => response.json())
        .then(data => localStorage.setItem("token",data.token))
        .then(setPage("LoggedIn"))
      }catch(error){
        console.log(error)
      }
  }

  const loadLoginPage= ()=>{
    setAuthPage("Login")
  }

  const loadRegisterPage= ()=>{
    setAuthPage("Register")
  }



  if(authPage==="Login")
  return (
    <>
      <div className="Login__Container">
        <div className="Login">
          <form onSubmit={handleLoginSubmit}>
          <label for="Émail">
            Email: 
          </label>  
          <input type="text" name="Email" value={email} onChange={(e)=>setEmail(e.target.value)} />
          <label for="Password">
            Password: 
          </label>
          <input type="text" name="Password" onChange={(e)=>setPassword(e.target.value)} />
          <button> Login</button>
          </form>        
          <button onClick={loadRegisterPage}>Register New Account</button>  
        </div>
      </div>
    </>
  )
  if(authPage==="Register")
  return (
    <>
      <div className="Register__Container">
        <div className="Register">
          <form onSubmit={handleRegisterSubmit}>
          <label for="Username">
            Create a Username: 
          </label>
          <input type="text" value={username} name="Username" onChange={(e)=>setUsername(e.target.value)}  /> 
          <label for="Email">
            Email: 
          </label>
          <input type="text" value={email} name="Email" onChange={(e)=>setEmail(e.target.value)} />
          <label for="Password">
            Password: 
          </label>
          <input type="text" value={password} name="Password" onChange={(e)=>setPassword(e.target.value)} />
          <button> Register</button>
          </form>
          <button onClick={loadLoginPage}>Back to Login</button>
          </div>
      </div>
    </>
  )

}
