import React from "react";
import classes from "./Form.module.css"; 

function Form() {
  return (
   
    <div className={classes.loginContainer}> 
      <div className={classes.loginHeader}>
        <img src="ggl.png" alt="loading"></img>
        <div>Continue with Google</div>
      </div>
      <div className={classes.personalDetails}>
        <div>
          <input type="text" placeholder="First Name* " />
        </div>
        <div>
          <input type="text" placeholder="Last Name*" />
        </div>
      </div>
      <div className={classes.identification}>
        <input type="text" placeholder="Email*" />
        <input type="text" placeholder="Password*" />
      </div>
         <div className={classes.actions}>
         <button>SignUp  as User</button>
        <p>( provide enough context for me to understand what you're looking for. 
            Could you please our reques )</p>
          <div className={classes.orline}> OR</div>
          <p>( provide enough context for me to understand what you're looking for. 
            Could you please our reques )</p>
         <button>Signup as  Creator</button>

         </div>
        <div className={classes.userOrNot}>Already has an account?<a  href="#">login</a></div>
    </div>
  );
}

export default Form;
