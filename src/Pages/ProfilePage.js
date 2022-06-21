import React, { useState,useEffect } from 'react'

export default function ProfilePage(){
    const [profiles, setProfiles]=useState([])
    useEffect(()=>{
        fetch("api/profiles",{
            headers: { 'x-auth-token': localStorage.getItem("token")},
        })
        .then(response => response.json())
        .then(data => setProfiles(data.data)) 
    },[]);
    return(
        <>
        <section className="Profiles__Container">
            {profiles.map((items)=> (
            <div className="Profile">
                <h2>{items.name}</h2>
                <p>{items.bio}</p>
                <p>$ <span className="Salary">{items.salary}</span></p>
                </div>
            ))}
        </section>
        </>

    )
}