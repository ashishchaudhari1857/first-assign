import React from "react";
import classes from "./connection.module.css";
function Connection() {
  return (
    <div className={classes.main}>
      <img src="Emojis.png" alt="" />
      <div className={classes.content}>
        <div>
          <h1>Ready to cash in Your Connections? join our Affilate Program</h1>
          <p>
            join now and get 7.5%commissions for creator referrals for the
            entire Year
          </p>
          <button className={classes.btn}>Earn Now</button>
        </div>

        <div className={classes.community}> 
          <img src="Image 1.png" alt="" />
          <div  className={classes.data}>
            <div>
              <h1>
               Join  the ABC  community
              </h1>
              <p>
              Become part of a vibrant and supportive community of like-minded creators by joining ABC's exclusive platform.
              Collaborate, learn, and connect with fellow creators who share your passion for adult content creation.
              </p>
              <button className={classes.btn}>Learn More</button>
            </div>
          </div>
          <img src="Image 2.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Connection;
