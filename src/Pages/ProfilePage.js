import React, { useEffect } from 'react'

export default function ProfilePage(){
    useEffect(()=>{
        fetch("api/profiles",{
            headers: { 'x-auth-token': localStorage.getItem("token")},
        })
        .then(response => response.json())
        .then(data => console.log(data.data)) 
    },[]);
    return(
        <>
        <section className="Profiles__Container">
            <div className="Profile">
                <h2>username</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus odit a eligendi! Est at dolor saepe praesentium obcaecati impedit expedita.</p>
                <p>$ <span className="Salary"></span></p>
                </div>
        </section>
        </>

    )
}