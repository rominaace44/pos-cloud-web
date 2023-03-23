import styles from "@/styles/CardServices.module.css";

export function CardServices({ name, description }) {
  return (
    <div className={styles.container}>
      {/* <div className={styles.containerImg}>imagen</div>
      <h2>{name}</h2>
      <p>{description}</p> */}

      {/* <div class="card mb-3" style="max-width: 540px;">
        <div class="row g-0">
          <div class="col-md-4">
            <img src="..." class="img-fluid rounded-start" alt="..." />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p class="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}
