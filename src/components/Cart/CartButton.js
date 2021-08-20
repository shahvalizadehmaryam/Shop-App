import { FaShoppingCart } from "react-icons/fa";
import { useCart, useCartAction } from "../../provider/cartProvider";
import styles from "./CartButton.module.css";
const CartButton = (props) => {
  const cartData = useCart();
  const cartDispatcher = useCartAction();
  console.log("span", cartData);
  const cartLength = cartData.cart.filter((p) => p.quantity > 0).length;
  return (
    <div className={styles.cartContainer}>
      <button onClick={props.onShow} className={styles.shoppingCartBtn}>
        <FaShoppingCart />
        shop
        <span>{cartLength}</span>
      </button>
    </div>
    //   <hr />
  );
};

export default CartButton;
