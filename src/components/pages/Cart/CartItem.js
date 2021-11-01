import { useState } from "react";
import { useCart, useCartAction } from "../../../provider/cartProvider";
import styles from "./CartItem.module.css";
import { BiTrash } from "react-icons/bi";


const CartItem = ({ item, onChange, onIncrement, onDecrement }) => {
  return (
    <div className={styles.cartItemContainer}>
      <div className={styles.cartImagePart}>
        <img
          className={styles.cartProductImage}
          src={require(`../../../assets/${item.path}`).default}
          alt="ProductImage"
          width="100px"
        ></img>
      </div>
      <div className={styles.textPart}>
        <p>{item.title}</p>
        <p>${item.price}</p>
      </div>

      <div className={styles.cartItemQty}>
        <span>{item.quantity}</span>
        <button onClick={onIncrement} className={styles.incrBtn}>
          +
        </button>

        <button onClick={onDecrement} className={styles.decrBtn}>
          {item.quantity > 1 ? "-" : <BiTrash />}
        </button>
      </div>
    </div>
  );
};

export default CartItem;
