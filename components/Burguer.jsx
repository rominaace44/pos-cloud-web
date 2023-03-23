import styles from "@/styles/BurguerNav.module.css";

export function BurguerNav({ active, handleClik }) {
  return (
    <>
      <div className={styles.burguer} onClick={handleClik}>
        <div>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </>
  );
}
