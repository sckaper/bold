import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./FrameComponent3.module.css";

export type FrameComponent3Type = {
  className?: string;

  /** Action props */
  onMeConnecterTextClick?: () => void;
};

const FrameComponent3: FunctionComponent<FrameComponent3Type> = ({
  className = "",
  onMeConnecterTextClick,
}) => {
  const navigate = useNavigate();

  const onCYBERMATCHTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onMeConnecterTextClick1 = useCallback(() => {
    navigate("/frame-9");
  }, [navigate]);

  return (
    <header className={[styles.rectangleParent, className].join(" ")}>
      <div className={styles.frameChild} />
      <div className={styles.frameWrapper}>
        <div className={styles.cybermatchParent}>
          <a className={styles.cybermatch} onClick={onCYBERMATCHTextClick}>
            CYBERMATCH
          </a>
          <nav className={styles.frameContainer}>
            <nav className={styles.frameParent}>
              <div className={styles.entrepriseWrapper}>
                <a className={styles.entreprise}>Entreprise</a>
              </div>
              <a className={styles.freelances}>Freelances</a>
              <div className={styles.notreHistoireWrapper}>
                <a className={styles.notreHistoire}>Notre histoire</a>
              </div>
              <a className={styles.blog}>Blog</a>
            </nav>
          </nav>
        </div>
      </div>
      <div className={styles.frameGroup}>
        <button className={styles.rectangleGroup}>
          <div className={styles.frameItem} />
          <a className={styles.crerUnCompte}>Créer un compte</a>
        </button>
        <div className={styles.meConnecterWrapper}>
          <a className={styles.meConnecter} onClick={onMeConnecterTextClick}>
            Me connecter
          </a>
        </div>
      </div>
    </header>
  );
};

export default FrameComponent3;
