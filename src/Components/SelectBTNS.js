import React from 'react'
import SetUpProfile from '../Pages/SetUpProfile'

export default function({starImg,smugImg,superHeroImg}) {
  return (
    <>
    <div className="Profile__BTNS">
        <button onClick={starImg}> <img src="./imgs/star.png" alt="star" /></button>   
        <button onClick={smugImg}> <img src="./imgs/smug.png" alt="smug"/></button>
        <button onClick={superHeroImg}> <img src="./imgs/superhero.png" alt="superhero"/></button>
    </div>
    </>
  )
}