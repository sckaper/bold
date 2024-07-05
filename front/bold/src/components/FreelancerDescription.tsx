import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./FreelancerDescription.module.css";

export type FreelancerDescriptionType = {
  className?: string;
  vousTesUnExpertEnCyberscu?: string;
  avecCyberMatchVousAvezAcc?: string;
  devenirFreelance?: string;

  /** Style props */
  propFlex?: CSSProperties["flex"];
  propMinWidth?: CSSProperties["minWidth"];
  propWidth?: CSSProperties["width"];
};

const FreelancerDescription: FunctionComponent<FreelancerDescriptionType> = ({
  className = "",
  vousTesUnExpertEnCyberscu,
  avecCyberMatchVousAvezAcc,
  devenirFreelance,
  propFlex,
  propMinWidth,
  propWidth,
}) => {
  const freelancerDescriptionStyle: CSSProperties = useMemo(() => {
    return {
      flex: propFlex,
      minWidth: propMinWidth,
      width: propWidth,
    };
  }, [propFlex, propMinWidth, propWidth]);

  return (
    <div
      className={[styles.freelancerDescription, className].join(" ")}
      style={freelancerDescriptionStyle}
    >
      <div className={styles.vousTesUnContainer}>
        <p className={styles.vousTesUn}>{vousTesUnExpertEnCyberscu}</p>
        <p className={styles.blankLine}>&nbsp;</p>
        <p className={styles.avecCybermatchVous}>{avecCyberMatchVousAvezAcc}</p>
      </div>
      <div className={styles.freelancerButton}>
        <button className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <div className={styles.devenirFreelance}>{devenirFreelance}</div>
        </button>
      </div>
    </div>
  );
};

export default FreelancerDescription;
