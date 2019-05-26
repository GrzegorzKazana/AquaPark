import React from "react";
import styles from "./WelcomePage.module.scss";
import { Card } from "antd";

class WelcomePage extends React.Component {
  render() {
    const Background = "http://www.photos-public-domain.com/wp-content/uploads/2012/04/aqua-colored-water-texture.jpg";
    return (
      <div className={styles.welcomePage}>
        <img src={`${Background})`} className={styles.welcomePicture}></img>
     
        <p className={styles.welcomeText}>Witaj w AquaParku</p>
        <div className={styles.welcomeTextBackground}></div>
        {/* <p className={styles.welcomeText}>text</p>
        <p className={styles.welcomeText}>text</p> */}


      </div>
    );
  }
}
export default WelcomePage;
