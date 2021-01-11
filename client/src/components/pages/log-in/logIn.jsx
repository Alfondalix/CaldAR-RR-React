import React from 'react';
import styles from './logIn.module.css';

const LogIn = () => {
  return (
    <div className={styles.container}>
      <div className={styles.titleContent}>
        <h1>CALDAR</h1>
      </div>
      <div className={styles.loginBox}>
        <h1>Log In</h1>
        <div className={styles.textbox}>
          <i className="fa fa-user" aria-hidden="true"></i>
          <input type="text" placeholder="Username" name="" />
        </div>
        <div className={styles.textbox}>
          <i className="fa fa-lock" aria-hidden="true"></i>
          <input type="password" placeholder="Password" name="" />
        </div>
        <input className={styles.btn} type="button" name="" value="Sign In" />
        <input
          className={styles.btn}
          type="button"
          name=""
          value="boton google"
        />
      </div>
    </div>
  );
};

export default LogIn;
