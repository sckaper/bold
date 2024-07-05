import { FunctionComponent } from "react";
import styles from "./FrameComponent4.module.css";

export type FrameComponent4Type = {
  className?: string;
};

const FrameComponent4: FunctionComponent<FrameComponent4Type> = ({
  className = "",
}) => {
  return (
    <section className={[styles.trustContentWrapper, className].join(" ")}>
      <div className={styles.trustContent}>
        <div className={styles.trustContentChild} />
        <div className={styles.trustHeader}>
          <h1 className={styles.ilsNousFont}>Ils nous font confiances</h1>
        </div>
        <div className={styles.trustImages}>
          <div className={styles.singleImage}>
            <img
              className={styles.image1Icon}
              loading="lazy"
              alt=""
              src="/image-1@2x.png"
            />
          </div>
          <img
            className={styles.image2Icon}
            loading="lazy"
            alt=""
            src="/image-2@2x.png"
          />
          <div className={styles.image3Wrapper}>
            <img
              className={styles.image3Icon}
              loading="lazy"
              alt=""
              src="/image-3@2x.png"
            />
          </div>
          <div className={styles.imagePair}>
            <img
              className={styles.image4Icon}
              loading="lazy"
              alt=""
              src="/image-4@2x.png"
            />
          </div>
          <div className={styles.imagePair1}>
            <img
              className={styles.image5Icon}
              loading="lazy"
              alt=""
              src="/image-5@2x.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent4;
