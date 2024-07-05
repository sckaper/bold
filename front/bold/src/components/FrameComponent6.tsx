import { FunctionComponent } from "react";
import styles from "./FrameComponent6.module.css";

export type FrameComponent6Type = {
  className?: string;
};

const FrameComponent6: FunctionComponent<FrameComponent6Type> = ({
  className = "",
}) => {
  return (
    <form className={[styles.frameParent, className].join(" ")}>
      <button className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <img className={styles.devicongoogle} alt="" src="/devicongoogle.svg" />
        <div className={styles.continuerAvecGoogleWrapper}>
          <div className={styles.continuerAvecGoogle}>
            Continuer avec google
          </div>
        </div>
      </button>
      <div className={styles.frameGroup}>
        <div className={styles.lineWrapper}>
          <div className={styles.frameItem} />
        </div>
        <div className={styles.ou}>ou</div>
        <div className={styles.lineContainer}>
          <div className={styles.frameInner} />
        </div>
      </div>
      <div className={styles.frameContainer}>
        <div className={styles.rectangleGroup}>
          <div className={styles.rectangleDiv} />
          <input className={styles.email} placeholder="Email" type="text" />
        </div>
        <div className={styles.rectangleContainer}>
          <div className={styles.frameChild1} />
          <input
            className={styles.motDePasse}
            placeholder="Mot de passe"
            type="text"
          />
        </div>
      </div>
      <div className={styles.frameWrapper}>
        <button className={styles.groupButton}>
          <div className={styles.frameChild2} />
          <div className={styles.meConnecter}>Me connecter</div>
        </button>
      </div>
      <div className={styles.frameDiv}>
        <div className={styles.ouPasEncoreDeCompteParent}>
          <div className={styles.ouPasEncore}>Ou pas encore de compte ?</div>
          <div className={styles.sinscrireWrapper}>
            <div className={styles.sinscrire}>S’inscrire</div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default FrameComponent6;
