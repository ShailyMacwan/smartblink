import React from 'react'
import styles from '../style/home.css'


import background from "../assets/home-bg.jpg"

const About = () => {
  return (
    <article className={styles.article}>
      <picture className={styles.picture}>
        <img src={background} alt="background" style={{height:'600px', width:'100%'}}/>
      </picture>
      <h1 className={styles.header}>React Is Awesome</h1>
    </article>
  );
};

export default About;