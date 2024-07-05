import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent1 from "../components/FrameComponent1";
import GroupComponent1 from "../components/GroupComponent1";
import FrameComponent from "../components/FrameComponent";
import FreelancerDescription from "../components/FreelancerDescription";
import GroupComponent from "../components/GroupComponent";
import styles from "./Index1.module.css";

const Index1: FunctionComponent = () => {
  const navigate = useNavigate();

  const onFreelancesTextClick = useCallback(() => {
    navigate("/frame-3");
  }, [navigate]);

  return (
    <div className={styles.index1}>
      <div className={styles.indexChild} />
      <FrameComponent1 onFreelancesTextClick={onFreelancesTextClick} />
      <section className={styles.indexInner}>
        <div className={styles.frameParent}>
          <div className={styles.heroContentParent}>
            <div className={styles.heroContent}>
              <h3 className={styles.cybermatch}>CYBERMATCH</h3>
            </div>
            <div className={styles.scurisezVosDonnes}>
              Sécurisez vos données avec les meilleurs experts en cybersécurité
            </div>
          </div>
          <GroupComponent1 />
        </div>
      </section>
      <div className={styles.frameGroup}>
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <div className={styles.frameItem} />
        </div>
        <img
          className={styles.frameInner}
          loading="lazy"
          alt=""
          src="/rectangle-12@2x.png"
        />
      </div>
      <FrameComponent />
      <section className={styles.freelancerContentWrapper}>
        <div className={styles.freelancerContent}>
          <div className={styles.freelancerHeading}>
            <h3 className={styles.boostezVotreCarrire}>
              Boostez votre carrière freelance avec CyberMatch
            </h3>
            <div className={styles.freelancerCallToAction}>
              <FreelancerDescription
                vousTesUnExpertEnCyberscu="Vous êtes un expert en cybersécurité et cherchez à maximiser votre potentiel en tant que freelance ? CyberMatch est la plateforme idéale pour propulser votre carrière vers de nouveaux sommets."
                avecCyberMatchVousAvezAcc="Avec CyberMatch, vous avez accès à une multitude de projets qualifiés et bien rémunérés provenant d'entreprises de toutes tailles et de divers secteurs. Que vous soyez spécialisé dans les tests d'intrusion, la protection des données ou la conformité réglementaire, vous trouverez des missions correspondant à vos compétences."
                devenirFreelance="Devenir freelance"
              />
              <div className={styles.matchContentWrapper}>
                <div className={styles.matchContent}>
                  <img
                    className={styles.matchImageIcon}
                    alt=""
                    src="/rectangle-12-1@2x.png"
                  />
                  <div className={styles.matchInfo}>
                    <div className={styles.matchInfoChild} />
                    <div className={styles.nouveauMatch}>Nouveau match !</div>
                    <div className={styles.matchProfile}>
                      <img
                        className={styles.image6Icon}
                        alt=""
                        src="/image-6@2x.png"
                      />
                    </div>
                    <div className={styles.matchExpertise}>
                      <div className={styles.expertEnCyberscurit}>
                        Expert en cybersécurité
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.clientContentParent}>
            <div className={styles.clientContent}>
              <h3 className={styles.trouvezLeBon}>
                Trouvez le bon profil en deux clics avec CyberMatch
              </h3>
              <img
                className={styles.clientImageIcon}
                alt=""
                src="/rectangle-12-2@2x.png"
              />
            </div>
            <div className={styles.profileContentParent}>
              <div className={styles.profileContent}>
                <div className={styles.profileCard}>
                  <div className={styles.rectangleGroup}>
                    <div className={styles.rectangleDiv} />
                    <div className={styles.frontEndDev}>Front end dev</div>
                    <div className={styles.frontEndIcon}>
                      <img
                        className={styles.skillIcon}
                        alt=""
                        src="/vector-11.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.profileInfo}>
                    <div className={styles.rectangleContainer}>
                      <div className={styles.frameChild1} />
                      <div className={styles.namePair}>
                        <div className={styles.maxime}>Maxime</div>
                        <div className={styles.profileLocation}>
                          <div className={styles.locationMarker}>
                            <div className={styles.toulouseMarker} />
                          </div>
                          <div className={styles.paris}>Paris</div>
                        </div>
                      </div>
                      <div className={styles.expertise}>
                        <div className={styles.skills}>
                          <img
                            className={styles.skillsChild}
                            alt=""
                            src="/group-10.svg"
                          />
                        </div>
                        <div className={styles.skillSeparator}>(2)</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.profileInfo1}>
                    <div className={styles.groupDiv}>
                      <div className={styles.frameChild2} />
                      <div className={styles.aliceParent}>
                        <div className={styles.alice}>Alice</div>
                        <div className={styles.frameContainer}>
                          <div className={styles.ellipseWrapper}>
                            <div className={styles.ellipseDiv} />
                          </div>
                          <div className={styles.toulouse}>Toulouse</div>
                        </div>
                      </div>
                      <div className={styles.frameDiv}>
                        <div className={styles.frameWrapper}>
                          <img
                            className={styles.groupIcon}
                            alt=""
                            src="/group-10.svg"
                          />
                        </div>
                        <div className={styles.div}>(24)</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <FreelancerDescription
                vousTesUnExpertEnCyberscu="Vous avez besoin d'un expert en cybersécurité pour sécuriser vos données, réaliser des tests d'intrusion ou assurer la conformité réglementaire ? CyberMatch est la solution parfaite pour trouver rapidement et facilement le freelance qu'il vous faut."
                avecCyberMatchVousAvezAcc="Avec CyberMatch, accédez à un vivier de freelances soigneusement sélectionnés et certifiés. Vous pouvez consulter les profils détaillés, y compris les compétences, expériences, certifications et évaluations des freelances."
                devenirFreelance="Trouver un freelance"
                propFlex="unset"
                propMinWidth="unset"
                propWidth="547px"
              />
            </div>
          </div>
        </div>
      </section>
      <GroupComponent />
    </div>
  );
};

export default Index1;
