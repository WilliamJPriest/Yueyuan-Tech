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
                <div className="Job">
                   {jobData.map((items) =>(
                       <h1>{items.title}</h1>
                   ))}
                </div>
            </div>
        </section>
    </>
  )
}
