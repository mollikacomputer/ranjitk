import React from "react";
// const firstTest= require("@/javascript/countuppage.module")
import Styles from "@/styles/countuppage.module.css";
const CountUpPage = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.wrapper}>
        <div className={Styles.countupstyle}>
            <span className={Styles.num} data-val="250">000</span>  
            <p className={Styles.text}> 1st stage  </p>
        </div>
      </div>
      <div className={Styles.wrapper}>
        <div className={Styles.countupstyle}>
            <span className={Styles.num} data-val="250">000</span>  
            <p className={Styles.text}> 2nd stage  </p>
        </div>
      </div>
      <div className={Styles.wrapper}>
        <div className={Styles.countupstyle}>
            <span className={Styles.num} data-val="250">000</span>  
            <p className={Styles.text}> 3rd stage  </p>
        </div>
      </div>
      <div className={Styles.wrapper}>
        <div className={Styles.countupstyle}>
            <span className={Styles.num} data-val="250">000</span>  
            <p className={Styles.text}> 4th stage  </p>
        </div>
      </div>
      {/* {firstTest()} */}
    </div>
  );
};

export default CountUpPage;
