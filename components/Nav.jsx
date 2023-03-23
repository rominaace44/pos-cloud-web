import Link from "next/link";
import styles from "@/styles/Nav.module.css";
import { BurguerNav } from "./Burguer";
import { useState } from "react";

export function Nav() {
  const [active, setActive] = useState(false);
  function handleClik() {
    setActive(!active);
  }
  return (
    <div className={styles.container}>
      <h1>POS CLOUD</h1>
      <div className={active ? styles.groupActive : styles.group}>
        <Link href="#" onClick={handleClik}>
          servicios
        </Link>
        <Link href="#" onClick={handleClik}>
          {" "}
          Contactos
        </Link>

        <Link href="#" onClick={handleClik}>
          Acerca de
        </Link>
      </div>
      <div className={styles.burguerButton}>
        <BurguerNav active={active} handleClik={handleClik} />
      </div>
      <div
        className={active ? styles.backgroundActive : styles.background}
      ></div>
    </div>
  );
}
