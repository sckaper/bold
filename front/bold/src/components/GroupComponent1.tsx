import { FunctionComponent } from "react";
import styles from "./GroupComponent1.module.css";

export type GroupComponent1Type = {
  className?: string;
};

const GroupComponent1: FunctionComponent<GroupComponent1Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.rectangleParent, className].join(" ")}>
      <div className={styles.frameChild} />
      <div className={styles.expertInfo}>
        <div className={styles.matthieu}>Matthieu</div>
        <div className={styles.expertEnCyberscurit}>
          Expert en cybersécurité
        </div>
      </div>
      <div className={styles.expertBadge}>
        <div className={styles.badgeContent}>
          <div className={styles.platformName}>
            <b className={styles.cybermatch}>CYBERMATCH</b>
          </div>
          <div className={styles.freelance}>Freelance</div>
        </div>
        <img className={styles.expertBadgeChild} alt="" src="/group-10.svg" />
      </div>
    </div>
  );
};

export default GroupComponent1;
