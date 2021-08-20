import { useState } from "react";
import Modal from "../../Modal/Modal";
import { useCart, useCartAction } from "../../provider/cartProvider";
import styles from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartData = useCart();
  const cartDispatcher = useCartAction();
  // cartDispatcher({ type: "LIST" });
  console.log("cart.js", cartData);
  // const cartItem = cart.map((p) => p);
  // console.log(cartItem);
  // const [count, setCount] = useState(0);
  console.log("dddd", cartData);
  const cartItems = cartData.cart.map((item) => (
    <CartItem
      key={item.id}
      item={item}
      onIncrement={() =>
        cartDispatcher({
          type: "increment",
          id: item.id,
          //payload
          data: cartData.cart,
          totalAmount: cartData.totalAmount,
        })
      }
      onChange={(e) =>
        cartDispatcher({
          type: "edit",
          event: e,
          id: item.id,
          data: cartData.cart,
        })
      }
      onDecrement={() =>
        cartDispatcher({
          type: "decrement",
          id: item.id,
          data: cartData.cart,
          totalAmount: cartData.totalAmount,
        })
      }
    />
  ));
  // const cartLength = cartItems.filter((p)=>p.quantity>0).length
  return (
    <div>
      <Modal onClose={props.onClose}>
        {!cartItems.length && (
          <p className={styles.cartEmptyMessage}>Your Cart is Empty!</p>
        )}
        <div>{cartItems}</div>
        <div className={styles.total}>
          <span>TotalAmoun</span>

          <span>
            {cartData.totalAmount <= 0 ? 0 : `$${cartData.totalAmount}`}
          </span>
        </div>
        <div className={styles.actions}>
          <button className={styles["button--alt"]} onClick={props.onClose}>
            close
          </button>
          <button className={styles.button}>order</button>
        </div>
      </Modal>
    </div>
  );
};

export default Cart;
