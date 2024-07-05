import { FunctionComponent } from "react";
import FrameComponent5 from "../components/FrameComponent5";
import FrameComponent4 from "../components/FrameComponent4";
import FilterOptions from "../components/FilterOptions";
import ExperienceFilter from "../components/ExperienceFilter";
import GroupComponent from "../components/GroupComponent";
import styles from "./Desktop.module.css";

const Desktop: FunctionComponent = () => {
  return (
    <div className={styles.desktop}>
      <FrameComponent5 />
      <FrameComponent4 />
      <section className={styles.filterDropdown}>
        <div className={styles.dropdownContent}>
          <FilterOptions />
          <ExperienceFilter />
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

export default Desktop;
