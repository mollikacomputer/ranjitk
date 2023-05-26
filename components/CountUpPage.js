import React from "react";
import { CountUp } from 'use-count-up';
import Styles from "@/styles/countuppage.module.css";

const CountUpPage = () => {


  return (
    
    <div className={Styles.container}>
      <div className={Styles.wrapper}>
        <div className={Styles.countupstyle}>
            <span className={Styles.num}>
            <CountUp isCounting end={1320} duration={5} />  
            </span>  
            <p className={Styles.text}> 1st stage  </p>
        </div>
      </div>
      <div className={Styles.wrapper}>
        <div className={Styles.countupstyle}>
            <span className={Styles.num} >
            <CountUp isCounting end={2052} duration={5} /> 
            </span>  
            <p className={Styles.text}> 2nd stage  </p>
        </div>
      </div>
      <div className={Styles.wrapper}>
        <div className={Styles.countupstyle}>
            <span className={Styles.num}>
            <CountUp isCounting end={55555} duration={5} /> 
            </span>  
            <p className={Styles.text}> 3rd stage  </p>
        </div>
      </div>
      <div className={Styles.wrapper}>
        <div className={Styles.countupstyle}>
            <span className={Styles.num} >
            <CountUp isCounting end={6666} duration={5} /> 
            </span>  
            <p className={Styles.text}> 4th stage  </p>
        </div>
      </div>
      {/* {firstTest()} */}
    </div>
    
  );
};

export default CountUpPage;
