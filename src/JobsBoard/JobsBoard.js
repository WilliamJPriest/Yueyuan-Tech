import React,{useEffect, useState} from 'react'

export default function JobsBoard() {
    const[jobData,setJobData]=useState([])
    useEffect(() =>{
        fetch("api/posts",{
            headers: { 'x-auth-token': localStorage.getItem("token")},
        })
        .then(response => response.json())
        .then(data => setJobData(data.data)) 
    },[]);
  return (
    <>
        <section className="Jobs__Board__Container">
            <form>
                <input placeholder='search'></input>
                <button>Search</button>
            </form>
            <div className='Jobs__Container'>
                   {jobData.map((items) =>(
                    <div className="Job">   
                       <h3>{items.title}</h3>
                       <div className="Salary__Contact">
                        <p>{items.salary}</p>
                        <p>Contact:</p>
                       </div>
                       <p className="Desc">{items.desc}</p> 
                    </div>
                   ))}    
            </div>
            <button className="Post__Job__BTN">Post a Job</button>
        </section>
    </>
  )
}
