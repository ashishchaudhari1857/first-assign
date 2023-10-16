import React from 'react'
import classes from  './Firstblock.module.css'
import Form from './Form/Form'
function Firstblock() {
  return (
    <div className={classes.main}>
      <img src="Vector 10.png" alt='loading' className={classes.img1}></img>
         <div className={classes.header}>
            <h1>A Creator Paradise</h1>
              <h5>Where  Creativity Meets  Success</h5>
        </div>
         <Form></Form>
      <img src="Vector 10.png" alt='loading' className={classes.img2}></img>
    </div>
  )
}

export default Firstblock