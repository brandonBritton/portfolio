import styles from "styles/Hero.module.scss";
import wave from "assets/waving-hand.png";

const Hero = () => {
  return (
    <div className={styles.card}>
      <div className={styles.blobcont}>
				<div className={`${styles.red} ${styles.blob}`}/>
				<div className={`${styles.green} ${styles.blob}`}/>
				<div className={`${styles.blue} ${styles.blob}`}/>
      </div>
			
			<div className={styles.content}>
        <h1>
          <span className={styles.accent1}>Hi there!</span>
          <img className={styles.wave} src={wave} alt="wave emoji" />
        </h1>
        <h2>
          I’m <span className={styles.accent2}>Brandon Britton</span>
        </h2>
        <h3>full-stack software developer</h3>
        <p>
          I’m a software engineer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building accessible, human-centered products.
        </p>
      </div>
    </div>
  );
};

export default Hero;
