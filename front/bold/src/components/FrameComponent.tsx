import { FunctionComponent } from "react";
import styles from "./FrameComponent.module.css";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
}) => {
  return (
    <section className={[styles.trustContentWrapper, className].join(" ")}>
      <div className={styles.trustContent}>
        <div className={styles.trustInner}>
          <div className={styles.trustHeading}>
            <h3 className={styles.ilsNousFont}>Ils nous font confiances</h3>
            <div className={styles.imageGallery}>
              <div className={styles.singleImage}>
                <img
                  className={styles.image1Icon}
                  loading="lazy"
                  alt=""
                  src="/image-11@2x.png"
                />
              </div>
              <img
                className={styles.image2Icon}
                loading="lazy"
                alt=""
                src="/image-21@2x.png"
              />
              <div className={styles.singleImage1}>
                <img
                  className={styles.image3Icon}
                  loading="lazy"
                  alt=""
                  src="/image-31@2x.png"
                />
              </div>
              <div className={styles.imagePair}>
                <img
                  className={styles.image4Icon}
                  loading="lazy"
                  alt=""
                  src="/image-41@2x.png"
                />
              </div>
              <div className={styles.imagePair1}>
                <img
                  className={styles.image5Icon}
                  loading="lazy"
                  alt=""
                  src="/image-51@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.callToAction}>
          <div className={styles.actionButtons}>
            <div className={styles.actionButtonsChild} />
            <div className={styles.findFreelancer}>
              <div className={styles.findFreelancerChild} />
              <div className={styles.findButton}>
                <img className={styles.findIcon} alt="" src="/find-icon.svg" />
              </div>
              <input
                className={styles.mtiertags}
                placeholder="métier/tags"
                type="text"
              />
            </div>
            <div className={styles.projectButtons}>
              <button className={styles.rectangleParent}>
                <div className={styles.frameChild} />
                <div className={styles.trouverUnFreelance}>
                  Trouver un freelance
                </div>
              </button>
              <div className={styles.projectLinks}>
                <div className={styles.ou}>ou</div>
              </div>
              <div className={styles.projectLinks1}>
                <b className={styles.dposerUnProjet}>Déposer un projet</b>
              </div>
            </div>
          </div>
          <div className={styles.features}>
            <div className={styles.featureIcons}>
              <div className={styles.iconPairs}>
                <img
                  className={styles.materialSymbolslockIcon}
                  loading="lazy"
                  alt=""
                  src="/materialsymbolslock.svg"
                />
                <div className={styles.paiementScuriss}>Paiement sécurisés</div>
              </div>
              <div className={styles.iconPairs1}>
                <img
                  className={styles.mingcutepaperLineIcon}
                  loading="lazy"
                  alt=""
                  src="/mingcutepaperline.svg"
                />
                <div className={styles.missionsAssursPar}>
                  Missions assurés par cybermatch
                </div>
              </div>
              <div className={styles.legal}>
                <div className={styles.checkbox}>
                  <input className={styles.icroundCheckBox} type="checkbox" />
                </div>
                <div className={styles.documentsLgaux}>Documents légaux</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.testimonial}>
          <h3 className={styles.vousAllezAdorer}>
            Vous allez adorer cette nouvelle façon de collaborer
          </h3>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;
