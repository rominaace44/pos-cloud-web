import { ImageHead } from "@/components/ImageHead";
import Head from "next/head";
import styles from "@/../styles/Contact.module.css";
import { Form } from "@/components/FormRecord";
export default function Contact() {
  return (
    <>
      <Head>
        <title>Pos Cloud-Registro</title>
        <meta
          name="description"
          content="Sistema de gestión y punto de venta online de fácil uso y configuración para administrar tu negocio de manera eficiente. Gratis tu facturación electrónica."
        />
        <meta
          name="keywords"
          content="pos, cloud, poscloud, point of sale, punto de venta, sistema, programa, gestion, factura, electrónica, factura electrónica, sistema contable, pos resto, pos mostrador, pos delivery, resto, mostrador, delivery, ticket, online, sistema online, sistema facil, gestion, afip"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD"
          crossorigin="anonymous"
        />
      </Head>
      <main>
        <ImageHead />
        <Form />
      </main>
      {/* <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN"
        crossorigin="anonymous"
      ></script> */}
    </>
  );
}
