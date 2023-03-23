import style from "@/styles/ImageHead.module.css";

export function Card({ title, description }) {
  return (
    <div className={style.containerCard}>
      <h1>{title}</h1>
      <p>{description && description}</p>
      <p>leer mas</p>
    </div>
  );
}
