import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./GroupComponent3.module.css";

export type GroupComponent3Type = {
  className?: string;

  /** Style props */
  propAlignSelf?: CSSProperties["alignSelf"];
  propFlex?: CSSProperties["flex"];
  propHeight?: CSSProperties["height"];
  propWidth?: CSSProperties["width"];
};

const GroupComponent3: FunctionComponent<GroupComponent3Type> = ({
  className = "",
  propAlignSelf,
  propFlex,
  propHeight,
  propWidth,
}) => {
  const groupDivStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      flex: propFlex,
      height: propHeight,
      width: propWidth,
    };
  }, [propAlignSelf, propFlex, propHeight, propWidth]);

  return (
    <div
      className={[styles.rectangleParent, className].join(" ")}
      style={groupDivStyle}
    >
      <div className={styles.frameChild} />
      <img
        className={styles.profileBackgroundIcon}
        loading="lazy"
        alt=""
        src="/rectangle-14@2x.png"
      />
      <div className={styles.profileContent}>
        <div className={styles.profileInfo}>
          <div className={styles.profileDetails}>
            <div className={styles.matthieu}>Matthieu</div>
            <div className={styles.profileIcons}>
              <div className={styles.iconDetails}>
                <img
                  className={styles.profileIcon}
                  alt=""
                  src="/vector-3.svg"
                />
                <div className={styles.iconBackground} />
              </div>
            </div>
            <div className={styles.freelancerLocation}>
              <div className={styles.paris}>Paris</div>
            </div>
          </div>
          <div className={styles.freelancerTitle}>
            <div className={styles.expertEnCyberscurit}>
              Expert en cybersécurité
            </div>
            <div className={styles.skillContainerParent}>
              <div className={styles.skillContainer}>
                <img
                  className={styles.skillContainerChild}
                  loading="lazy"
                  alt=""
                  src="/group-10.svg"
                />
              </div>
              <div className={styles.separator}>(2)</div>
            </div>
          </div>
          <div className={styles.freelancerSkills}>
            <button className={styles.skillDetails}>
              <div className={styles.cyberscurit}>Cybersécurité</div>
            </button>
            <div className={styles.devOpsSkills}>
              <div className={styles.devops}>DevOps</div>
            </div>
          </div>
          <div className={styles.price}>
            <div className={styles.jour}>400€/jour</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupComponent3;
