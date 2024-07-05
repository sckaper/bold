import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./GroupComponent.module.css";

export type GroupComponentType = {
  className?: string;

  /** Style props */
  propMarginLeft?: CSSProperties["marginLeft"];
  propWidth?: CSSProperties["width"];
  propAlignSelf?: CSSProperties["alignSelf"];
};

const GroupComponent: FunctionComponent<GroupComponentType> = ({
  className = "",
  propMarginLeft,
  propWidth,
  propAlignSelf,
}) => {
  const groupFooterStyle: CSSProperties = useMemo(() => {
    return {
      marginLeft: propMarginLeft,
      width: propWidth,
      alignSelf: propAlignSelf,
    };
  }, [propMarginLeft, propWidth, propAlignSelf]);

  return (
    <footer
      className={[styles.rectangleParent, className].join(" ")}
      style={groupFooterStyle}
    >
      <div className={styles.frameChild} />
      <div className={styles.footerContent}>
        <div className={styles.platformDescription}>
          <h3 className={styles.cybermatch}>CYBERMATCH</h3>
          <div className={styles.cybermatchEstUne}>
            CyberMatch est une plateforme en ligne qui met en relation des
            entreprises avec des experts freelances en cybersécurité.
          </div>
        </div>
      </div>
      <div className={styles.footerLinks}>
        <div className={styles.footerLinksContent}>
          <b className={styles.aide}>Aide</b>
          <div className={styles.helpLinks}>
            <div className={styles.faq}>FAQ</div>
            <div className={styles.guides}>Guides</div>
            <div className={styles.support}>Support</div>
            <div className={styles.blog}>Blog</div>
          </div>
        </div>
        <div className={styles.about}>
          <div className={styles.aboutContent}>
            <div className={styles.aboutDetails}>
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
      <div className={styles.socialLinks}>
        <b className={styles.social}>Social</b>
        <div className={styles.socialIcons}>
          <img className={styles.socialIconOne} alt="" src="/vector-9.svg" />
          <img className={styles.socialIconTwo} alt="" src="/vector-10.svg" />
          <img
            className={styles.rilinkedinFillIcon}
            loading="lazy"
            alt=""
            src="/rilinkedinfill.svg"
          />
        </div>
      </div>
    </footer>
  );
};

export default GroupComponent;
