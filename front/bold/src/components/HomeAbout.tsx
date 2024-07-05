import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent2 from "./FrameComponent2";
import styles from "./HomeAbout.module.css";

export type HomeAboutType = {
  className?: string;
};

const HomeAbout: FunctionComponent<HomeAboutType> = ({ className = "" }) => {
  const navigate = useNavigate();

  const onRectangleClick = useCallback(() => {
    navigate("/frame-6");
  }, [navigate]);

  const onRectangleClick1 = useCallback(() => {
    navigate("/frame-7");
  }, [navigate]);

  return (
    <section className={[styles.homeAbout, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.frameWrapper}>
          <div className={styles.frameGroup}>
            <div className={styles.cybermatchWrapper}>
              <h3 className={styles.cybermatch}>CYBERMATCH</h3>
            </div>
            <h3 className={styles.quiTesVous}>Qui êtes-vous ?</h3>
          </div>
        </div>
        <div className={styles.frameContainer}>
          <FrameComponent2
            homeUserTypeIcons="/ellipse-3@2x.png"
            entreprise="Entreprise"
            jeChercheDesFreelances="Je cherche des freelances"
            onRectangleClick={onRectangleClick}
          />
          <FrameComponent2
            homeUserTypeIcons="/ellipse-4@2x.png"
            entreprise="Freelance"
            jeChercheDesFreelances="Je cherche des entreprises"
            propFlex="1"
            onRectangleClick={onRectangleClick1}
          />
        </div>
        <div className={styles.homeLoginCTA}>
          <div className={styles.ouAvezDjUnCompteParent}>
            <div className={styles.ouAvezDj}>Ou avez déjà un compte ?</div>
            <div className={styles.meConnecterWrapper}>
              <div className={styles.meConnecter}>Me connecter</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;
