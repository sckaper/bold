import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./GroupComponent2.module.css";

export type GroupComponent2Type = {
  className?: string;
  rectangle14?: string;
  maxime?: string;
  technicienRseau?: string;
  prop?: string;
  python?: string;
  jour?: string;

  /** Style props */
  propHeight?: CSSProperties["height"];
  propFlex?: CSSProperties["flex"];
};

const GroupComponent2: FunctionComponent<GroupComponent2Type> = ({
  className = "",
  rectangle14,
  maxime,
  technicienRseau,
  prop,
  python,
  jour,
  propHeight,
  propFlex,
}) => {
  const groupDiv1Style: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
      flex: propFlex,
    };
  }, [propHeight, propFlex]);

  return (
    <div
      className={[styles.rectangleParent, className].join(" ")}
      style={groupDiv1Style}
    >
      <div className={styles.frameChild} />
      <img className={styles.frameItem} alt="" src={rectangle14} />
      <div className={styles.frameWrapper}>
        <div className={styles.frameParent}>
          <div className={styles.maximeParent}>
            <div className={styles.maxime}>{maxime}</div>
            <div className={styles.frameContainer}>
              <div className={styles.vectorParent}>
                <img className={styles.vectorIcon} alt="" src="/vector-3.svg" />
                <div className={styles.frameInner} />
              </div>
            </div>
            <div className={styles.parisWrapper}>
              <div className={styles.paris}>Paris</div>
            </div>
          </div>
          <div className={styles.technicienRseauParent}>
            <div className={styles.technicienRseau}>{technicienRseau}</div>
            <div className={styles.frameGroup}>
              <div className={styles.frameDiv}>
                <img className={styles.groupIcon} alt="" src="/group-10.svg" />
              </div>
              <div className={styles.div}>{prop}</div>
            </div>
          </div>
          <div className={styles.frameWrapper1}>
            <div className={styles.pythonWrapper}>
              <div className={styles.python}>{python}</div>
            </div>
          </div>
          <div className={styles.jourWrapper}>
            <div className={styles.jour}>{jour}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupComponent2;
