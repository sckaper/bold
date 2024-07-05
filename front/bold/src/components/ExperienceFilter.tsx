import { FunctionComponent } from "react";
import GroupComponent3 from "./GroupComponent3";
import GroupComponent2 from "./GroupComponent2";
import styles from "./ExperienceFilter.module.css";

export type ExperienceFilterType = {
  className?: string;
};

const ExperienceFilter: FunctionComponent<ExperienceFilterType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.experienceFilter, className].join(" ")}>
      <div className={styles.yearsExperience}>
        <div className={styles.experienceOptions}>
          <div className={styles.experienceYears}>
            <div className={styles.yearsCheckboxes}>
              <div className={styles.checkboxes}>
                <div className={styles.stateLayer}>
                  <input className={styles.container} type="checkbox" />
                  <input className={styles.checkSmall} type="checkbox" />
                </div>
              </div>
              <div className={styles.yearLabel}>
                <div className={styles.ans}>0-2 ans</div>
              </div>
            </div>
            <div className={styles.yearsCheckboxes1}>
              <div className={styles.checkboxes1}>
                <div className={styles.stateLayer1}>
                  <input className={styles.container1} type="checkbox" />
                  <input className={styles.checkSmall1} type="checkbox" />
                </div>
              </div>
              <div className={styles.ansWrapper}>
                <div className={styles.ans1}>3-7 ans</div>
              </div>
            </div>
            <div className={styles.yearsCheckboxes2}>
              <div className={styles.checkboxes2}>
                <div className={styles.stateLayer2}>
                  <input className={styles.container2} type="checkbox" />
                  <input className={styles.checkSmall2} type="checkbox" />
                </div>
              </div>
              <div className={styles.ansContainer}>
                <div className={styles.ans2}>+7 ans</div>
              </div>
            </div>
          </div>
          <div className={styles.experienceDivider} />
        </div>
      </div>
      <GroupComponent3
        propAlignSelf="unset"
        propFlex="unset"
        propHeight="458px"
        propWidth="406px"
      />
      <div className={styles.freelancerCard}>
        <GroupComponent2
          rectangle14="/rectangle-14-1@2x.png"
          maxime="Alice"
          technicienRseau="Experte DevOps"
          prop="(2)"
          python="DevOps"
          jour="300€/jour"
          propHeight="unset"
          propFlex="1"
        />
        <GroupComponent2
          rectangle14="/rectangle-14-2@2x.png"
          maxime="Maxime"
          technicienRseau="Technicien réseau"
          prop="(12)"
          python="Python"
          jour="150€/jour"
          propHeight="unset"
          propFlex="1"
        />
      </div>
    </div>
  );
};

export default ExperienceFilter;
