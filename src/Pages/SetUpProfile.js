import React,{useState} from 'react';
import SelectBTNS from '../Components/SelectBTNS';


export default function () {
  let [profileImg, setProfileImg]=useState("./") 

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
    <form  onSubmit={handleProfile} id="Setup__User__Profile">
        <label id="name">
        <input type="text" id="name" placeholder='add name' />
        </label>
        <label>
            <input type="text" id="contact" placeholder='add dingtalk number'/>
        </label>
        <label>
            <div>
               <SelectBTNS starImg={starImg} smugImg={smugImg} superHeroImg={superHeroImg}/>
            </div>
        </label>
    </form>
    </>

  )
}
