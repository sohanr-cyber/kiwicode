import React from "react";
import styles from "../../styles/Order/CartTable.module.css";

const Cart = () => {
  return (
    <div className={styles.cart__table__container}>
      <table>
        <tr>
          <th>Product</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Subtotal</th>
          <th></th>
        </tr>
        <tr>
          <td>This is sample price of monthly</td>
          <td>78$ every three month</td>
          <td>1</td>
          <td>78$ every three month</td>
          <td>X</td>
        </tr>
        <tr>
          <td>
            <input placeholder="couple code" type="text" />
          </td>
          <td></td>
          <td></td>
          <td>Apply Coupon</td>
        </tr>
      </table>
    </div>
  );
};

export default Cart;
