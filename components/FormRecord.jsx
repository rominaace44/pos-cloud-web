import styles from "@/styles/FormRecord.module.css";
import { useState } from "react";
export function Form() {
  const [values, setValues] = useState({
    companyName: "",
    email: "",
    phone: "",
    tipo_negocio: "",
  });
  const [error, setError] = useState({
    companyName: "",
    email: "",
    phone: "",
    tipo_negocio: "",
  });
  function handlerForm({ name, value }) {
    setValues({
      ...values,
      [name]: value,
    });
    console.log(values);
  }
  function validate() {
    // console.log("validando");

    if (values.companyName === "") {
      setError({
        ...error,
        companyName: "ingese un nombre valido",
      });
    }
  }
  return (
    <div className={styles.container}>
      <h2>Registrate y nos pondremos en contacto contigo.</h2>

      <label htmlFor="companyName"> Ingresa el nombre de tu negocio</label>
      <input
        type="text"
        class="form-control"
        placeholder="Negocio"
        id="companyName"
        name="companyName"
        onChange={(e) => handlerForm(e.target)}
        value={values.companyName}
        required
        autofocus
      ></input>
      <span
        style={{
          visibility: error.companyName ? "visible" : "hidden",
          color: "red",
        }}
      >
        {error.companyName}
      </span>
      <label htmlFor="companyName"> Ingresa tu E-mail</label>
      <input
        type="email"
        class="form-control"
        placeholder="E-mail"
        id="email"
        name="email"
        onChange={(e) => handlerForm(e.target)}
        required
      ></input>
      <label htmlFor="phone"> Ingresa un teléfono de contacto</label>
      <input
        type="number"
        class="form-control"
        placeholder="Teléfono"
        id="phone"
        name="phone"
        onChange={(e) => handlerForm(e.target)}
        required
      ></input>
      <div className={styles.select}>
        <label htmlFor="tipo-negocio" style={{ width: "100%" }}>
          {" "}
          Selecciona el rubro de tu negocio
        </label>
        <select
          id="tipo-negocio"
          name="tipo_negocio"
          onChange={(e) => handlerForm(e.target)}
        >
          <option value="gastronomia">Gastronomía</option>
          <option value="ropa">Tienda de Ropa</option>
          <option value="kiosco">Kiosco</option>
          <option value="ferreteria">Ferretería</option>
          <option value="supermercado">Supermercado</option>
          <option value="carniceria">Carnicería</option>
          <option value="articulos">Venta de artículos</option>
          <option value="otros">Otros</option>
        </select>
      </div>
      <div className={styles.containerButton}>
        <button
          type="button"
          class="btn btn-outline-primary btn-lg w-75 "
          onClick={() => validate()}
        >
          Quiero mi demo
        </button>
      </div>
    </div>
  );
}
