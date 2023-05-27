import React, { useState } from "react";
import { CountUp } from 'use-count-up';
import Styles from "@/styles/countuppage.module.css";
import ScrollTrigger from "react-scroll-trigger";

const CountUpPage = () => {

  const [counterOn, setCounterOn] = useState(false);

  return (
  <ScrollTrigger onEnter={()=> setCounterOn(true)} onExit={()=> setCounterOn(false)} >
    
    <div className={Styles.container}>
      <div className={Styles.wrapper}>
        <div className={Styles.countupstyle}>
            <span className={Styles.num}>
            {counterOn && <CountUp isCounting start={0} end={1320} duration={3.2} /> }  
            </span>  
            <p className={Styles.text}> 1st stage  </p>
        </div>
      </div>
      <div className={Styles.wrapper}>
        <div className={Styles.countupstyle}>
            <span className={Styles.num} > 
            {counterOn && <CountUp isCounting start={0} end={2502} duration={3.2} /> }
            </span>  
            <p className={Styles.text}> 2nd stage  </p>
        </div>
      </div>
      <div className={Styles.wrapper}>
        <div className={Styles.countupstyle}>
            <span className={Styles.num}>
            {counterOn && <CountUp isCounting start={0} end={5554} duration={3.2} /> }
            </span>  
            <p className={Styles.text}> 3rd stage  </p>
        </div>
      </div>
      <div className={Styles.wrapper}>
        <div className={Styles.countupstyle}>
            <span className={Styles.num} >
            {counterOn && <CountUp isCounting start={0} end={6665} duration={3.2} /> }
            </span>  
            <p className={Styles.text}> 4th stage  </p>
        </div>
      </div>
      {/* {firstTest()} */}
    </div>
  </ScrollTrigger>
  );
};

export default CountUpPage;
