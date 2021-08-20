import Filter from "./Filter";
import { FaShoppingCart } from "react-icons/fa";
import classes from "./sidebar.modul.css";
import CartButton from "../Cart/CartButton";
import { useCart, useCartAction } from "../../provider/cartProvider";

const Sidebar = (props) => {
  // const carts = useCart();
  // const cartDispatcher = useCartAction();
  // const item = carts.filter((p) => p.quantity);
  // console.log("dd", item);

  return (
    <div className="x">
      <CartButton onShow={props.onShow} />
      <Filter />
    </div>
  );
};

export default Sidebar;
