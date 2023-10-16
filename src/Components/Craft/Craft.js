import React from "react";
import classes from "./Craft.module.css";
function Craft() {
  return (
    <div className={classes.container}>
      <h1 className={classes.header}>Elevate Your Craft</h1>
      <div className={classes.section1}>
        <div className={classes.card}>
          <h2>Unlock Your ABC Earning Potential</h2>
          <p>
            Earning money online has become increasingly popular and accessible,
            thanks to the internet and various online opportunities. Here are
            some common ways people can make money online:
          </p>
          <img src="mobile.png" alt="loading"></img>
        </div>
        <div className={classes.card}>
          <h2>Boost Your Sales with Built-in-Ecommerce </h2>
          <p>
            Earning money online has become increasingly popular and accessible,
            thanks to the internet and various online opportunities. Here are
            some common ways people can make money online:
          </p>
          <div className={classes.images}>
            <img src="images5.png" alt="loading"></img>
            <img src="images2.png" alt="loading"></img>
            <img src="images1.png" alt="loading"></img>
            <img src="images3.png" alt="loading"></img>
          </div>
        </div>
      </div>
      <div className={classes.section2}>
        <div className={classes.card}>
          <img src="image 16.png" alt="loading"></img>

          <h2>Save the Time  with Automation  and Efficiecy</h2>
          <p>
            Earning money online has become increasingly popular and accessible,
            thanks to the internet and various online opportunities. Here are
            some common ways people can make money online:
          </p>
        </div>
        <div className={classes.card}>
          <img src="image 13.png" alt="loading"></img>

          <h2> Join and Subscribe communinity</h2>
          <p>
            Earning money online has become increasingly popular and accessible,
            thanks to the internet and various online opportunities. Here are
            some common ways people can make money online:
          </p>
        </div>
        <div className={classes.card}>
          <img src="image 14.png" alt="loading"></img>

          <h2>Win exciting Prizes</h2>
          <p>
            Earning money online has become increasingly popular and accessible,
            thanks to the internet and various online opportunities. Here are
            some common ways people can make money online:
          </p>
        </div>
      </div>
    </div>
  );
}

export default Craft;
