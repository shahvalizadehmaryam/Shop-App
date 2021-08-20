import { useState } from "react";
import { useCart, useCartAction } from "../../provider/cartProvider";
import styles from "./CartItem.module.css";
import { BiTrash } from "react-icons/bi";
const CartItem = ({ item, onChange, onIncrement, onDecrement }) => {
  const cartData = useCart();
  const cartDispatcher = useCartAction();
  const [inputValue, setInputValue] = useState(1);

  return (
    <div className={styles.cartItemContainer}>
      <p>{item.title}</p>
      <p>${item.price}</p>
      {/* <p>Quantity:{item.quantity}</p> */}
      <div className={styles.cartItemQty}>
        <span>{item.quantity}</span>
        <button onClick={onIncrement} className={styles.incrBtn}>
          +
        </button>

        <button onClick={onDecrement} className={styles.decrBtn}>
          {item.quantity > 1 ? "-" : <BiTrash style={{ color: "#991b1b" }} />}
        </button>
      </div>
    </div>
  );
};

export default CartItem;
