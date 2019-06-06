import React from "react";
import styles from "./WelcomePage.module.scss";

class WelcomePage extends React.Component {
  render() {
    const Background =
      "https://media.istockphoto.com/photos/blurred-surface-view-on-blue-swimming-pool-picture-id509109352?k=6&m=509109352&s=612x612&w=0&h=0KOFdMbtoEhL7QjCXZikqTHxcHqjUhsUAJNbhvDjkJE=";

    return (
      <div className={styles.welcomePage}>
        <img
          src={`${Background}`}
          className={styles.welcomePicture}
          alt="Aquapark area"
        />

        <h1 className={styles.welcomeText}>Witaj w Aquaparku</h1>
      </div>
    );
  }
}
export default WelcomePage;
