import style from "./product.module.css";
import { FaShoppingCart } from "react-icons/fa";
import { useState } from "react";
import { useCart, useCartAction } from "../../provider/cartProvider";
const Product = ({ product }) => {
  const [inputValue, setInputValue] = useState(1);
  const cartData = useCart();
  const cartDispatcher = useCartAction();
  const inputChangeHandler = (e) => {
    setInputValue(e.target.value);
  };
  // console.log("cartDataaaaaaa", cartData);
  const formSubmitHandler = (e) => {
    e.preventDefault();
    const productObj = {
      id: product.id,
      title: product.title,
      // description: product.description,
      quantity: +inputValue,
      price: product.price,
      type: product.type,
    };
    // const xx = cartData.cart.concat(productObj);
    // console.log("productAdd", xx);
    // console.log("xx", xx);

    cartDispatcher({ type: "ADD", data: productObj });
    // cartDispatcher({ type: "COUNTITEM" });
  };
  // console.log(inputValue);
  return (
    <div className={style.product}>
      <img
        src={require(`../../assets/${product.path}`).default}
        width="100%"
        height="130px"
      ></img>
      <p>{product.title}</p>
      <p>{product.type}</p>
      <p>${product.price}</p>

      <form onSubmit={formSubmitHandler}>
        <div>
          <input
            className={style.input}
            type="number"
            defaultValue={inputValue}
            onChange={inputChangeHandler}
            min="1"
          />
          <button type="submit" className={style.button}>
            <span>add cart</span>
            <FaShoppingCart />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Product;
