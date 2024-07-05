import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Root.module.css";

// @ts-ignore
const Root: FunctionComponent = ({ className = "" }) => {
  const navigate = useNavigate();

  const onCYBERMATCHTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onMeConnecterTextClick = useCallback(() => {
    navigate("/frame-9");
  }, [navigate]);

  return (
    <div className={[styles.root, className].join(" ")}>
      <section className={styles.header}>
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
              <a
                className={styles.meConnecter}
                onClick={onMeConnecterTextClick}
              >
                Me connecter
              </a>
            </div>
          </div>
        </header>
      </section>
      <section className={styles.form}>
        <div className={styles.formContainer}>
          <div className={styles.formHeading}>
            <h3 className={styles.crationDunCompte}>
            </h3>
          </div>
          <button className={styles.googleAuth}>
            <div className={styles.googleAuthChild} />
            <img
              className={styles.devicongoogle}
              alt=""
              src="/devicongoogle.svg"
            />
            <div className={styles.googleButton}>
              <div className={styles.continuerAvecGoogle}>
                Continuer avec google
              </div>
            </div>
          </button>
          <div className={styles.divider}>
            <div className={styles.frameParent}>
              <div className={styles.lineWrapper}>
                <div className={styles.frameItem} />
              </div>
              <div className={styles.ou}>ou</div>
              <div className={styles.lineContainer}>
                <div className={styles.frameInner} />
              </div>
            </div>
          </div>
          <form className={styles.inputs}>
            <div className={styles.inputFields}>
              <div className={styles.nameFields}>
                <div className={styles.loginFields}>
                  <div className={styles.loginFieldsChild} />
                  <input className={styles.nom} placeholder="Nom" type="text" />
                </div>
                <div className={styles.surnameField}>
                  <div className={styles.surnameFieldChild} />
                  <input
                    className={styles.prnom}
                    placeholder="Prénom"
                    type="text"
                  />
                </div>
              </div>
              <div className={styles.nameFields1}>
                <div className={styles.nameFieldsChild} />
                <input
                  className={styles.email}
                  placeholder="Email"
                  type="text"
                />
              </div>
              <div className={styles.nameFields2}>
                <div className={styles.nameFieldsItem} />
                <input
                  className={styles.motDePasse}
                  placeholder="Mot de passe"
                  type="text"
                />
              </div>
              <div className={styles.nameFields3}>
                <div className={styles.nameFieldsInner} />
                <input className={styles.pays} placeholder="Pays" type="text" />
              </div>
            </div>
            <div className={styles.agreement}>
              <div className={styles.checkboxContainer}>
                <div className={styles.checkboxes}>
                  <div className={styles.stateLayer}>
                    <input className={styles.container} type="checkbox" />
                  </div>
                </div>
                <div className={styles.jeSuisDaccordAvecLesCondWrapper}>
                  <div className={styles.jeSuisDaccord}>
                    Je suis d’accord avec les conditions d’utilisation du site
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.submit}>
              <button className={styles.rectangleGroup}>
                <div className={styles.rectangleDiv} />
                <div className={styles.sinscrire}>S’inscrire</div>
              </button>
            </div>
          </form>
        </div>
      </section>
      <footer className={styles.rectangleContainer}>
        <div className={styles.frameChild1} />
        <div className={styles.footerContent}>
          <div className={styles.about}>
            <h3 className={styles.cybermatch1}>CYBERMATCH</h3>
            <div className={styles.cybermatchEstUne}>
              CyberMatch est une plateforme en ligne qui met en relation des
              entreprises avec des experts freelances en cybersécurité.
            </div>
          </div>
        </div>
        <div className={styles.help}>
          <div className={styles.helpLinks}>
            <b className={styles.aide}>Aide</b>
            <div className={styles.helpItems}>
              <div className={styles.faq}>FAQ</div>
              <div className={styles.guides}>Guides</div>
              <div className={styles.support}>Support</div>
              <div className={styles.blog1}>Blog</div>
            </div>
          </div>
          <div className={styles.aboutUs}>
            <div className={styles.aboutLinks}>
              <div className={styles.aboutContent}>
                <b className={styles.aPropos}>A propos</b>
                <div className={styles.aboutItems}>
                  <div className={styles.aProposDe}>A propos de cybermatch</div>
                  <div className={styles.cguCgv}>{`CGU & CGV`}</div>
                  <div className={styles.protectionDesDonnes}>
                    Protection des données
                  </div>
                  <div className={styles.siteMap}>Site map</div>
                </div>
              </div>
            </div>
            <div className={styles.cybermatchAllRights}>
              © 2024 CYBERMATCH. ALL RIGHTS RESERVED.
            </div>
          </div>
        </div>
        <div className={styles.socials}>
          <b className={styles.social}>Social</b>
          <div className={styles.socialIcons}>
            <img
              className={styles.vectorIcon}
              loading="lazy"
              alt=""
              src="/vector-9.svg"
            />
            <img className={styles.vectorIcon1} alt="" src="/vector-10.svg" />
            <img
              className={styles.rilinkedinFillIcon}
              loading="lazy"
              alt=""
              src="/rilinkedinfill.svg"
            />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Root;
