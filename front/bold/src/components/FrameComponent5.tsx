import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent1 from "./FrameComponent1";
import styles from "./FrameComponent5.module.css";

export type FrameComponent5Type = {
  className?: string;
};

const FrameComponent5: FunctionComponent<FrameComponent5Type> = ({
  className = "",
}) => {
  const navigate = useNavigate();

  const onCYBERMATCHTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <section className={[styles.frameParent, className].join(" ")}>
      <FrameComponent1 onCYBERMATCHTextClick={onCYBERMATCHTextClick} />
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.heroContent}>
          <b className={styles.accueilFreelances}>{`Accueil > Freelances`}</b>
          <h3 className={styles.freelancesDisponibles}>
            Freelances disponibles
          </h3>
        </div>
        <form className={styles.rectangleGroup}>
          <div className={styles.frameItem} />
          <div className={styles.filtersContent}>
            <div className={styles.popularityFilter}>
              <div className={styles.populaire}>Populaire :</div>
            </div>
            <div className={styles.skillFilter}>
              <button className={styles.cybersecurityFilter}>
                <div className={styles.cyberscurit}>Cybersécurité</div>
              </button>
            </div>
            <div className={styles.devOpsJavaFilter}>
              <div className={styles.devOpsJavaOptions}>
                <div className={styles.devops}>DevOps</div>
              </div>
              <div className={styles.devOpsJavaOptions1}>
                <div className={styles.java}>Java</div>
              </div>
            </div>
          </div>
          <div className={styles.locationTagsFilter}>
            <div className={styles.rectangleContainer}>
              <div className={styles.frameInner} />
              <div className={styles.tags}>
                <img
                  className={styles.tagTypeIcon}
                  alt=""
                  src="/tag-type.svg"
                />
              </div>
              <input
                className={styles.mtiertags}
                placeholder="métier/tags"
                type="text"
              />
            </div>
            <div className={styles.frameGroup}>
              <div className={styles.vectorWrapper}>
                <img className={styles.vectorIcon} alt="" src="/vector-1.svg" />
              </div>
              <img
                className={styles.rectangleIcon}
                alt=""
                src="/rectangle-8.svg"
              />
              <input className={styles.lieux} placeholder="lieux" type="text" />
            </div>
            <div className={styles.projectActions}>
              <div className={styles.projectButtons}>
                <button className={styles.groupButton}>
                  <div className={styles.rectangleDiv} />
                  <div className={styles.trouverUnFreelance}>
                    Trouver un freelance
                  </div>
                </button>
                <div className={styles.buttonOptions}>
                  <div className={styles.ou}>ou</div>
                </div>
                <div className={styles.buttonOptions1}>
                  <b className={styles.dposerUnProjet}>Déposer un projet</b>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default FrameComponent5;
