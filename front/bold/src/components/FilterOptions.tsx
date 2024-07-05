import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import GroupComponent3 from "./GroupComponent3";
import GroupComponent2 from "./GroupComponent2";
import styles from "./FilterOptions.module.css";

export type FilterOptionsType = {
  className?: string;
};

const FilterOptions: FunctionComponent<FilterOptionsType> = ({
  className = "",
}) => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/frame-8");
  }, [navigate]);

  return (
    <div className={[styles.filterOptions, className].join(" ")}>
      <div className={styles.filterItems}>
        <div className={styles.filterHeader}>
          <h3 className={styles.filtrerPar}>Filtrer par</h3>
          <div className={styles.categoryFilterParent}>
            <div className={styles.categoryFilter}>
              <div className={styles.catgorie}>Catégorie</div>
              <div className={styles.categoryOptions}>
                <div className={styles.categoryOptionsChild} />
                <div className={styles.categoryDropdown}>
                  <img
                    className={styles.vectorIcon}
                    alt=""
                    src="/tag-type.svg"
                  />
                </div>
                <input
                  className={styles.catgorie1}
                  placeholder="catégorie"
                  type="text"
                />
              </div>
            </div>
            <div className={styles.frameChild} />
            <div className={styles.employmentTypeFilter}>
              <div className={styles.typeDemploi}>Type d’emploi</div>
              <div className={styles.employmentOptions}>
                <div className={styles.checkboxPair}>
                  <div className={styles.checkboxes}>
                    <div className={styles.stateLayer}>
                      <input className={styles.container} type="checkbox" />
                      <input className={styles.checkSmall} type="checkbox" />
                    </div>
                  </div>
                  <div className={styles.employmentLabels}>
                    <div className={styles.tempsPartiel}>Temps partiel</div>
                  </div>
                </div>
                <div className={styles.checkboxPair1}>
                  <div className={styles.checkboxes1}>
                    <div className={styles.stateLayer1}>
                      <input className={styles.container1} type="checkbox" />
                      <input className={styles.checkSmall1} type="checkbox" />
                    </div>
                  </div>
                  <div className={styles.pleinTempsWrapper}>
                    <div className={styles.pleinTemps}>Plein temps</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.frameItem} />
            <div className={styles.niveauDexprience}>Niveau d’expérience</div>
          </div>
        </div>
      </div>
      <div className={styles.freelancerProfiles}>
        <div
          className={styles.freelancerProfilesInner}
          onClick={onGroupContainerClick}
        >
          <GroupComponent3 />
        </div>
        <div className={styles.rectangleParent}>
          <div className={styles.frameInner} />
          <img
            className={styles.rectangleIcon}
            alt=""
            src="/rectangle-14-1@2x.png"
          />
          <div className={styles.frameWrapper}>
            <div className={styles.frameParent}>
              <div className={styles.aliceParent}>
                <div className={styles.alice}>Alice</div>
                <div className={styles.frameContainer}>
                  <div className={styles.vectorParent}>
                    <img
                      className={styles.vectorIcon1}
                      alt=""
                      src="/vector-3.svg"
                    />
                    <div className={styles.ellipseDiv} />
                  </div>
                </div>
                <div className={styles.parisWrapper}>
                  <div className={styles.paris}>Paris</div>
                </div>
              </div>
              <div className={styles.experteDevopsParent}>
                <div className={styles.experteDevops}>Experte DevOps</div>
                <div className={styles.frameGroup}>
                  <div className={styles.frameDiv}>
                    <img
                      className={styles.groupIcon}
                      alt=""
                      src="/group-10.svg"
                    />
                  </div>
                  <div className={styles.div}>(2)</div>
                </div>
              </div>
              <div className={styles.frameParent1}>
                <div className={styles.javaWrapper}>
                  <div className={styles.java}>Java</div>
                </div>
                <div className={styles.devopsWrapper}>
                  <div className={styles.devops}>DevOps</div>
                </div>
              </div>
              <div className={styles.jourWrapper}>
                <div className={styles.jour}>300€/jour</div>
              </div>
            </div>
          </div>
        </div>
        <GroupComponent2
          rectangle14="/rectangle-14-2@2x.png"
          maxime="Maxime"
          technicienRseau="Technicien réseau"
          prop="(12)"
          python="Python"
          jour="150€/jour"
        />
      </div>
    </div>
  );
};

export default FilterOptions;
