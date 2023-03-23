import styles from "@/styles/ImageHead.module.css";
import { Card } from "./Card";

export function ImageHead() {
  return (
    <div className={styles.container}>
      <div>
        <h1 className="animate__animated animate__backInLeft animate__slower">
          POS CLOUD
        </h1>
        <p className="animate__animated  animate__fadeIn animate__delay-3s">
          Un solución en la nube
        </p>
      </div>
      <div className={styles.imgA}></div>
    </div>
  );
}
