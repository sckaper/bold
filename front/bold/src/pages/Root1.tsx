import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent3 from "../components/FrameComponent3";
import HomeAbout from "../components/HomeAbout";
import GroupComponent from "../components/GroupComponent";
import styles from "./Root1.module.css";

const Root1: FunctionComponent = () => {
  const navigate = useNavigate();

  const onMeConnecterTextClick = useCallback(() => {
    navigate("/frame-9");
  }, [navigate]);

  return (
    <div className={styles.root}>
      <FrameComponent3 onMeConnecterTextClick={onMeConnecterTextClick} />
      <HomeAbout />
      <GroupComponent
        propMarginLeft="unset"
        propWidth="unset"
        propAlignSelf="stretch"
      />
    </div>
  );
};

export default Root1;
