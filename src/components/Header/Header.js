import Filter from "./Filter";
import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";
// import homeIcon from "../../assets/home-icon.png";
import ShoppingCartIcon from "../../assets/shopping-cart.png";
import { useCart, useCartAction } from "../../provider/cartProvider";
import { FaShoppingCart } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa";
import User from "../User/user";

const Header = (props) => {
  const cartData = useCart();
  const countItem = cartData.cart.length;
  console.log("cartData", cartData);
  return (
    <div className={styles.headerContainer}>
      <h2 className={styles.headerTitle}>Shopping App</h2>
      {/* <Filter /> */}
      <User />
      <div className={styles.cartPart}>
        <NavLink to="/" className={styles.navlink}>
          <FaHome />
        </NavLink>
        <NavLink activeClassName="active" to="/cart">
          <button type="button" className={styles.iconButton}>
            <FaShoppingCart className={styles.cartIcon} />
            <span className={styles.iconButtonBadge}>{countItem}</span>
          </button>
        </NavLink>
        <NavLink to="/signup" className={styles.navlink}>
          <FaUserPlus />
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
