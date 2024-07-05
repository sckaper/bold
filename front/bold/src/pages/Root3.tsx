import { FunctionComponent } from "react";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent6 from "../components/FrameComponent6";
import GroupComponent from "../components/GroupComponent";
import styles from "./Root3.module.css";

const Root3: FunctionComponent = () => {
  return (
    <div className={styles.root}>
      <FrameComponent3 />
      <section className={styles.featuresContainerWrapper}>
        <div className={styles.featuresContainer}>
          <div className={styles.seConnecterWrapper}>
            <h3 className={styles.seConnecter}>Se connecter</h3>
          </div>
          <FrameComponent6 />
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

export default Root3;
