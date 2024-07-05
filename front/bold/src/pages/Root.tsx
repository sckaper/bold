import { FunctionComponent } from "react";
import Header from "../components/Header";
import Form from "../components/Form";
import GroupComponent from "../components/GroupComponent";
import styles from "./Root.module.css";

const Root: FunctionComponent = () => {
  return (
    <div className={styles.root}>
      <Header />
      <Form crationDunCompteEntrepris="Création d’un compte freelance" />
      <GroupComponent
        propMarginLeft="unset"
        propWidth="unset"
        propAlignSelf="stretch"
      />
    </div>
  );
};

export default Root;
