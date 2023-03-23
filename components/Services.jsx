import styles from "@/styles/Services.module.css";
import { CardServices } from "./CardServices";
import { IoIosCheckmarkCircle } from "react-icons/io";

export function Services() {
  return (
    <div className={styles.container}>
      <div className={styles.description}>
        <div class="col-4">
          <h1>
            Explora los servicios <br />
            que ofrecemos para vos.
          </h1>
        </div>
        <div class="col-8 d-flex justify-content-around">
          <div style={{ display: "flex", alignContent: "center" }}>
            <IoIosCheckmarkCircle size={35} />
            <h2>Ventas rápidas</h2>
          </div>
          <div
            style={{
              display: "flex",
              alignContent: "center",
            }}
          >
            <IoIosCheckmarkCircle size={35} />
            <h2>Gestión de mesas</h2>
          </div>
          <div style={{ display: "flex", alignContent: "center" }}>
            <IoIosCheckmarkCircle size={35} />
            <h2>Delivery</h2>
          </div>
          <div style={{ display: "flex", alignContent: "center" }}>
            <IoIosCheckmarkCircle size={35} />
            <h2>E-commerce</h2>
          </div>
        </div>
        {/* <p>Todos nuestros servicios son personalizados para cada cliente.</p>
        <p>
          Contamos con un conjunto de herramientas para poder cubrir diferentes
          áreas de tu negocio.
        </p> */}
      </div>
      <div className={styles.grid}>
        <div class="row">
          <div class="col">
            <a
              // class="btn btn btn-info btn-lg"
              // className={styles.buttonleftinto}
              data-bs-toggle="collapse"
              href="#collapseExample"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              <div className={styles.posresto}>
                <h1 className={styles.buttonLeft}>Pos-Resto</h1>
              </div>
            </a>
            <div class="collapse " id="collapseExample">
              <div className={styles.card}>
                <p>
                  La mejor manera de controlar tus mesas y mozos. <br /> Todo
                  para el control de tus envíos y entregas.
                </p>
                <div className={styles.buttonCard}>
                  <button type="button" class="btn btn-outline-primary">
                    <a href="/contact">Quiero mi demo</a>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* ---- */}

          <div class="col">
            <a
              // class="btn btn btn-info btn-lg"
              // className={styles.buttonleftinto}
              data-bs-toggle="collapse"
              href="#collapseExampleB"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExampleB"
            >
              <div className={styles.postienda}>
                <h1 className={styles.buttonLeft}>Pos-Tienda</h1>
              </div>
            </a>
            <div class="collapse" id="collapseExampleB">
              <div className={styles.card}>
                <p>
                  Interfaz amigable y eficaz para ventas rápidas. <br /> Publicá
                  tus productos online en tu propio comercio electrónico.
                </p>
                <div className={styles.buttonCard}>
                  <button type="button" class="btn btn-outline-primary">
                    <a href="/contact">Quiero mi demo</a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.buttonDemo}>
        <div class="col-5 d-flex align-items-center">
          <a href="/contact" class=" btn-lg w-50 ">
            <button type="button" class="btn btn-outline-light btn-lg w-75 ">
              Quiero mi demo
            </button>
          </a>
        </div>
        <div class="col-7">
          <h1 style={{ color: "white" }}>
            Contamos con un conjunto de herramientas para poder cubrir
            diferentes áreas de tu negocio.
          </h1>
        </div>
      </div>
    </div>
  );
}
