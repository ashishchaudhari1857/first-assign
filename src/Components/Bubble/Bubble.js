import React from 'react'
import classes from  './Bubble.module.css'
function Bubble() {
  return (
    <div>
    <div className={classes.main}>
        <img  src='BubblesLeft.png' alt=''/>
        <div className={classes.content}>
          <p>don't miss out on ABC incredible features  and  Opprtunity</p>
          <h1>
            Join  us Today and  Unlock Your Full  potential   as Creator
          </h1>
          <button className={classes.btn}>Join Now</button>
        </div>
        <img  src='Bubbles - Right.png'/>
    </div>
       <img src="Banner.png" alt="loading" className={classes.banner}/>
    </div>
  )
}

export default Bubble