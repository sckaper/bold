import {
  FunctionComponent,
  useMemo,
  type CSSProperties,
  useCallback,
} from "react";
import { useNavigate } from "react-router-dom";
import styles from "./FrameComponent2.module.css";

export type FrameComponent2Type = {
  className?: string;
  homeUserTypeIcons?: string;
  entreprise?: string;
  jeChercheDesFreelances?: string;

  /** Style props */
  propFlex?: CSSProperties["flex"];

  /** Action props */
  onRectangleClick?: () => void;
};

const FrameComponent2: FunctionComponent<FrameComponent2Type> = ({
  className = "",
  homeUserTypeIcons,
  entreprise,
  jeChercheDesFreelances,
  propFlex,
  onRectangleClick,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      flex: propFlex,
    };
  }, [propFlex]);

  const navigate = useNavigate();

  const onRectangleClick1 = useCallback(() => {
    navigate("/frame-6");
  }, [navigate]);

  return (
    <div
      className={[styles.rectangleParent, className].join(" ")}
      style={frameDivStyle}
    >
      <div className={styles.frameChild} onClick={onRectangleClick} />
      <div className={styles.homeUserTypeIconsWrapper}>
        <img
          className={styles.homeUserTypeIcons}
          loading="lazy"
          alt=""
          src={homeUserTypeIcons}
        />
      </div>
      <div className={styles.frameParent}>
        <div className={styles.entrepriseWrapper}>
          <h3 className={styles.entreprise}>{entreprise}</h3>
        </div>
        <div className={styles.jeChercheDes}>{jeChercheDesFreelances}</div>
      </div>
    </div>
  );
};

export default FrameComponent2;
