import React,{useState,useEffect} from 'react';
import SelectBTNS from '../Components/SelectBTNS';


export default function () {
  let [icon, setIcon]=useState("a") 
  let [bio,setBio]=useState("a")
  let [contact, setContact]=useState("a")
  const [loggedUser,setLoggedUser]=useState("")

  useEffect(() => {
    fetch("api/user",{
      headers: { 'x-auth-token': localStorage.getItem("token")},
    })
    .then(response => response.json())
    .then(data => setLoggedUser(data.data.username)); 
    console.log(loggedUser)
  }, [loggedUser])
  

  const handleProfile=(e)=>{
    e.preventDefault()

    try{
      fetch("api/profiles",{
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({       
          loggedUser,
          icon,
          bio,
          contact 
        })
      }).then(()=>{
      console.log("hello") 
    })
    }catch(error){
      console.log(error)
      } 
    }

  const starImg=(e)=>{
    e.preventDefault()
    setIcon("./imgs/star.png")
  }
  const smugImg=(e)=>{
    e.preventDefault()
    setIcon("./imgs/smug.png");
  }
  const superHeroImg=(e)=>{
    e.preventDefault()
    setIcon("./imgs/superhero.png");
  }

  return (
    <>
    <form onSubmit={handleProfile} id="Setup__User__Profile">
        <label>
            <input type="text" id="contact" value={contact} placeholder='add dingtalk number' onChange={(e)=>setContact(e.target.value)}/>
        </label>
        <label>
          <textarea type="text"  value={bio} placeholder={bio} onChange={(e)=>setBio(e.target.value)}/>
        </label>
        <label>
            <div>
               <SelectBTNS starImg={starImg} smugImg={smugImg} superHeroImg={superHeroImg}/>
            </div>
        </label>
        <button>Submit</button>
    </form>
    </>

  )
}
