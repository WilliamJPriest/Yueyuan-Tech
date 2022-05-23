import React from 'react'

export default function JobsBoard() {
  return (
    <>
        <section className="Jobs__Board__Container">
            <form>
                <input placeholder='search'></input>
                <button>Search</button>
            </form>
            <div className='Jobs__Container'>
                <div className="Job">
                    <h2>Foriegn Manager</h2>
                    <p>Job Details</p>
                </div>
            </div>
        </section>
    </>
  )
}
