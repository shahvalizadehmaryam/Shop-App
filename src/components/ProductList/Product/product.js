import style from "./product.module.css";
import { useCart, useCartAction } from "../../../provider/cartProvider";
import { useToasts } from "react-toast-notifications";
import {
  useProduct,
  useProductAction,
} from "../../../provider/productProvider";
import { useEffect } from "react/cjs/react.development";
const Product = ({ product }) => {
  const { addToast } = useToasts();
  const cartData = useCart();
  const cartDispatcher = useCartAction();
  const dispatcher = useProductAction();
  const addToCartHandler = () => {
    if (product.quantity >= product.warhouse) {
      addToast("Sorry , Check out inventory", { appearance: "error" });
    } else {
      cartDispatcher({ type: "ADD", payload: product });

      addToast("Added to cart successfully!", {
        appearance: "success",
        autoDismiss: true,
      });
    }
  };
  return (
    <div className={style.product}>
      <img
        className={style.productImage}
        src={require(`../../../assets/${product.path}`).default}
      ></img>
      <p className={style.productTitle}>{product.title}</p>
      <p>{product.type}</p>
      <div className={style.line}></div>
      <p>${product.price}</p>
      <button className={style.button} onClick={addToCartHandler}>
        <span>Add To cart</span>
      </button>
    </div>
  );
};

export default Product;
