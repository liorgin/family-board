import Image from "next/image";

import React from "react";

import microphoneIcon from "../../../public/mic.svg";
import styles from "./speech.module.scss";

function MicrophoneIndicator() {
  return (
    // <div className={styles.wrap}>
      <div className={styles.card}>
        <div style={{height: '40px', width: '40px'}}
            
        >
          <Image priority src={microphoneIcon} alt="M" />
        </div>
      </div>
    // </div>
  );
}

export default MicrophoneIndicator;
