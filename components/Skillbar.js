import styles from "@/styles/skillbar.module.css";
const Skillbar = () => {
  return (
    <div>
      <div className={styles.skill}>
        <h2 className={styles.titleText}>Develop by Ranjit K Mandal</h2>
        <div className={styles.skillBox}>
          {/* html section  */}
          <span className={styles.title}> HTML</span>
          <div className={styles.skillBar}>
            <span className= {`${styles.skillPer} ${styles.html}`}>
              <span className={styles.tooltip}>90%</span>
            </span>
          </div>
          {/* css section  */}
          <span className={styles.title}> css</span>
          <div className={styles.skillBar}>
            <span className={`${styles.skillPer} ${styles.css}`}>
              <span className={styles.tooltip}>80%</span>
            </span>
          </div>
          {/* javascript section  */}
          <span className={styles.title}> Javascript</span>
          <div className={styles.skillBar}>
            <span className={`${styles.skillPer} ${styles.javascript}`}>
              <span className={styles.tooltip}>75%</span>
            </span>
          </div>
          {/* node section  */}
          <span className={styles.title}> Node</span>
          <div className={`${styles.skillBar}`}>
            <span className={`${styles.skillPer} ${styles.node}`}>
              <span className={styles.tooltip}>60%</span>
            </span>
          </div>
          {/* Mongodb section  */}
          <span className={styles.title}> Mongodb</span>
          <div className={`${styles.skillBar}`}>
            <span className={`${styles.skillPer} ${styles.mongodb}`}>
              <span className={styles.tooltip}>50%</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Skillbar;
