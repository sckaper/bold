import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent1 from "../components/FrameComponent1";
import GroupComponent from "../components/GroupComponent";
import styles from "./Root2.module.css";

const Root2: FunctionComponent = () => {
  const navigate = useNavigate();

  const onCYBERMATCHTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.root}>
      <FrameComponent1 onCYBERMATCHTextClick={onCYBERMATCHTextClick} />
      <section className={styles.freelancerProfile}>
        <div className={styles.frameParent}>
          <div className={styles.rectangleParent}>
            <img
              className={styles.frameChild}
              loading="lazy"
              alt=""
              src="/rectangle-15@2x.png"
            />
            <div className={styles.frameGroup}>
              <div className={styles.frameContainer}>
                <div className={styles.matthieuParent}>
                  <h2 className={styles.matthieu}>Matthieu</h2>
                  <div className={styles.expertEnCyberscurit}>
                    Expert en cybersécurité
                  </div>
                  <div className={styles.frameDiv}>
                    <img
                      className={styles.frameItem}
                      loading="lazy"
                      alt=""
                      src="/group-26.svg"
                    />
                    <div className={styles.div}>(2)</div>
                  </div>
                  <div className={styles.missionsTermines}>
                    21 missions terminées
                  </div>
                </div>
                <div className={styles.frameWrapper}>
                  <div className={styles.frameParent1}>
                    <button className={styles.rectangleGroup}>
                      <div className={styles.frameInner} />
                      <div className={styles.proposerUneMision}>
                        Proposer une mision
                      </div>
                    </button>
                    <div className={styles.laMissionNeDmarreraQueSiWrapper}>
                      <div className={styles.laMissionNe}>
                        La mission ne démarrera que si vous acceptez le devis.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.frameParent2}>
                <textarea
                  className={styles.groupTextarea}
                  placeholder="Tarif"
                  rows={6}
                  cols={13}
                />
                <textarea
                  className={styles.frameChild1}
                  placeholder="Experience"
                  rows={6}
                  cols={13}
                />
                <textarea
                  className={styles.frameChild2}
                  placeholder="Lieux"
                  rows={6}
                  cols={13}
                />
              </div>
            </div>
          </div>
          <div className={styles.frameParent3}>
            <div className={styles.rectangleContainer}>
              <div className={styles.rectangleDiv} />
              <div className={styles.description}>Description</div>
              <div className={styles.ingnieurMathsPhysiqueContainer}>
                <p className={styles.ingnieurMathsPhysique}>
                  Ingénieur (Maths, Physique, Logiciel : Simulation Numérique,
                  Machine Learning, Data Backend, Python, RealTime).
                </p>
                <p className={styles.dfinitionDuBesoin}>
                  Définition du besoin.
                </p>
                <p className={styles.architectureEtDveloppement}>
                  Architecture et Développement d'applications orientées Cloud
                  et Machine Learning (web ou mobile).
                </p>
                <p className={styles.organisationDesDveloppement}>
                  Organisation des développements et des équipes.
                </p>
              </div>
            </div>
            <div className={styles.frameParent4}>
              <div className={styles.groupDiv}>
                <div className={styles.frameChild3} />
                <div className={styles.compttences}>Comptétences</div>
                <div className={styles.frameParent5}>
                  <button className={styles.cyberscuritWrapper}>
                    <div className={styles.cyberscurit}>Cybersécurité</div>
                  </button>
                  <div className={styles.devopsWrapper}>
                    <div className={styles.devops}>DevOps</div>
                  </div>
                </div>
              </div>
              <div className={styles.rectangleParent1}>
                <div className={styles.frameChild4} />
                <div className={styles.expriences}>Expériences</div>
                <div className={styles.totalEnergieExpertContainer}>
                  <p className={styles.totalEnergie}>Total Energie</p>
                  <p className={styles.expertEnCyberscurit1}>
                    <span>
                      <span className={styles.expertEnCyberscurit2}>
                        Expert en cybersécurité
                      </span>
                    </span>
                  </p>
                  <p className={styles.editionDeLogiciels}>
                    <span>
                      <span className={styles.editionDeLogiciels1}>
                        EDITION DE LOGICIELS
                      </span>
                    </span>
                  </p>
                  <p className={styles.blankLine}>
                    <span>
                      <span className={styles.blankLine1}>&nbsp;</span>
                    </span>
                  </p>
                  <p className={styles.analyseDesRisquesConduire}>
                    <span>
                      <span className={styles.analyseDesRisques}>
                        Analyse des Risques : Conduire des évaluations
                        approfondies des risques de sécurité pour identifier les
                        vulnérabilités dans les systèmes informatiques de
                        l'entreprise. Utilisation de frameworks tels que NIST et
                        ISO 27001 pour garantir la conformité et la robustesse
                        des mesures de sécurité.
                      </span>
                    </span>
                  </p>
                  <p className={styles.blankLine2}>
                    <span>
                      <span className={styles.blankLine3}>&nbsp;</span>
                    </span>
                  </p>
                  <p className={styles.gestionDesIncidentsRpond}>
                    <span>
                      <span className={styles.gestionDesIncidents}>
                        Gestion des Incidents : Répondre aux incidents de
                        sécurité en temps réel, mener des enquêtes sur les
                        violations de données, et mettre en œuvre des mesures
                        correctives pour minimiser les impacts. Coordination
                        avec les équipes IT pour résoudre les problèmes et
                        prévenir de futures occurrences.
                      </span>
                    </span>
                  </p>
                  <p className={styles.dveloppementDePolitiquesDe}>
                    <span>
                      <span className={styles.dveloppementDePolitiques}>
                        Développement de Politiques de Sécurité : Rédiger et
                        maintenir des politiques de sécurité de l'information,
                        des procédures et des directives pour protéger les
                        actifs de l'entreprise. Formation du personnel sur les
                        meilleures pratiques en matière de sécurité.
                      </span>
                    </span>
                  </p>
                  <p className={styles.blankLine4}>
                    <span>
                      <span className={styles.blankLine5}>&nbsp;</span>
                    </span>
                  </p>
                  <p className={styles.implmentationDeSolutionsDe}>
                    <span>
                      <span className={styles.implmentationDeSolutions}>
                        Implémentation de Solutions de Sécurité : Concevoir,
                        installer et configurer des solutions de sécurité telles
                        que des pare-feu, des systèmes de détection et de
                        prévention des intrusions (IDS/IPS), et des solutions de
                        gestion des informations et des événements de sécurité
                        (SIEM). Assurer le suivi et la mise à jour régulière de
                        ces systèmes pour garantir une protection continue.
                      </span>
                    </span>
                  </p>
                  <p className={styles.blankLine6}>
                    <span>
                      <span className={styles.blankLine7}>&nbsp;</span>
                    </span>
                  </p>
                  <p className={styles.testsDePntrationConduir}>
                    <span>
                      <span className={styles.testsDePntration}>
                        Tests de Pénétration : Conduire des tests de pénétration
                        réguliers pour évaluer l'efficacité des mesures de
                        sécurité en place. Identifier et exploiter les failles
                        de sécurité potentielles pour renforcer les défenses.
                      </span>
                    </span>
                  </p>
                  <p className={styles.auditEtConformitRaliser}>
                    <span>
                      <span className={styles.auditEtConformit}>
                        Audit et Conformité : Réaliser des audits internes et
                        externes pour garantir la conformité aux réglementations
                        locales et internationales en matière de sécurité des
                        données. Préparer des rapports détaillés et recommander
                        des améliorations.
                      </span>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <GroupComponent
        propMarginLeft="unset"
        propWidth="unset"
        propAlignSelf="stretch"
      />
    </div>
  );
};

export default Root2;
