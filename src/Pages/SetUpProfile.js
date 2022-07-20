import React,{useState,useEffect} from 'react';
import SelectBTNS from '../Components/SelectBTNS';


export default function () {
  let [profileImg, setProfileImg]=useState("") 
  let [bio,setBio]=useState("")
  let [dingtalkNumber, setDingtalkNumber]=useState("")
  const [loggedUser,setLoggedUser]=useState("")

//   useEffect(() =>{
//     fetch("api/user",{
//       headers: { 'x-auth-token': localStorage.getItem("token")},
//     })
//     .then(response => response.json())
//     .then(data => setLoggedUser(data.data.username)); 
// },[]);

//   console.log(loggedUser)
  console.log(profileImg)

  const handleProfile=(e)=>{
    e.preventDefault()

  }

  const starImg=()=>{
    setProfileImg("./imgs/star.png")
    console.log("./imgs/star.png");
  }
  const smugImg=()=>{
    setProfileImg("./imgs/smug.png");
  }
  const superHeroImg=()=>{
    setProfileImg("./imgs/superhero.png");
  }

  return (
    <>
    <form onSubmit={handleProfile} id="Setup__User__Profile">
        <label id="name">
        <input type="text" id="name" placeholder='add name' />
        </label>
        <label>
            <input type="text" id="contact" placeholder='add dingtalk number'/>
        </label>
        <label>
          <textarea/>
        </label>
        <label>
            <div>
               <SelectBTNS starImg={starImg} smugImg={smugImg} superHeroImg={superHeroImg}/>
            </div>
        </label>
        <button >Submit</button>
    </form>
    </>

  )
}
