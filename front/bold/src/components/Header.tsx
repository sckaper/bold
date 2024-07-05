import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Header.module.css";

export type HeaderType = {
  className?: string;
};

const Header: FunctionComponent<HeaderType> = ({ className = "" }) => {
  const navigate = useNavigate();

  const onCYBERMATCHTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onMeConnecterTextClick = useCallback(() => {
    navigate("/frame-9");
  }, [navigate]);

  return (
    <section className={[styles.header, className].join(" ")}>
      <header className={styles.empty}>
        <div className={styles.emptyChild} />
        <div className={styles.main}>
          <div className={styles.content}>
            <a className={styles.cybermatch} onClick={onCYBERMATCHTextClick}>
              CYBERMATCH
            </a>
            <nav className={styles.account}>
              <nav className={styles.links}>
                <div className={styles.shortcuts}>
                  <a className={styles.entreprise}>Entreprise</a>
                </div>
                <a className={styles.freelances}>Freelances</a>
                <div className={styles.shortcuts1}>
                  <a className={styles.notreHistoire}>Notre histoire</a>
                </div>
                <a className={styles.blog}>Blog</a>
              </nav>
            </nav>
          </div>
        </div>
        <div className={styles.auth}>
          <button className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <a className={styles.crerUnCompte}>Créer un compte</a>
          </button>
          <div className={styles.loginButton}>
            <a className={styles.meConnecter} onClick={onMeConnecterTextClick}>
              Me connecter
            </a>
          </div>
        </div>
      </header>
    </section>
  );
};

export default Header;
