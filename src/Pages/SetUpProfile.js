import React,{Profiler, useState} from 'react'

export default function () {
  const [profileImg, setProfileImg]=useState('')
  return (
    <>
    <form  id="Setup__User__Profile">
        <label id="name">
        <input type="text" id="name" placeholder='add name' />
        </label>
        <label >
            <input type="text" id="contact" placeholder='add dingtalk number'/>
        </label>
        <label >
            <div>
                {/* <button onClick={Profiler()} ><img src="./imgs/Dingtalk.png" alt="" /></button> */}
            </div>
        </label>
    </form>
    </>

  )
}
