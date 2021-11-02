import { useCart, useCartAction } from "../../../provider/cartProvider";
import styles from "./Cart.module.css";
import CartItem from "./CartItem";
import { useToasts } from "react-toast-notifications";

const Cart = (props) => {
  const { addToast } = useToasts();
  const cartData = useCart();
  const cartDispatcher = useCartAction();
  console.log("cartData", cartData);
  const totalAmount = cartData.totalAmount.toFixed(2);
  const cartItems = cartData.cart.map((item) => (
    <CartItem
      key={item.id}
      item={item}
      onIncrement={() => {
        if (item.quantity < item.warhouse) {
          cartDispatcher({
            type: "increment",
            id: item.id,
          });
        } else {
          addToast("Sorry , Check out inventory", { appearance: "error" });
        }
      }}
      onDecrement={() =>
        cartDispatcher({
          type: "decrement",
          id: item.id,
        })
      }
    />
  ));
  return (
    <div>
      {!cartItems.length && (
        <p className={styles.cartEmptyMessage}>Your Cart is Empty!</p>
      )}
      <div>{cartItems}</div>
      <div className={styles.total}>
        <span>TotalAmoun</span>

        <span className={styles.amount}>
          {cartData.totalAmount <= 0 ? 0 : `$${totalAmount}`}
        </span>
      </div>
      <div className={styles.actions}>
        <button className={styles["button--alt"]} onClick={props.onClose}>
          close
        </button>
        <button className={styles.button}>order</button>
      </div>
    </div>
  );
};

export default Cart;

//cartItem component
