import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./FrameComponent1.module.css";

export type FrameComponent1Type = {
  className?: string;

  /** Action props */
  onCYBERMATCHTextClick?: () => void;
  onFreelancesTextClick?: () => void;
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  className = "",
  onCYBERMATCHTextClick,
  onFreelancesTextClick,
}) => {
  const navigate = useNavigate();

  const onFreelancesTextClick1 = useCallback(() => {
    navigate("/frame-3");
  }, [navigate]);

  const onSignupContainerClick = useCallback(() => {
    navigate("/frame-5");
  }, [navigate]);

  const onMeConnecterTextClick = useCallback(() => {
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
            <nav className={styles.freelanceBlogLinksParent}>
              <div className={styles.freelanceBlogLinks}>
                <a className={styles.entreprise}>Entreprise</a>
              </div>
              <a className={styles.freelances} onClick={onFreelancesTextClick}>
                Freelances
              </a>
              <div className={styles.freelanceBlogLinks1}>
                <a className={styles.notreHistoire}>Notre histoire</a>
              </div>
              <a className={styles.blog}>Blog</a>
            </nav>
          </nav>
        </div>
      </div>
      <div className={styles.signupParent}>
        <div className={styles.signup} onClick={onSignupContainerClick}>
          <div className={styles.rectangleGroup}>
            <div className={styles.frameItem} />
            <a className={styles.crerUnCompte}>Créer un compte</a>
          </div>
        </div>
        <div className={styles.loginButton}>
          <a className={styles.meConnecter} onClick={onMeConnecterTextClick}>
            Me connecter
          </a>
        </div>
      </div>
    </header>
  );
};

export default FrameComponent1;
