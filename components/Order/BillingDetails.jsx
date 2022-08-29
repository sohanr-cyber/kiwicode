import React from "react";
import styles from "../../styles/Order/Form.module.css";
const BillingDetails = () => {
  return (
    <div className={styles.form__container}>
      <div className={styles.form__1}>
        <h3>Billing Details</h3>
        <form>
          <input
            type="text"
            placeholder="First Name"
            className={styles.form__field}
          />
          <input
            type="text"
            placeholder="Last Name"
            className={styles.form__field}
          />
          <input
            placeholder="Phone"
            type="text"
            className={styles.form__field}
          />
          <input
            type="text"
            placeholder="Email Address"
            className={styles.form__field}
          />

          <input type="text" className={styles.form__field} />
        </form>
      </div>

      <div className={styles.form__2}>
        <h3>Additional Information</h3>
        <form>
          <textarea placeholder="Order Notes"></textarea>
        </form>
      </div>
    </div>
  );
};

export default BillingDetails;
