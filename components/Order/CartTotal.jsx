import React from "react";
import styles from "../../styles/Order/CartTotal.module.css";

const CartTotal = () => {
  return (
    <div className={styles.cart__total__container}>
      <div className={styles.cart__total__wrapper}>
        <table className={styles.table}>
          <tr>
            <td>Subtotal</td>
            <td>$78.00</td>
          </tr>
          <tr>
            <td>Total</td>
            <td>
              <b>$78.00</b>
            </td>
          </tr>
          <tr>
            <td>Subtotal</td>
            <td>$78.00</td>
          </tr>
          <tr>
            <td>Subtotal</td>
            <td>£78.00 every 3 months</td>
          </tr>
          <tr>
            <td>Recurring total</td>
            <td> £78.00 every 3 months First renewal: November 5, 2022</td>
          </tr>
        </table>
        <div className={styles.btn}>Proceed to checkout</div>
      </div>
    </div>
  );
};

export default CartTotal;
