import { useCart, useCartAction } from "../../../provider/cartProvider";
import styles from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartData = useCart();
  const cartDispatcher = useCartAction();
  console.log("cartData", cartData);
  const totalAmount = cartData.totalAmount.toFixed(2);
  const cartItems = cartData.cart.map((item) => (
    <CartItem
      key={item.id}
      item={item}
      onIncrement={() =>
        cartDispatcher({
          type: "increment",
          id: item.id,
          data: cartData.cart,
          totalAmount: cartData.totalAmount,
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
